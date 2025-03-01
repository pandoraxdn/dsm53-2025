import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {useFormHook} from '../hooks/useFormHook';
import { appTheme } from '../themes/appTheme';

export const FormSreen = () => {

    const { formData, formList, handleInputChange, handleSubmit } = useFormHook();

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin 
            }}
        >
            <Text
                style={{ ...appTheme.title }}
            >
                Formulario de usuarios
            </Text>
            <TextInput
                value={ formData.username }
                onChangeText={ (text) => handleInputChange('username', text) }
                placeholder='Nombre del usuario'
                placeholderTextColor='violet'
            />
            <TextInput
                value={ formData.password }
                onChangeText={ (text) => handleInputChange('password', text) }
                secureTextEntry={ true }
                placeholder='Contraseña del usuario'
                placeholderTextColor='violet'
            />
            <TextInput
                value={ formData.cp }
                onChangeText={ (text) => handleInputChange('cp', text) }
                keyboardType='numeric'
                placeholder='Código Postal'
                placeholderTextColor='violet'
            />
            <TouchableOpacity
                onPress={ () => handleSubmit() }
            >
                <View
                    style={{
                        backgroundColor: "pink",
                        width: 100,
                        height: 30,
                        borderRadius: 100,
                        alignItems: "center"
                    }}
                >
                    <Text
                        style={{
                            alignSelf: "center",
                            fontSize: 20,
                            color: "black"
                        }}
                    >
                        Enviar
                    </Text>
                </View>
            </TouchableOpacity>
            <View>
                {( formList.map( ( form, index ) => (
                    <Text 
                        key={index}
                        style={{ fontSize: 16 }}
                    >
                        { JSON.stringify(form) }
                    </Text>
                )))}
            </View>
        </View>
    )
}
