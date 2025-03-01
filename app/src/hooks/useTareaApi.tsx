import { useEffect, useState } from 'react';
import { pandoraApi } from '../api/pandoraApi';
import { TareasResponse } from '../interfaces/tareasInterfaces';
import { FormData } from './useFormTarea';

export const useTareaApi = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const [ listTarea, setListTarea ] = useState<TareasResponse>({} as TareasResponse);

    const apiUrl: string = 'http://192.168.1.34:3000/api/v1/tarea';

    const loadTarea =  async () => {
        setIsLoading(true);
        const response = await pandoraApi.get<TareasResponse>(apiUrl);
        setListTarea( response.data );
        setIsLoading(false);
    }

    useEffect( () => {
        loadTarea();
    },[]);

    const createTarea = async ( data: FormData ) => {
        const dataBody = {
            titulo: data.titulo,
            descripcion: data.descripcion,
            estado: data.estado
        }

        await pandoraApi.post( apiUrl, dataBody );
    }

    const updateTarea = async ( data: FormData ) => {
        const dataBody = {
            titulo: data.titulo,
            descripcion: data.descripcion,
            estado: data.estado
        }

        await pandoraApi.patch( apiUrl + `/${data._id}`, dataBody );
    }

    const deleteTarea = async ( data: FormData ) => {
        await pandoraApi.delete( apiUrl + `/${data._id}`);
    }

    return { isLoading, loadTarea, listTarea, createTarea, updateTarea, deleteTarea };

}
