import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

interface Position{
    latitude: number; 
    longitude: number;
}

export const Screen1 = () => {

    const initialCords: Position = {
        latitude: 19.281793,
        longitude: -99.641343,
    }

    const [ position, setPosition ] = useState<Position>(initialCords);

    const [ path, setPath ] = useState([{
        latitude: 19.281793,
        longitude: -99.641343,
    }]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition( prev => {
                const newPosition: Position = {
                    latitude: prev.latitude + 0.0001,
                    longitude: prev.longitude + 0.0001,
                }
                setPath( prevPath => [ ...prevPath, newPosition ] );
                return newPosition;
            });
        },2000);
        return () => clearInterval(interval);
    },[]);

    return(
        <View
            style={ styles.container }
        >
            <MapView
                style={ styles.map }
                initialRegion={{
                    latitude: position.latitude,
                    longitude: position.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Polyline
                    coordinates={path}
                    strokeWidth={5}
                    strokeColor='black'
                    lineDashPattern={[5,5]}
                />
                <Marker
                    coordinate={position}
                    title='Ubicación en movimiento'
                >
                    <Image
                        source={ require('./../../../assets/cuervo.png') }
                        style={ styles.img }
                    />
                </Marker>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: "100%",
        height: "100%"
    },
    img: {
        height: 50,
        width: 60
    }
});
