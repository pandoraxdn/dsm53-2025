import React, { useEffect } from 'react';
import { View, Text, TextInput, Image, SafeAreaView, Alert, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackUserParams } from '../../navigator/UserNavigator';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { useFormUser } from '../../hooks/useFormUser';
import { BtnTouch } from '../../components/BtnTouch';
import { appTheme } from '../../themes/appTheme';

interface Props extends StackScreenProps<RootStackUserParams,'FormUserScreen'>{};

export const FormUserScreen = ( { navigation, route } : Props ) => {

    const {
        state,
        handleSubmit,
        handleInputChange,
        handleDelete
    } = useFormUser();

    useEffect( () => {
        const usuario = route.params.user;
        handleInputChange('id_user', usuario.id_user);
        handleInputChange('username', usuario.username);
        handleInputChange('email', usuario.email);
        handleInputChange('image', usuario.image);
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
            quality: 0.5
        });

        ( !result.canceled ) && ( () => {
            convertImageToBase64( result.assets[0].uri );
        })();

    }

    const convertImageToBase64 = async ( imageUri: string ) => {
        try{
            const base64 = await FileSystem.readAsStringAsync( imageUri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            handleInputChange('image', base64);
        }catch (error){
            console.log(error);
        }
    }

    return(
        <SafeAreaView
            style={{ flex:1 }}
        >
            <ScrollView>
                <View
                    style={{
                        ...appTheme.globalMargin,
                        ...appTheme.globalContainer
                    }}
                >
                    {
                        ( state.id_user !== '' ) &&
                        <BtnTouch
                            title='Eliminar Usuario'
                            onPress={ () => {
                                handleDelete();
                                navigation.popToTop();
                            }}
                            background='red'
                        />
                    }
                    <View
                        style={{ alignItems: "center" }}
                    >
                        {/* Formulario */}
                        <TextInput
                            style={ appTheme.input }
                            value={ state.email }
                            textContentType='emailAddress'
                            onChangeText={ (text) => handleInputChange('email', text) }
                            placeholder='E-mail'
                        />
                        <TextInput
                            style={ appTheme.input }
                            value={ state.username }
                            onChangeText={ (text) => handleInputChange('username', text) }
                            placeholder='Nombre del usuario'
                        />
                        <TextInput
                            style={ appTheme.input }
                            textContentType='password'
                            secureTextEntry={true}
                            value={ state.password }
                            onChangeText={ (text) => handleInputChange('password', text) }
                            placeholder='Contraseña del usuario'
                        />
                        <BtnTouch
                            title='Selecionar Imagen'
                            onPress={ pickImage }
                            background='black'
                        />
                        {
                            ( state.image !== '' ) &&
                            <Image
                                source={{ uri: `data:image/jpeg;base64,${state.image}` }}
                                style={{ width: 200, height: 200, borderRadius: 20 }}
                            />
                        }
                        <BtnTouch
                            onPress={ () => {
                                handleSubmit();
                                navigation.popToTop();
                            }}
                            title={ (state.id_user !== '') ? 'Actulizar Registro' : 'Crear Registro' }
                            background='violet'
                        />
                        <BtnTouch
                            onPress={ () => navigation.popToTop() }
                            title='Regresar'
                            background='pink'
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

