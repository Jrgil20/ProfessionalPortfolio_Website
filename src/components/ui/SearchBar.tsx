import { Search } from 'lucide-react';
import { useState } from 'react';

type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

const SearchBar = ({ placeholder = 'Search...', onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={18} className="text-neutral-500" />
        </div>
        <input
          type="search"
          value={query}
          onChange={handleChange}
          className="w-full p-3 pl-10 text-sm text-neutral-900 bg-white rounded-lg border border-neutral-300 focus:ring-primary-500 focus:border-primary-500 outline-none"
          placeholder={placeholder}
        />
      </div>
    </form>
  );
};

export default SearchBar;