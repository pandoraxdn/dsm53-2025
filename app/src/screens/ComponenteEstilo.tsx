import React from 'react';
import { View, Text } from 'react-native';

export const ComponenteEstilo = () => {

    return(
        <View>
            <Text
                style={{
                    fontSize: 30,
                    color: "rgba(104, 58, 162,0.9)"
                }}
            >
                Estilos
            </Text>
            <View
                style={{
                    backgroundColor: "#000000",
                    height: 100,
                    width: 100,
                    paddingVertical: 10
                }}
            />
            <View
                style={{
                    backgroundColor: "violet",
                    height: 100,
                    width: 100,
                    paddingVertical: 10
                }}
            />
            <View
                style={{
                    backgroundColor: "pink",
                    height: 100,
                    width: 100,
                    paddingVertical: 10
                }}
            />
        </View>
    )
}

