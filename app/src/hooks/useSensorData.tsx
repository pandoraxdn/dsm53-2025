import { useEffect, useState } from "react";
import { pandoraApi } from "../api/pandoraApi";
import {
   RecordsResponse,
   Today,
   Yesterday,
   BeforeYesterday
} from './../interfaces/recordsDataInterfaces';

interface TypeData {
    min: number,
    max: number,
    labels: string[],
    values: number[],
}

export const useSensorData = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ data, setData ] = useState<RecordsResponse>();
    const [ today, setToday ] = useState<TypeData>();
    const [ yesterday, setYesterday ] = useState<TypeData>();
    const [ beforeYesterday, setBeforeYesterday ] = useState<TypeData>();

    const urlData = 'http://192.168.1.103:3000/api/v1/data/minery';

    const loadData = async () => {
        setIsLoading(false);

        const response = await pandoraApi.get<RecordsResponse>(urlData);
        setData( response.data );
        chartData( 'today', data?.records.today );
        chartData( 'yesterday', data?.records.yesterday );
        chartData( 'beforeYesterday', data?.records.beforeYesterday );

        setIsLoading(true);

    }

    const chartData = ( type: string, data: any ) => {
        switch( type ){
            case 'today':
                ( data != undefined ) &&
                ( ( data: Today ) => {
                    const labels = data.lastToday.map((document) => {
                        let fecha = new Date( document.fecha );
                        return fecha.toLocaleString('es-MX', { hour: 'numeric', minute: 'numeric', hour12: true })
                    });
                    const values = data.lastToday.map((document) => {
                        return document.temperatura;
                    });
                    setToday({
                        min: data.minToday,
                        max: data.maxToday,
                        labels,
                        values,
                    });
                })( data );
            break;
            case 'yesterday':
                (data != undefined) &&
                ( ( data: Yesterday ) => {
                    const labels = data.lastYesterday.map((document) => {
                        let fecha = new Date( document.fecha );
                        return fecha.toLocaleString('es-MX', { hour: 'numeric', minute: 'numeric', hour12: true })
                    });
                    const values = data.lastYesterday.map((document) => {
                        return document.distancia_cm;
                    });
                    setYesterday({
                        min: data.maxYesterday,
                        max: data.minYesterday,
                        labels,
                        values,
                    });
                })( data );
            break;
            case 'beforeYesterday':
                (data != undefined) &&
                ( ( data: BeforeYesterday ) => {
                    const labels = data.lastBeforeYesterday.map((document) => {
                        let fecha = new Date( document.fecha );
                        return fecha.toLocaleString('es-MX', { hour: 'numeric', minute: 'numeric', hour12: true })
                    });
                    const values = data.lastBeforeYesterday.map((document) => {
                        return document.temperatura;
                    });
                    setBeforeYesterday({
                        min: data.minBeforeYesterday,
                        max: data.maxBeforeYesterday,
                        labels,
                        values,
                    });
                })( data );
            break;
        }
    }

    useEffect( () => {
        loadData();
    },[]);

    return { isLoading, loadData, data, today, yesterday, beforeYesterday };

}

