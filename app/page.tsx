import PokemonList from '@/components/pokemon-list';
import React from 'react';

async function getData() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon: { url: string }) => {
        const res = await fetch(pokemon.url);
        if (!res.ok) {
          throw new Error(`Response status: ${res.status}`);
        }
        const details = await res.json();
        return {
          id: details.id,
          name: details.name,
          types: details.types.map(
            (type: { type: { name: string } }) => type.type.name
          ),
          imageUrl: details.sprites.other['official-artwork'].front_default,
          url: details.url,
        };
      })
    );
    return pokemonDetails;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return [];
  }
}

export default async function Home() {
  const pokemons = await getData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 to-black-900 flex flex-col items-center justify-center text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center my-8">
          Pokedex
        </h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            className="mx-auto text-center bg-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Pokémon..."
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <PokemonList pokemons={pokemons} />
        </div>
      </div>
    </div>
  );
}
