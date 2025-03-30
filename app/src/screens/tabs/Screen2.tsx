import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

interface Position{
    latitude: number; 
    longitude: number;
}

export const Screen2 = () => {

    const initialCords: Position = {
        latitude: 19.281793,
        longitude: -99.641343,
    }

    const route: Position[] = [
        { latitude: 19.281793, longitude: -99.641343 }, // Ruta inicial
        { latitude: 19.283845616546426, longitude: -99.63998509603303 },
        { latitude: 19.28427094516248, longitude: -99.63338686225688 },
        { latitude: 19.28789352048407, longitude: -99.62653869879377 },
        { latitude: 19.28055175609446, longitude: -99.5220737276009  },
        { latitude: 19.340648, longitude: -99.476052 }, // UTVT
    ];


    const mapRef = useRef<MapView | null>(null);

    const [ followMarker, setFollowMarker ] = useState(false);

    const [ index, setIndex ] = useState(0);

    const [ zoom, setZoom ] = useState(15);

    const [ position, setPosition ] = useState<Position>(initialCords);

    const [ path, setPath ] = useState([{
        latitude: 19.281793,
        longitude: -99.641343,
    }]);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex(prevIndex => {
            if (prevIndex < route.length - 1) {
              const nextPosition = {
                latitude: position.latitude + (route[prevIndex + 1].latitude - position.latitude) * 0.1,
                longitude: position.longitude + (route[prevIndex + 1].longitude - position.longitude) * 0.1,
              };
              setPosition(nextPosition);
              setPath(prevPath => [...prevPath, nextPosition]);

              if ( followMarker && mapRef.current?.animateCamera ){
                mapRef.current.animateCamera(
                  {
                    center: position,
                    zoom: zoom,
                  },
                  { duration: 200 }
                );
              }
              
              if (Math.abs(nextPosition.latitude - route[prevIndex + 1].latitude) < 0.0001 &&
                  Math.abs(nextPosition.longitude - route[prevIndex + 1].longitude) < 0.0001) {
                return prevIndex + 1;
              }
              return prevIndex;
            } else {
              clearInterval(interval);
              return prevIndex;
            }
          });
        }, 500);
        return () => clearInterval(interval);
    }, [position, zoom, followMarker]);


  const handleZoomIn = () => {
    setZoom((prevZoom) => {
      const newZoom = prevZoom + 1;
      if (mapRef.current?.animateCamera) {
        mapRef.current.animateCamera(
          {
            center: position,
            zoom: newZoom,
          },
          { duration: 200 }
        );
      }
      return newZoom;
    });
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => {
      const newZoom = prevZoom - 1 < 0 ? 0 : prevZoom - 1;
      if (mapRef.current?.animateCamera) {
        mapRef.current.animateCamera(
          {
            center: position,
            zoom: newZoom,
          },
          { duration: 200 }
        );
      }
      return newZoom;
    });
  };
    return(
        <View
            style={ styles.container }
        >
            <MapView
                style={ styles.map }
                ref={ (ref) => { mapRef.current = ref; } }
                initialRegion={{
                    latitude: route[0].latitude,
                    longitude: route[0].longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Polyline
                    coordinates={route}
                    strokeWidth={5}
                    strokeColor='green'
                    lineDashPattern={[5,5]}
                />
                <Polyline
                    coordinates={path}
                    strokeWidth={5}
                    strokeColor='cyan'
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
            <View
                style={ styles.logo }
            >
                <Image
                    source={ require('./../../../assets/Logo.jpg') }
                    style={{ 
                        width: 100,
                        height: 100,
                        borderRadius: 100,
                        alignSelf: "flex-end",
                        borderWidth: 10,
                        borderColor: "olive",
                    }}
                />
            </View>
            <View
                style={ styles.buttonContainer }
            >
                <Button
                  title={followMarker ? 'Dejar de seguir' : 'Seguir icono'}
                  onPress={() => setFollowMarker(!followMarker)}
                />
            </View>
            <View
                style={ styles.zoomContainer }
            >
                <Button
                    title='Zoom +'
                    onPress={ () => handleZoomIn() }
                />
                <Button
                    title='Zoom -'
                    onPress={ () => handleZoomOut() }
                />
            </View>
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
    },
    logo: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 80,      // Ajusta para que no se encimen los botones
        left: 20,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    zoomContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
