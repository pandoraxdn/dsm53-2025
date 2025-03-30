import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { appTheme } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

export const DrawerMenu = ( { navigation }: DrawerContentComponentProps ) => {

    const { authState } = useContext(AuthContext);

    const assets: string = './../../assets/';

    return (
        <DrawerContentScrollView>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Image
                    style={ appTheme.avatar }
                    source={
                        ( authState.isLoggenIn)
                        ? { uri: 'https://cdn.pixabay.com/photo/2023/03/25/23/58/capybara-7877166_640.png' }
                        : require( assets + 'avatar.jpeg' )    
                    }
                />
                <Text
                    style={{
                        marginTop: 10,
                        ...appTheme.title
                    }}
                >
                    {
                        ( authState.isLoggenIn ) 
                            ? authState.userName
                            : 'Inciar sesión'
                    }
                </Text>
            </View>
            <View
                style={ appTheme.menuContainer }
            >
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("StackNavigator") }
                >
                    <Text
                        style={appTheme.textBtn}
                    >
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("FormSreen") }
                >
                    <Text
                        style={appTheme.textBtn}
                    >
                        Formulario
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("PokemonNavigator") }
                >
                    <Text
                        style={appTheme.textBtn}
                    >
                        Pokedex
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("SettingsScreen") }
                >
                    <Text
                        style={appTheme.textBtn}
                    >
                        Configuraciones
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("TareaNavigator") }
                >
                    <Text
                        style={appTheme.textBtn}
                    >
                        Crud Tareas
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("UserNavigator") }
                >
                    <Text
                        style={appTheme.textBtn}
                    >
                        Crud Usuario
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("CharScreen") }
                >
                    <Text
                        style={appTheme.textBtn}
                    >
                        Graficas
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("ImagePickerScreen") }
                >
                    <Text
                        style={appTheme.textBtn}
                    >
                        Cargar Imagen
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("SensorDataScreen") }
                >
                    <Text
                        style={appTheme.textBtn}
                    >
                        Graficas en tipo Real
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("BottomTabNavigator") }
                >
                    <Text
                        style={appTheme.textBtn}
                    >
                        Tabs
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );

}
