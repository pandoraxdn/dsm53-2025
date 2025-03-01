import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeTarea } from '../screens/tarea/HomeTarea';
import { FormTarea } from '../screens/tarea/FormTarea';
import { TareasResponse } from '../interfaces/tareasInterfaces';

export type RootStackTareasParams = {
    HomeTarea: undefined;
    FormTarea: { tarea: TareasResponse };
}

export const TareaNavigator = () => {

    const Stack = createStackNavigator<RootStackTareasParams>();

    return(
        <Stack.Navigator
            initialRouteName='HomeTarea'
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
                name='HomeTarea'
                component={HomeTarea}
                options={{ title: "Index Tarea" }}
            />
            <Stack.Screen
                name='FormTarea'
                component={FormTarea}
                options={{ title: "Create/Update Tarea" }}
            />
        </Stack.Navigator>
    );
}

