import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonHomeScreen } from '../screens/pokeapi/PokemonHomeScreen';
import { PokemonScreen } from '../screens/pokeapi/PokemonScreen';
import { NewPokemonList } from '../interfaces/pokemonInterfaces';

export type RootStackPokemonParams = {
    PokemonHomeScreen: undefined;
    PokemonScreen: { NewPokemonList: NewPokemonList };
}

const Stack = createStackNavigator<RootStackPokemonParams>();

export const PokemonNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: "white"
                }
            }}
        >
            <Stack.Screen
                component={ PokemonHomeScreen }
                name='PokemonHomeScreen'
                options={{ title: "Pokemon Home" }}
            />
            <Stack.Screen
                component={ PokemonScreen }
                name='PokemonScreen'
                options={{ title: "Pokemon Detail" }}
            />
        </Stack.Navigator>
    );
}

