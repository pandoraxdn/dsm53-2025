import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import {PokemonSimple} from '../interfaces/pokemonInterfaces';
import { appTheme } from '../themes/appTheme';
import { useTypeColorPokemon } from '../hooks/useTypeColorPokemon';

interface Props{
    pokemon: PokemonSimple;
}

export const PokemonDetail = ( {pokemon}: Props ) => {

    const { color, isLoading } = useTypeColorPokemon( pokemon.id );

    return(
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject
            }}
        >
            {/*Types*/}
            <View>
                <Text
                    style={{
                        ...appTheme.title,
                        marginTop: 370,
                        marginHorizontal: 20,
                    }}
                >
                    Type(s)
                </Text>
                <View
                    style={{ flexDirection: "row" }}
                >
                    {
                        pokemon.types.map( ({ type }) => (
                            <Text
                                key={type.name}
                                style={{
                                    fontSize: 20,
                                    color: "white",
                                    marginRight: 10,
                                    marginHorizontal: 20,
                                    borderRadius: 5,
                                    backgroundColor: (isLoading) ? "gray" : color[0]
                                }}
                            >
                                { type.name }
                            </Text>
                        ))
                    }
                </View>
                {/*Peso*/}
                <View>
                    <Text
                        style={{
                            ...appTheme.title,
                            marginHorizontal: 20,
                        }}
                    >
                        Weight
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                            marginHorizontal: 20,
                        }}
                    >
                        { pokemon.weight + ' lb' }
                    </Text>
                </View>
                {/* Sprites */}
                <View>
                    <Text
                        style={{
                            ...appTheme.title,
                            marginHorizontal: 20
                        }}
                    >
                        Sprites
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Image
                            style={{
                                height: 100,
                                width: 100
                            }}
                            source={{
                                uri: pokemon.sprites.front_default
                            }}
                        />
                        <Image
                            style={{
                                height: 100,
                                width: 100
                            }}
                            source={{
                                uri: pokemon.sprites.back_default
                            }}
                        />
                        <Image
                            style={{
                                height: 100,
                                width: 100
                            }}
                            source={{
                                uri: pokemon.sprites.front_shiny
                            }}
                        />
                        <Image
                            style={{
                                height: 100,
                                width: 100
                            }}
                            source={{
                                uri: pokemon.sprites.back_shiny
                            }}
                        />
                        <Image
                            style={{
                                height: 100,
                                width: 100
                            }}
                            source={{
                                uri: pokemon.sprites.back_shiny
                            }}
                        />
                        {
                            (pokemon.sprites.front_female) && (
                                <Image
                                    style={{
                                        height: 100,
                                        width: 100
                                    }}
                                    source={{
                                        uri: pokemon.sprites.front_female
                                    }}
                                />
                            )
                        }
                        {
                            (pokemon.sprites.back_female) && (
                                <Image
                                    style={{
                                        height: 100,
                                        width: 100
                                    }}
                                    source={{
                                        uri: pokemon.sprites.back_female
                                    }}
                                />
                            )
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}
