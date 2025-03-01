import { useEffect, useState } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { UserResponse } from "../interfaces/userInterfaces";
import { FormUserData } from "./useFormUser";

export const useUserApi = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ listUser, setListUser ] = useState<UserResponse>({} as UserResponse);

    const apiUrl = 'http://192.168.1.102:3000/api/v1/user';

    const loadUsers = async () => {
        setIsLoading(false);
        const response = await pandoraApi.get<UserResponse>( apiUrl );
        setListUser( response.data );
        setIsLoading(true);
    }

    const createUser = async ( data: FormUserData ) => {
        const dataBody = {
            username:   data.username,
            image:      data.image,
            password:   data.password,
            email:      data.email
        }

        await pandoraApi.post( apiUrl, dataBody );
    }

    const updateUser = async ( data: FormUserData ) => {
        const dataBody = {
            username:   data.username,
            image:      data.image,
            email:      data.email
        }

        const dataPass =
            ( data.password !== '' )
            ? { ...dataBody, password: data.password }
            : dataBody;

        await pandoraApi.patch( apiUrl + `/${data.id_user}`, dataPass );
    }

    const deleteUser = async ( data: FormUserData ) => {
        await pandoraApi.delete( apiUrl + `/${data.id_user}` );
    }

    useEffect( () => {
        loadUsers();
    },[]);

    return { 
        isLoading, 
        loadUsers, 
        listUser, 
        createUser, 
        updateUser, 
        deleteUser 
    };

}
