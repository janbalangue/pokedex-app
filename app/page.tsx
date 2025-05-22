export default function Home() {
  const pokedata = [
    {
      id: 1,
      name: "Bulbasaur",
      type: "Grass",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: 2,
      name: "Ivysaur",
      type: "Grass",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
      id: 3,
      name: "Venusaur",
      type: "Grass",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    {
      id: 4,
      name: "Charmander",
      type: "Fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 5,
      name: "Charmeleon",
      type: "Fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    },
    {
      id: 6,
      name: "Charizard",
      type: "Fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
    {
      id: 7,
      name: "Squirtle",
      type: "Water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 8,
      name: "Wartortle",
      type: "Water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    },
    {
      id: 9,
      name: "Blastoise",
      type: "Water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    },
    {
      id: 10,
      name: "Caterpie",
      type: "Bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    },
    {
      id: 11,
      name: "Metapod",
      type: "Bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
    {
      id: 12,
      name: "Butterfree",
      type: "Bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 to-black-900 flex flex-col items-center justify-center text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 etx">
          Pokedex
        </h1>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            className="mx-auto text-center bg-gray-800 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for a Pokémon"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {pokedata.map((pokemon, idx) => (
            <div
              key={`${idx}-${pokemon.name}`}
              className="flex flex-col items-center bg-gray-800 rounded-lg transition-transform duration-200 hover:scale-105 p-4"
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <div className="mt-2 font-semibold">{pokemon.name}</div>
              <div className="text-sm text-gray-400">{pokemon.type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
