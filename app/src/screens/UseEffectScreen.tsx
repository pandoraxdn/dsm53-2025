import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export const UseEffectScreen = () => {

    const [ hora, setHora ] = useState( new Date() );

    const [ bgColor, setBgColor ] = useState<string>();

    const colors = [ "violet", "pink", "orange", "white", "red" ];

    const random = () => {
        const color = colors[ Math.floor( Math.random() * colors.length ) ];
        setBgColor( color );
    }

    useEffect( () => {

        const interval = setInterval( () => {
            setHora( new Date );
            return () => clearInterval(interval);
        },1000);

        const intervalColor = setInterval(()=>{
            random();
            return () => clearInterval(intervalColor);
        },700);

    },[]);

    return(
        <View
            style={{
                flex: 1,
                alignContent: "center",
                alignItems: "center"
            }}
        >
            <Text
                style={{
                    fontSize: 50,
                    paddingTop: 200,
                    color: bgColor
                }}
            >
                Alan
            </Text>
            <Text
                style={{
                    fontSize: 50,
                    paddingTop: 400,
                    color: bgColor
                }}
            >
                { hora.toLocaleTimeString() }
            </Text>
        </View>
    )
}

