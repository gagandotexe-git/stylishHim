'use client';
import { useState, useEffect, useRef } from 'react';
import { Mic, X, Search } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const { transcript, listening } = useSpeechRecognition();

  // 💾 Load history from localStorage
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(history);
  }, []);

  // 🎤 Update when using voice input
  useEffect(() => {
    if (transcript) setQuery(transcript);
  }, [transcript]);

  // 🧩 Static product data (no API)
  const products = [
    { id: 1, name: 'Nykaa Lipstick', category: 'Makeup', image: '/images/productseven.jpeg' },
    { id: 2, name: 'Lakme Eyeliner', category: 'Makeup', image: '/images/productseven.jpeg' },
    { id: 3, name: "L'Oreal Shampoo", category: 'Haircare', image: '/images/productseven.jpeg' },
    { id: 4, name: 'Maybelline Mascara', category: 'Makeup', image: '/images/productseven.jpeg' }
  ];

  // 🔍 Handle typing
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(true);

    if (value.trim()) {
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // 🕑 Handle selecting search
  const handleSearch = (text) => {
    setQuery(text);
    setShowSuggestions(false);
    const updated = [text, ...searchHistory.filter((h) => h !== text)].slice(0, 5);
    setSearchHistory(updated);
    localStorage.setItem('searchHistory', JSON.stringify(updated));
  };

  // 🎙️ Mic toggle
  const startVoiceSearch = () => {
    if (!listening) SpeechRecognition.startListening();
    else SpeechRecognition.stopListening();
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Search Input */}
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white  ">
        <Search className="text-gray-500" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for products, brands, etc..."
          value={query}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
          className="flex-1 px-2 outline-none text-black placeholder-gray-400 bg-transparent"
        />
        {query && (
          <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600 transition">
            <X size={18} />
          </button>
        )}
        <button
          onClick={startVoiceSearch}
          className={`ml-2 transition ${listening ? 'text-red-500' : 'text-gray-500 hover:text-gray-700'}`}
        >
          <Mic />
        </button>
      </div>

      {/* Suggestions Box */}
      {showSuggestions && (suggestions.length > 0 || searchHistory.length > 0) && (
        <div className="absolute left-0 right-0 bg-white border border-gray-200 mt-2 rounded-xl shadow-2xl max-h-80 overflow-y-auto z-10 backdrop-blur-sm">
          {/* Search History */}
          {query === '' && searchHistory.length > 0 && (
            <div>
              <p className="px-4 py-2 text-gray-500 text-sm border-b">Recent Searches</p>
              {searchHistory.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSearch(item)}
                  className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer transition"
                >
                  {item}
                </div>
              ))}
            </div>
          )}

          {/* Product Suggestions */}
          {suggestions.map((product) => (
            <div
              key={product.id}
              onClick={() => handleSearch(product.name)}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 rounded-lg object-cover shadow-sm"
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-black">{product.name}</p>
                <p className="text-xs text-gray-500">{product.category}</p>
              </div>
            </div>
          ))}

          {/* No Results */}
          {query && suggestions.length === 0 && (
            <p className="px-4 py-3 text-sm text-gray-500">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
