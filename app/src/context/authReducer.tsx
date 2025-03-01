import { AuthState } from "./AuthContext";
import { FormData } from "../hooks/useFormHook";

type AuthActions = 
    | { type: 'singIn' } 
    | { type: 'logout' } 
    | { type: "chageFavImage", payload: string }
    | { type: "chageUserName", payload: string }
    | { type: "setForm", payload: FormData };

export const authReducer = ( state: AuthState, action: AuthActions ) => {

    switch( action.type ){
        case "singIn":
            return {
                ...state,
                isLoggenIn: true,
                username: "no_name_user_yet"
        };
        case "logout":
            return {
                ...state,
                isLoggenIn:     false,
                userName:       undefined,
                favoriteImage:  undefined,
        };
        case "chageFavImage":
            return {
                ...state,
                favoriteImage: action.payload,
        };
        case "chageUserName":
            return {
                ...state,
                userName: action.payload,
        };
        case "setForm":
            return {
                ...state,
                formData: action.payload,
        };
        default:
            return { ...state };
    }

}
