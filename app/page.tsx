import PokemonWrapper from '@/components/pokemon-wrapper';
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
        const res = await fetch(pokemon.url, { next: { revalidate: 3600 } });
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
    <div className="min-h-screen bg-gradient-to-b from-gray-700 to-black-900 text-white">
      <div className="container mx-auto">
        <h1 className="pt-8 text-4xl md:text-6xl font-bold text-center">
          Pokedex
        </h1>
        <PokemonWrapper pokemons={pokemons} />
      </div>
    </div>
  );
}
