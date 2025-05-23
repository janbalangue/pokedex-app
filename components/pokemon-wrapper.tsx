'use client';
import { Pokemon } from '@/utils/types';
import React from 'react';
import { useState } from 'react';
import SearchInput from './search-input';
import PokemonList from './pokemon-list';

export default function PokemonWrapper({ pokemons: initialPokemons }: { pokemons: Pokemon[]}) {
    const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(initialPokemons);

    const handleSearch = 
        (search: string) => {
        const filtered = initialPokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredPokemons(filtered);
    };
    // This function handles the search input and filters the pokemons based on the search term.
    // It updates the state with the filtered pokemons.
    // The filtered pokemons are then passed to the PokemonList component to display the results.

    return (
        <React.Fragment>
            <SearchInput onSearch={handleSearch} />
            <PokemonList pokemons={filteredPokemons} />
        </React.Fragment>
    )
}
// This component wraps the children in a styled container with a white background, shadow, and rounded corners.