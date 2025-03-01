import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TareasResponse } from '../interfaces/tareasInterfaces';

interface Props{
    tarea: TareasResponse;
}

export const TareaCard = ( { tarea }: Props ) => {

    const navigation = useNavigation();

    const { width } = Dimensions.get("window");

    const status = (tarea: TareasResponse) => {
        switch( tarea.estado ){
            case "En proceso":
                return 'gray';
            case "Completado":
                return 'green';
            case "Pendiente":
                return 'brown';
            default:
                return 'white';
        }
    }

    return(
        <TouchableOpacity
            key={ `${tarea._id}${tarea.__v}` }
            activeOpacity={ 0.9 }
            onPress={ () => navigation.navigate('FormTarea', { tarea }) }
        >
            <View
                style={{
                    ...style.cardContainer,
                    backgroundColor: status(tarea),
                    width: width * 0.4
                }}
            >
                <Text
                    style={ style.title }
                >
                    { `Título: \n ${tarea.titulo}` }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        height: 120,
        width: 120,
        marginBottom: 25,
        borderRadius: 20,
        overflow: "hidden",
    },
    title:{
        marginTop: 10,
        marginHorizontal: 15,
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
});

