import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props{
    onPress:        () => void;
    background?:    string;
    title:          string;
}

export const BtnTouch = ( { onPress, background='pink', title }: Props ) => {

    return(
        <TouchableOpacity
            onPress={ onPress }
        >
            <View
                style={{
                    ...style.btnContainer,
                    backgroundColor: background
                }}
            >
                <Text
                    style={ style.btnTitle }
                >
                    { title }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    btnContainer:{
        borderRadius: 20,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        justifyContent: "center",
        height: 50,
        width: 120,
    },
    btnTitle:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
});

