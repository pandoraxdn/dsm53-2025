import React from 'react';
import { View, StyleSheet } from 'react-native';

export const FlexScreen = () => {

    return(
        <View
            style={ style.container }
        >
            <View
                style={ style.box1 }
            />
            <View
                style={ style.box2 }
            />
            <View
                style={ style.box3 }
            />
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    box1:{
        backgroundColor: "pink",
        height: 100,
        width: 100,
        alignSelf: "flex-start"
    },
    box2:{
        backgroundColor: "green",
        height: 100,
        width: 100
    },
    box3:{
        backgroundColor: "blue",
        height: 100,
        width: 100,
        alignSelf: "flex-end"
    }
});

