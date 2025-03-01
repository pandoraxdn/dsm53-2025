import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NewPokemonList } from '../interfaces/pokemonInterfaces';
import { useTypeColorPokemon } from '../hooks/useTypeColorPokemon';
import { useNavigation } from '@react-navigation/native';


interface Props{
    pokemon: NewPokemonList;
}

const withWindows = Dimensions.get("window").width;

export const PokemonCard = ( { pokemon }: Props ) => {

    const navigation = useNavigation();

    const { color, isLoading } = useTypeColorPokemon(`${pokemon.id}`);
    
    return(
        <TouchableOpacity 
            activeOpacity={ 0.9 }
            onPress={ () => navigation.navigate( "PokemonScreen", { NewPokemonList: pokemon } ) }
        >
            <View
                style={{
                    ...style.containerCard,
                    width:  withWindows * 0.4,
                }}
            >
                <View
                    style={{
                        ...style.backgroundTop,
                        backgroundColor: (isLoading) ? 'gray'
                        : (color.length > 1) ? color[1] : color[0]
                    }}
                />
                <View
                    style={{
                        ...style.backgroundBottom,
                        backgroundColor: (isLoading) ? 'gray'
                        : color[0]
                    }}
                />
                <View
                    style={{ marginHorizontal: 5 }}
                >
                    <Text
                        style={ style.name }
                    >
                        { `${pokemon.name}` }
                        { `\n#${pokemon.id}` }
                    </Text>
                </View>
                {/*Background pokeball*/}
                <Image
                    style={ style.pokeball }
                    source={ require('./../../assets/pokeball-light.png') }
                />
                <Image
                    style={ style.pokemon }
                    source={{ uri: pokemon.picture }}
                />
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    containerCard:{
        marginHorizontal: 10,
        height: 120,
        width: 120,
        marginBottom: 25,
        borderRadius: 20,
        overflow: 'hidden'
    },
    backgroundTop:{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: "50%",
        backgroundColor: "blue",
        transform: [
            { rotateX: "20deg" },
            { rotateY: "-45deg" },
            { scale: 2 }
        ]
    },
    backgroundBottom:{
        position: "absolute",
        top: "50%",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "red",
        transform: [
            { rotateX: "20deg" },
            { rotateY: "-45deg" },
            { scale: 2 }
        ]
    },
    pokeball:{
        height: 120,
        width: 120,
        position: "absolute",
        bottom: -20,
        right: -20,
        opacity: 0.5
    },
    pokemon:{
        height: 100,
        width: 100,
        position: "absolute",
        right: -8,
        bottom: -5.
    },
    name: {
        color: "white",
        fontSize: 22
    }
});

