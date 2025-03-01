import React, { useState, useEffect } from 'react';
import { View, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { BtnTouch } from '../components/BtnTouch';


export const ImagePickerScreen = () => {

    const [ image, setImage ] = useState<string|null>(null);
    const [ image64, setImage64 ] = useState<string|null>(null);

    useEffect(() => {
        ( async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if( status !== "granted" ){
                Alert.alert(
                    "Permiso requerido",
                    "Debes otorgar el permiso para acceder a la galería."
                );
            }
        })();
    },[]);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4,3],
            quality: 0.9
        });

        ( !result.canceled ) && ( () => {
            setImage( result.assets[0].uri );
            convertImageToBase64( result.assets[0].uri );
        })();

    }

    const convertImageToBase64 = async ( imageUri: string ) => {
        try{
            const base64 = await FileSystem.readAsStringAsync( imageUri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            setImage64( base64 );
        }catch (error){
            console.log(error);
        }
    }

    return(
        <View
            style={{
                flex:1,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <BtnTouch
                title='Seleccionar Imagen'
                onPress={ pickImage }
                background='black'
            />
            {
                (image) &&
                (
                    <Image
                        source={{
                            uri: `data:image/jpeg;base64,${image64}`
                        }}
                        style={{
                            width: 300,
                            height: 300,
                            borderRadius: 20
                        }}
                    />            
                )
            }
        </View>
    )
}
