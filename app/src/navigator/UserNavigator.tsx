import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeUserScreen } from '../screens/user/HomeUserScreen';
import { FormUserScreen } from '../screens/user/FormUserScreen';
import { UserResponse } from '../interfaces/userInterfaces';

export type RootStackUserParams = {
    HomeUserScreen: undefined;
    FormUserScreen: { user: UserResponse };
}

export const UserNavigator = () => {

    const Stack = createStackNavigator<RootStackUserParams>();

    return(
        <Stack.Navigator
            initialRouteName='HomeUserScreen'
            screenOptions={{
                headerMode: 'float',
                headerShown: false,
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
                name='HomeUserScreen'
                component={HomeUserScreen}
                options={{ title: "Index Usuario" }}
            />
            <Stack.Screen
                name='FormUserScreen'
                component={FormUserScreen}
                options={{ title: "Create/Update Usuario" }}
            />
        </Stack.Navigator>
    );
}

