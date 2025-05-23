import { Pokemon } from '@/utils/types';
import Image from 'next/image';

export default function PokemonCard({ name, imageUrl, id, types }: Pokemon) {
  return (
    <div className="bg-gray-800 rounded-lg transition-transform duration-200 hover:scale-105 ring-2 ring-gray-700">
      <Image
        className="rounded-full"
        src={imageUrl}
        alt={name}
        width={250}
        height={250}
      />
      <h2 className="mt-2 font-semibold text-center">{name}</h2>
      <p className="text-center text-gray-500">{id}</p>
      <div className="text-center text-gray-400">{types.join(', ')}</div>
    </div>
  );
}
