import { useReducer, useState, useContext } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { AuthContext } from "../context/AuthContext";
import { LoginReponse } from "../interfaces/userInterfaces";

export interface LoginData{
    email:      string;
    password:   string;
}

const initialLoginData: LoginData = {
    email:      '',
    password:   ''
}

type Action = { type: 'handleInputChange', payload: { fieldName: keyof LoginData, value: string } };

const dataReducer = ( state: LoginData, action: Action ) => {
    switch( action.type ){
        case 'handleInputChange':
            return{
                ...state,
                [ action.payload.fieldName ] : action.payload.value
        }
        default:
            return{
                ...state
        }
    }
}

export const useLogin = () => {

    const [ loading, setLoading ] = useState<boolean>(true);
    const [ state, dispatch ] = useReducer( dataReducer, initialLoginData );
    const [ request, setRequest ] = useState<LoginReponse>();
    const { singIn, chageUserName, chageFavImage } = useContext( AuthContext );

    const handleInputChange = ( fieldName: keyof LoginData, value: string ) => {
        dispatch( { type: "handleInputChange", payload: { fieldName, value } } )
    }

    const handleLogin =  async () => {
        setLoading(false);
        const apiUrl = 'http://192.168.1.102:3000/api/v1/user/login';

        const dataBody = {
            email: state.email,
            password: state.password
        }

        try{
            const response = await pandoraApi.post<LoginReponse>(apiUrl, dataBody);
            ( response.data !== false ) && ( () => {
                singIn();
                chageFavImage( response.data.image );
                chageUserName( response.data.username );
                setRequest( response.data );
            })();
        }catch(error){
            console.log(error);
            setRequest(false);
        }
    }


    return { loading, state, handleLogin, handleInputChange, request };

}
