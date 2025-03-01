import { useState,useRef, useEffect } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { NewPokemonList, PokemonPaginateResponse, Result  } from './../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const [ simplePokemonList, setSimplePokemonList ] = useState<NewPokemonList[]>([]);

    const nextPageUrl = useRef("https://pokeapi.co/api/v2/pokemon/?limit=20");

    const loadPokemons = async () => {

        setIsLoading(true);

        const response = await pokemonApi.get<PokemonPaginateResponse>(nextPageUrl.current);

        nextPageUrl.current = response.data.next;

        mapPokemonList(response.data.results);


    }

    const mapPokemonList = ( PokemonList: Result[] ) => {

        const newPokemonList: NewPokemonList[] = PokemonList.map( ({ name, url }) => {
            // https://pokeapi.co/api/v2/pokemon/1
            const urlParts = url.split('/');
            const id = urlParts[ urlParts.length - 2 ];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return {
                id,
                name,
                picture
            }
        });

        setSimplePokemonList( (prevList) => [ ...prevList, ...newPokemonList ] );

        setIsLoading(false);

    }

    useEffect( () => {
        loadPokemons();
    },[]);

    return { isLoading, simplePokemonList, loadPokemons };


}
