import React,{useState} from 'react';
import { View, Text, Button } from 'react-native';
import { Fab } from '../components/Fab';
import { useCounterHook, Data } from '../hooks/useCounterHook';

export const ContadorSimple = () => {


    const initial: Data = {
        count: 12
    }

    const { value, add, decrement }= useCounterHook( initial );

    return(
        <View
            style={{ alignItems: "center" }}
        >
            <Text
                style={{
                    fontSize: 30,
                    color: "blue"
                }}
            >
                Contador: {value.count}
            </Text>
            <Fab
                title='Añadir'
                position='button_left'
                onPress={ () => add() }
            />
            <Fab
                title='Decre'
                position='button_left'
                onPress={ () => decrement() }
            />
        </View>
    );
}

