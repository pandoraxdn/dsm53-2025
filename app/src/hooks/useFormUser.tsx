import { useReducer } from "react";
import { useUserApi } from "./useUserApi";

export interface FormUserData{
    id_user:        number | string;
    username:       string;
    email:          string;
    image:          string;
    password:       string;
}

export const initialStateUserForm: FormUserData = {
    id_user:    '',
    username:   '',
    password:   '',
    image:      '',
    email:      ''
}

type Action = 
    { type: 'handleInputChange', payload: { fieldName: keyof FormUserData, value: string | number } };

const formReducer = ( state: FormUserData, action: Action ) => {
    switch( action.type ){
        case 'handleInputChange':
            return {
                ...state,
                [ action.payload.fieldName ] : action.payload.value
        }
        default:
            return {
            ...state
        }
    }
}

export const useFormUser = () => {
    const [ state, dispatch ] = useReducer( formReducer, initialStateUserForm );

    const { createUser, updateUser, deleteUser } = useUserApi();

    const handleInputChange = ( fieldName: keyof FormUserData, value: string | number ) => {
        dispatch( { type: "handleInputChange", payload: { fieldName, value } } );
    }

    const handleSubmit = () => {
        ( state.id_user !== '' )
        ? updateUser( state )
        : createUser( state );
    }

    const handleDelete = () => {
        deleteUser( state );
    }

    return { state, handleInputChange, handleSubmit, handleDelete };
}
