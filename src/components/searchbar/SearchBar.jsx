'use client';
import { useState, useEffect, useRef } from 'react';
import { Search, Mic, X } from 'lucide-react';

const products = [
  { id: 1, name: 'Nykaa Lipstick', category: 'Makeup', image: '/images/productseven.jpeg' },
  { id: 2, name: 'Lakme Eyeliner', category: 'Makeup', image: '/images/productseven.jpeg' },
  { id: 3, name: "L'Oreal Shampoo", category: 'Haircare', image: '/images/productseven.jpeg' },
  { id: 4, name: 'Maybelline Mascara', category: 'Makeup', image: '/images/productseven.jpeg' },
  { id: 5, name: 'Gillette Mach3 Razor', category: 'Razors for Men', image: '/images/productseven.jpeg' },
  { id: 6, name: 'Philips Trimmer Series 3000', category: 'Trimmers', image: '/images/productseven.jpeg' },
  { id: 7, name: 'Nivea Men Shaving Foam', category: 'Shave', image: '/images/productseven.jpeg' },
  { id: 8, name: 'Axe Body Spray', category: 'Fragrances', image: '/images/productseven.jpeg' },
  { id: 9, name: 'Dove Body Wash', category: 'Bath & Body', image: '/images/productseven.jpeg' },
  { id: 10, name: 'Himalaya Face Wash', category: 'Skincare', image: '/images/productseven.jpeg' },
  { id: 11, name: 'Cetaphil Gentle Cleanser', category: 'Skincare', image: '/images/productseven.jpeg' },
  { id: 12, name: 'Mamaearth Vitamin C Serum', category: 'Skincare', image: '/images/productseven.jpeg' },
  { id: 13, name: 'Revlon Hair Spray', category: 'Haircare', image: '/images/productseven.jpeg' },
  { id: 14, name: 'Tresemme Shampoo', category: 'Haircare', image: '/images/productseven.jpeg' },
  { id: 15, name: 'Lotus Herbals Sunscreen', category: 'Skincare', image: '/images/productseven.jpeg' },
  { id: 16, name: 'Patanjali Aloe Vera Gel', category: 'Skin', image: '/images/productseven.jpeg' },
  { id: 17, name: 'Park Avenue Deodorant', category: 'Fragrances', image: '/images/productseven.jpeg' },
  { id: 18, name: 'Forest Essentials Facial Oil', category: 'Skincare', image: '/images/productseven.jpeg' },
  { id: 19, name: 'Kama Ayurveda Soap', category: 'Bath & Body', image: '/images/productseven.jpeg' },
  { id: 20, name: 'Harpic Toilet Cleaner', category: 'Homecare', image: '/images/productseven.jpeg' },
  { id: 21, name: 'TRESemmé Keratin Smooth', category: 'Haircare', image: '/images/productseven.jpeg' },
  { id: 22, name: 'Bajaj Almond Drops Hair Oil', category: 'Haircare', image: '/images/productseven.jpeg' },
  { id: 23, name: 'Ponds Cold Cream', category: 'Skincare', image: '/images/productseven.jpeg' },
  { id: 24, name: 'Lakme Compact Powder', category: 'Makeup', image: '/images/productseven.jpeg' },
  { id: 25, name: 'Maybelline Fit Me Foundation', category: 'Makeup', image: '/images/productseven.jpeg' },
  { id: 26, name: 'Batiste Dry Shampoo', category: 'Haircare', image: '/images/productseven.jpeg' },
  { id: 27, name: 'Braun Electric Shaver', category: 'Razors for Men', image: '/images/productseven.jpeg' },
  { id: 28, name: 'Himalaya Herbals Face Pack', category: 'Skincare', image: '/images/productseven.jpeg' },
  { id: 29, name: 'Ambi Skincare Cream', category: 'Skincare', image: '/images/productseven.jpeg' },
  { id: 30, name: 'Colgate Toothpaste', category: 'Oral Care', image: '/images/productseven.jpeg' },
  { id: 31, name: 'Sensodyne Toothpaste', category: 'Oral Care', image: '/images/productseven.jpeg' },
  { id: 32, name: 'Batiste Volume Dry Shampoo', category: 'Haircare', image: '/images/productseven.jpeg' },
  { id: 33, name: 'The Man Company Beard Oil', category: 'Gifts for Men', image: '/images/productseven.jpeg' },
  { id: 34, name: 'Old Spice Aftershave', category: 'Fragrances', image: '/images/productseven.jpeg' },
  { id: 35, name: 'Nivea Soft Moisturizer', category: 'Skincare', image: '/images/productseven.jpeg' },
  { id: 36, name: 'Garnier Micellar Water', category: 'Skincare', image: '/images/productseven.jpeg' },
  { id: 37, name: 'Loreal Men Expert Face Wash', category: 'Skin', image: '/images/productseven.jpeg' },
  { id: 38, name: 'Park Avenue Beard Trimmer', category: 'Trimmers', image: '/images/productseven.jpeg' },
  { id: 39, name: 'Philips OneBlade', category: 'Trimmers', image: '/images/productseven.jpeg' },
  { id: 40, name: 'Nivea Men Deodorant', category: 'Fragrances', image: '/images/productseven.jpeg' },
  { id: 41, name: 'Dove Shampoo', category: 'Haircare', image: '/images/productseven.jpeg' },
  { id: 42, name: 'Clinique Moisturizer', category: 'Skincare', image: '/images/productseven.jpeg' },
  { id: 43, name: 'Biotique Bio Honey Gel', category: 'Skincare', image: '/images/productseven.jpeg' },
  { id: 44, name: 'Vaseline Petroleum Jelly', category: 'Skin', image: '/images/productseven.jpeg' },
  { id: 45, name: 'Himalaya Soap', category: 'Bath & Body', image: '/images/productseven.jpeg' },
  { id: 46, name: 'Yardley London Soap', category: 'Bath & Body', image: '/images/productseven.jpeg' },
  { id: 47, name: 'Forest Essentials Lip Balm', category: 'Makeup', image: '/images/productseven.jpeg' },
  { id: 48, name: 'Streax Hair Serum', category: 'Haircare', image: '/images/productseven.jpeg' },
  { id: 49, name: 'Nivea Lip Conditioner', category: 'Skin', image: '/images/productseven.jpeg' },
  { id: 50, name: 'Mamaearth Charcoal Face Pack', category: 'Skincare', image: '/images/productseven.jpeg' }
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [history, setHistory] = useState([]);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const handleSearch = (value) => {
    setQuery(value);
    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSelect = (name) => {
    setQuery(name);
    setSuggestions([]);
    const updated = [name, ...history.filter((item) => item !== name)].slice(0, 5);
    setHistory(updated);
    localStorage.setItem('searchHistory', JSON.stringify(updated));
  };

  const clearHistory = () => {
    localStorage.removeItem('searchHistory');
    setHistory([]);
  };

  const startVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice search not supported on this browser.');
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      handleSearch(transcript);
      handleSelect(transcript);
    };
    recognition.start();
    recognitionRef.current = recognition;
  };

  return (
    <div className="relative max-w-xl mx-auto mt-4">
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm">
        <Search className="text-gray-500 mr-2" size={20} />
        <input
          type="text"
          placeholder="Search for products, brands and more..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-grow outline-none text-sm"
        />
        {query && (
          <X size={18} className="cursor-pointer text-gray-400 mr-2" onClick={() => setQuery('')} />
        )}
        <Mic
          size={20}
          onClick={startVoiceSearch}
          className={`cursor-pointer ${listening ? 'text-pink-500 animate-pulse' : 'text-gray-500'}`}
        />
      </div>

      {(suggestions.length > 0 || history.length > 0) && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-2 shadow-lg max-h-80 overflow-y-auto">
          {query.trim() === '' && history.length > 0 && (
            <div className="p-3 text-sm">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 font-semibold">Recent Searches</span>
                <button onClick={clearHistory} className="text-xs text-pink-500 hover:underline">
                  Clear
                </button>
              </div>
              {history.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleSelect(item)}
                  className="px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                >
                  {item}
                </div>
              ))}
            </div>
          )}

          {suggestions.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelect(item.name)}
              className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
            >
              <img src={item.image} alt={item.name} className="w-10 h-10 rounded-md object-cover" />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
