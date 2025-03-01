import { useReducer } from "react";
import { pandoraApi } from "../api/pandoraApi";
import {useTareaApi} from "./useTareaApi";

export interface FormData {
    _id:            string;
    titulo:         string;
    descripcion:    string;
    estado:         'Completado' | 'En proceso' | 'Pendiente';
}

export const initialStateForm: FormData = {
    _id: '',
    titulo: '',
    descripcion: '',
    estado: 'Pendiente',
}

type Action =  { type: "handleInputChange", payload: { fieldName: keyof FormData, value: string } };

const fomrReducer = ( state: FormData, action: Action ) => {
    switch( action.type ){
        case 'handleInputChange':
            return {
            ...state,
            [ action.payload.fieldName ] : action.payload.value
        }
        default:
            return { ...state };
    }
}

export const useFormTarea = () => {

    const { createTarea, updateTarea, deleteTarea } = useTareaApi();

    const [ state, dispatch ] = useReducer( fomrReducer, initialStateForm );

    const handleInputChange = ( fieldName: keyof FormData, value: string ) => {
        dispatch( { type: 'handleInputChange', payload: { fieldName, value } } );
    }

    const handleSubmit = () => {
        (state._id === '')
        ? createTarea( state )
        : updateTarea( state );
    }

    const handleDelete = () => {
        deleteTarea( state );
    }

    return { state, handleInputChange, handleSubmit, handleDelete };

}



