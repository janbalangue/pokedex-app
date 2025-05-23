import { Pokemon } from '@/utils/types';
import PokemonCard from './pokemon-card';

export default function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-8">
      {pokemons.map((pokemon: Pokemon, idx: number) => (
        <PokemonCard {...pokemon} key={`${idx}-${pokemon.name}`} />
      ))}
      </div>
  );
}
