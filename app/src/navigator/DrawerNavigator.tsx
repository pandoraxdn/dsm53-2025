import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
import { StackNavigator } from "./StackNavigator";
import { PokemonNavigator } from "./PokemonNavigator";
import { SettingsScreen } from './../screens/SettingsScreen';
import { FormSreen } from "../screens/FormScreen";
import { DrawerMenu } from './../components/DraweMenu';
import { TareaNavigator } from "./TareaNavigator";
import { ImagePickerScreen } from "../screens/ImagePickerScreen";
import { UserNavigator } from "./UserNavigator";
import { LoginScreen } from "../screens/user/LoginScreen";

export type RootDrawerParams = {
    StackNavigator:     undefined;
    PokemonNavigator:   undefined;
    SettingsScreen:     undefined;
    FormSreen:          undefined;
    TareaNavigator:     undefined;
    ImagePickerScreen:  undefined;
    UserNavigator:      undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

const Navigator = () =>{
    
    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            initialRouteName="StackNavigator"
            screenOptions={{
                headerShown: true,
                drawerType:  width >= 768 ? 'permanent' : 'front',
                drawerPosition: "right",
                //overlayColor: 'transparent',
                drawerStyle: {
                    backgroundColor: 'rgba(200,200,200,0.99)',
                    width: width * 0.7
                }
            }}
            drawerContent={ (props) => <DrawerMenu {...props}/> }
        >
            <Drawer.Screen
                name="StackNavigator"
                options={{ title: "Home" }}
                component={ StackNavigator }
            />
            <Drawer.Screen
                name="PokemonNavigator"
                options={{ title: "Podekex" }}
                component={ PokemonNavigator }
            />
            <Drawer.Screen
                name="FormSreen"
                component={ FormSreen }
            />
            <Drawer.Screen
                name="SettingsScreen"
                options={{ title: "Configuraciones" }}
                component={ SettingsScreen }
            />
            <Drawer.Screen
                name="ImagePickerScreen"
                component={ ImagePickerScreen }
            />
            <Drawer.Screen
                name="TareaNavigator"
                options={{ title: "TareaNavigator" }}
                component={ TareaNavigator }
            />
            <Drawer.Screen
                name="UserNavigator"
                component={ UserNavigator }
            />
        </Drawer.Navigator>
    );
}

export const DrawerNavigator = () => {
    const { authState } = useContext( AuthContext );
    return ( authState.isLoggenIn )  ? <Navigator/> : <LoginScreen/>;
}
