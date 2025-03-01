import React from 'react';
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {

    return(
        <View
            style={style.container}
        >
            <View
                style={style.cajaMorada}
            />
            <View
                style={style.cajaNaranja}
            />
            <View
                style={style.cajaVerde}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
    },
    cajaMorada:{
        width: 200,
        height: 200, 
        backgroundColor: "violet",
        borderWidth: 10,
        borderColor: "pink",
        borderRadius: 100,
        top:0,
        left: 100
    },
    cajaNaranja:{
        width: 100,
        height: 100, 
        backgroundColor: "orange",
        borderWidth: 10,
        borderRadius: 100,
        borderColor: "pink",
        top:0,
        right: 0
    },
    cajaVerde:{
        width: 150,
        height: 150, 
        borderRadius: 100,
        backgroundColor: "green",
        borderWidth: 10,
        borderColor: "pink",
        top:0,
        left: 200
    }
});

