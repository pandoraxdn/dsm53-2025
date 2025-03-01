import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { usePokemonPaginated } from '../../hooks/usePokemonPaginated';
import { PokemonCard } from '../../components/PokemonCard';
import { appTheme } from '../../themes/appTheme';

export const PokemonHomeScreen = () => {

    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin
            }}
        >
            <Image
                source={ require('./../../../assets/pokeball-dark.png') }
                style={{
                    height: 300,
                    width: 300,
                    top: -100,
                    right: -100,
                    position: "absolute"
                }}
            />
            <FlatList
                data={ simplePokemonList }
                keyExtractor={ (pokemon, index) => `${pokemon.id}${index}` }

                //header
                ListHeaderComponent={(
                    <Text
                        style={{
                            marginTop: 20,
                            fontWeight: "bold",
                            ...appTheme.title,
                            ...appTheme.globalMargin,
                        }}
                    >
                        Pokedex
                    </Text>
                )}

                //body
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={ ({item}) => (
                    <PokemonCard
                        pokemon={item}
                    />                 
                )}

                // Infinite Scroll
                onEndReached={ loadPokemons }
                onEndReachedThreshold={ 0.2 }

                //footer
                ListFooterComponent={(
                    <ActivityIndicator
                        style={{ height: 120 }}
                        size={ 50 }
                        color="pink"
                    />
                )}
            />
        </View>
    )
}
