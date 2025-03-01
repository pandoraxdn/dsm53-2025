import React, { createContext, useReducer, ReactNode } from 'react';
import {authReducer} from './authReducer';
import { FormData } from './../hooks/useFormHook';

// Definir estructura del Context
export interface AuthState{
    isLoggenIn:     boolean;
    userName:       string | undefined;
    favoriteImage:  string | undefined;
    formData:       FormData | undefined;
}

// Definición del estado inicial
export const AuthInitialState: AuthState = {
    isLoggenIn:     false,
    userName:       undefined,
    favoriteImage:  undefined,
    formData:       undefined,
}

// Exportación de métodos y atributos
export interface AuthContextProps{
    authState:      AuthState;
    singIn:         () => void;
    logout:         () => void;
    chageUserName:  ( userName: string ) => void;
    chageFavImage:  ( sourceImage: string ) => void;
    setForm:        ( formulario: FormData ) => void;
}

// Creación de context
export const AuthContext = createContext( {} as AuthContextProps );

// Creación de provider
export const AuthProvider = ( { children }: { children: ReactNode } ) => {

    // Reducer
    const [ authState, dispatch ] = useReducer( authReducer, AuthInitialState );

    const singIn = () => dispatch({ type: "singIn" });
    const logout = () => dispatch({ type: "logout" });
    const chageFavImage = ( sourceImage: string ) => {
        dispatch({ type: "chageFavImage", payload: sourceImage });
    }
    const chageUserName = ( userName: string ) => {
        dispatch({ type: "chageUserName", payload: userName });
    }

    const setForm = ( formulario: FormData ) => {
        dispatch({ type: "setForm", payload: formulario });
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                singIn,
                logout,
                chageFavImage,
                chageUserName,
                setForm
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}
