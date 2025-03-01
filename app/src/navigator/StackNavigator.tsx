import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenI } from '../screens/stack/ScreenI';
import { ScreenII } from '../screens/stack/ScreenII';
import { ScreenIII } from '../screens/stack/ScreenIII';
import { UserScreen } from '../screens/stack/UserScreen';

export type RootStackParams = {
    ScreenI:    undefined;
    ScreenII:   undefined;
    ScreenIII:  undefined;
    UserScreen: { username: string, lastname: string };
}

export const StackNavigator = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return(
        <Stack.Navigator
            initialRouteName='ScreenI'
            screenOptions={{
                headerMode: 'float',
                headerShown: true,
                headerStyle:{
                    height: 100,
                    shadowColor: 'violet',
                    backgroundColor: 'violet',
                    borderColor: 'pink',
                    borderWidth: 6,
                    borderRadius: 20,
                    opacity: 0.7,
                },
                headerTitleStyle:{
                    fontWeight: "bold",
                    color: "white"
                },
                headerTintColor: 'white',
                cardStyle:{
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen
                name='ScreenI'
                component={ScreenI}
                options={{ title: "Página 1" }}
            />
            <Stack.Screen
                name='ScreenII'
                component={ScreenII}
                options={{ title: "Página 2" }}
            />
            <Stack.Screen
                name='ScreenIII'
                component={ScreenIII}
                options={{ title: "Página 3" }}
            />
            <Stack.Screen
                name='UserScreen'
                component={UserScreen}
                options={{ title: "Datos del usuario" }}
            />
        </Stack.Navigator>
    );
}

