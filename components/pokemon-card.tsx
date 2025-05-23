import { Pokemon } from '@/utils/types';
import Image from 'next/image';

const typeColors: { [key: string]: string } = {
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-400',
  ice: 'bg-cyan-500',
  fighting: 'bg-purple-500',
  poison: 'bg-purple-700',
  ground: 'bg-yellow-700',
  flying: 'bg-blue-300',
  psychic: 'bg-pink-500',
  bug: 'bg-green-600',
  rock: 'bg-yellow-800',
  ghost: 'bg-purple-900',
  dragon: 'bg-red-700',
  dark: 'bg-gray-800',
  fairy: 'bg-pink-300',
  normal: 'bg-gray-600',
  steel: 'bg-gray-400'
}

export default function PokemonCard({ name, imageUrl, id, types }: Pokemon) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg text-center transform transition-transform duration-200 hover:scale-105 ring-2 ring-gray-700 p-4">
      <div className="relative aspect-square mb-4">
        <Image
          className="rounded-full"
          src={imageUrl}
          alt={name}
          width={250}
          height={250}
        />
      </div>
      <h2 className="text-xl font-bold capitalize">{name}</h2>
      <p className="text-gray-500 text-sm mb-1">#{String(id).padStart(3, '0')}</p>
      {types.map((type, idx) => (<span
        key={`${idx}-${type}`}
        className={`text-white mx-1 px-2 py-1 rounded-full text-sm font-semibold ${typeColors[type]}`}
        style={{ backgroundColor: typeColors[type] }}
        title={type}
      >
        {type}
      </span>))}
    </div>
  );
}
