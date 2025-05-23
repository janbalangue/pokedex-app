'use client';

interface SearchInputProps {
  onSearch: (search: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  return (
    <div className="flex items-center justify-center m-8">
      <input
        type="text"
        placeholder="Search Pokémon"
        className="border-2 border-blue-400 rounded-lg p-2 w-full max-w-md text-center"
        onChange= {(e) => onSearch(e.target.value)}
      />
    </div>
  );
}