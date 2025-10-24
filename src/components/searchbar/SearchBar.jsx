'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Mic, X, Search } from 'lucide-react';

const SearchBar = () => {
  // core state
  const [query, setQuery] = useState('');
  const [matches, setMatches] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [listeningBorderHidden, setListeningBorderHidden] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [listening, setListening] = useState(false);

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Categories
  const categorySuggestions = [
    'Razors for Men',
    'Best Sellers',
    'Gifts for Men',
    'Trimmers',
    'Shave',
    'Fragrances',
    'Skin',
    'Corporate Gifting',
    'Blog',
    'Women',
    'Haircare',
    'Makeup',
    'Skincare',
    'New Arrivals',
    'Top Rated',
    'Budget Buys',
    'Personal Care',
    'Bath & Body',
    'Oral Care',
    'Wellness'
  ];

  // Products
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

  // Load history from localStorage
  useEffect(() => {
    const h = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(h.slice(0, 5)); // Ensure only 5 items max
  }, []);

  // Click outside to close
  useEffect(() => {
    const onClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setShowSuggestions(false);
        setHighlightIndex(-1);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // Fuzzy matching function - calculates similarity between two strings
  const calculateSimilarity = (str1, str2) => {
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();
    
    // Exact match
    if (s1 === s2) return 1.0;
    
    // Check if one contains the other
    if (s1.includes(s2) || s2.includes(s1)) return 0.9;
    
    // Count matching characters in sequence
    let matches = 0;
    let j = 0;
    for (let i = 0; i < s1.length && j < s2.length; i++) {
      if (s1[i] === s2[j]) {
        matches++;
        j++;
      }
    }
    
    // Calculate match ratio
    const matchRatio = matches / Math.max(s1.length, s2.length);
    
    // Character position similarity
    let positionScore = 0;
    const minLen = Math.min(s1.length, s2.length);
    for (let i = 0; i < minLen; i++) {
      if (s1[i] === s2[i]) positionScore++;
    }
    const positionRatio = positionScore / Math.max(s1.length, s2.length);
    
    // Combined score
    return (matchRatio * 0.7 + positionRatio * 0.3);
  };

  // Enhanced search with fuzzy matching
  const performSearch = useCallback((text) => {
    const trimmedText = text.trim().toLowerCase();
    
    if (trimmedText.length === 0) {
      setMatches([]);
      return;
    }

    const tokens = trimmedText.split(/\s+/).filter(Boolean);
    const SIMILARITY_THRESHOLD = 0.5; // Match if at least 50% similar

    // Search categories with fuzzy matching
    const matchedCategories = categorySuggestions
      .map((cat) => {
        let maxScore = 0;
        const catLower = cat.toLowerCase();
        
        // Check each token against category
        tokens.forEach((token) => {
          const score = calculateSimilarity(token, catLower);
          if (score > maxScore) maxScore = score;
          
          // Also check against category words
          cat.split(/\s+/).forEach((word) => {
            const wordScore = calculateSimilarity(token, word.toLowerCase());
            if (wordScore > maxScore) maxScore = wordScore;
          });
        });
        
        return { category: cat, score: maxScore };
      })
      .filter((item) => item.score >= SIMILARITY_THRESHOLD)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((item, idx) => ({ 
        type: 'category', 
        id: `cat-${idx}`, 
        name: item.category,
        score: item.score 
      }));

    // Search products with fuzzy matching
    const matchedProducts = products
      .map((product) => {
        let maxScore = 0;
        const nameLower = product.name.toLowerCase();
        const categoryLower = product.category.toLowerCase();
        
        tokens.forEach((token) => {
          // Check against product name
          const nameScore = calculateSimilarity(token, nameLower);
          if (nameScore > maxScore) maxScore = nameScore;
          
          // Check against product name words
          product.name.split(/\s+/).forEach((word) => {
            const wordScore = calculateSimilarity(token, word.toLowerCase());
            if (wordScore > maxScore) maxScore = wordScore;
          });
          
          // Check against category
          const catScore = calculateSimilarity(token, categoryLower);
          if (catScore > maxScore) maxScore = catScore * 0.8; // Slightly lower weight for category
        });
        
        return { ...product, score: maxScore };
      })
      .filter((item) => item.score >= SIMILARITY_THRESHOLD)
      .sort((a, b) => b.score - a.score);

    // Combine results
    const unified = [
      ...matchedCategories,
      ...matchedProducts.map((p) => ({ type: 'product', ...p }))
    ];

    setMatches(unified.slice(0, 50));
  }, []);

  // Debounce
  const debounceRef = useRef(null);
  const DEBOUNCE_MS = 220;

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(true);
    setHighlightIndex(-1);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      performSearch(value);
    }, DEBOUNCE_MS);
  };

  // Handle selection and navigation
  const handleSelect = (item) => {
    if (!item) return;
    const text = item.type === 'category' ? item.name : item.name;
    setQuery(text);
    setShowSuggestions(false);
    setHighlightIndex(-1);
    
    // Update history - keep only last 5 searches
    const updated = [text, ...searchHistory.filter((h) => h !== text)].slice(0, 5);
    setSearchHistory(updated);
    localStorage.setItem('searchHistory', JSON.stringify(updated));
    
    // Navigate to products page
    setTimeout(() => {
      window.location.href = '/products/0';
    }, 100);
  };

  // Voice toggle (mock implementation)
  const toggleMic = () => {
    setListening(!listening);
    // In production, integrate with Web Speech API or react-speech-recognition
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (!showSuggestions) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightIndex((idx) => Math.min(idx + 1, matches.length - 1));
        scrollHighlightedIntoView(highlightIndex + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightIndex((idx) => Math.max(idx - 1, 0));
        scrollHighlightedIntoView(highlightIndex - 1);
      } else if (e.key === 'Enter') {
        if (highlightIndex >= 0 && matches[highlightIndex]) {
          handleSelect(matches[highlightIndex]);
        } else if (query.trim()) {
          handleSelect({ type: 'text', name: query });
        }
      } else if (e.key === 'Escape') {
        setShowSuggestions(false);
        setHighlightIndex(-1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showSuggestions, matches, highlightIndex, query]);

  const scrollHighlightedIntoView = (index) => {
    if (!suggestionsRef.current) return;
    const container = suggestionsRef.current;
    const children = container.children;
    if (!children || !children[index]) return;
    const child = children[index];
    const childTop = child.offsetTop;
    const childBottom = childTop + child.offsetHeight;
    const viewTop = container.scrollTop;
    const viewBottom = viewTop + container.clientHeight;
    if (childTop < viewTop) container.scrollTop = childTop;
    else if (childBottom > viewBottom) container.scrollTop = childBottom - container.clientHeight;
  };

  // Scroll handling
  useEffect(() => {
    const container = suggestionsRef.current;
    if (!container) return;
    let scrollTimeout = null;
    const onScroll = () => {
      setListeningBorderHidden(true);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setListeningBorderHidden(false);
      }, 180);
    };
    container.addEventListener('scroll', onScroll);
    return () => {
      container.removeEventListener('scroll', onScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [matches, showSuggestions]);

  const clearQuery = () => {
    setQuery('');
    setMatches([]);
    setShowSuggestions(false);
    setHighlightIndex(-1);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto" style={{ fontFamily: "'Marcellus', 'Work Sans', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Work+Sans:wght@400;500;600&display=swap');
      `}</style>
      
      <div
        className={`flex items-center rounded-full px-4 py-2 bg-white transition-shadow shadow-sm ${
          showSuggestions ? 'shadow-lg' : ''
        }`}
      >
        <Search className="text-gray-500 mr-2" />
        <input
          ref={inputRef}
          value={query}
          onChange={handleChange}
          onFocus={() => {
            setShowSuggestions(true);
            if (query.trim()) performSearch(query);
            else setMatches([]);
          }}
          placeholder="Search for products, brands, categories..."
          className="flex-1 outline-none text-black placeholder-gray-400 bg-transparent"
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        />

        {query ? (
          <button onClick={clearQuery} className="text-gray-400 hover:text-gray-600 transition mr-2">
            <X size={18} />
          </button>
        ) : null}

        <button
          onClick={toggleMic}
          className={`ml-1 transition ${listening ? 'text-red-500' : 'text-gray-500 hover:text-gray-700'}`}
          aria-label="Voice search"
        >
          <Mic />
        </button>
      </div>

      {showSuggestions && (matches.length > 0 || searchHistory.length > 0) && (
        <div
          className={`absolute left-0 right-0 mt-2 bg-white rounded-2xl z-20 overflow-hidden ${
            listeningBorderHidden ? '' : 'border border-gray-200'
          }`}
          style={{ boxShadow: '0 10px 30px rgba(10,10,10,0.08)' }}
        >
          {(!query || query.trim() === '') && searchHistory.length > 0 && (
            <div className="px-4 py-3 border-b">
              <p className="text-sm text-gray-500 mb-2">Recent searches</p>
              <div className="flex flex-wrap gap-2">
                {searchHistory.map((h, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect({ type: 'text', name: h })}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-black hover:bg-gray-200 transition"
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
          )}

          {(!query || query.trim() === '') && searchHistory.length === 0 && (
            <div className="px-4 py-3 border-b">
              <p className="text-sm text-gray-500 mb-2">Popular</p>
              <div className="flex flex-wrap gap-2">
                {categorySuggestions.slice(0, 8).map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setQuery(c);
                      performSearch(c);
                      setShowSuggestions(true);
                    }}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-black hover:bg-gray-200 transition"
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div
            ref={suggestionsRef}
            className="max-h-[calc(5*64px)] overflow-y-auto"
            style={{ scrollbarGutter: 'stable' }}
          >
            {matches.map((item, idx) => {
              const isHighlighted = idx === highlightIndex;
              if (item.type === 'category') {
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHighlightIndex(idx)}
                    onMouseLeave={() => setHighlightIndex(-1)}
                    onClick={() => handleSelect(item)}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition ${
                      isHighlighted ? 'bg-gray-100' : ''
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-sm font-semibold text-black shadow-sm">
                      <span className="px-2 text-center text-xs">{item.name}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black">{item.name}</p>
                      <p className="text-xs text-gray-500">Category</p>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHighlightIndex(idx)}
                  onMouseLeave={() => setHighlightIndex(-1)}
                  onClick={() => handleSelect(item)}
                  className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition ${
                    isHighlighted ? 'bg-gray-100' : ''
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-lg object-cover shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-semibold text-black">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.category}</p>
                  </div>
                </div>
              );
            })}

            {matches.length === 0 && query.trim() !== '' && (
              <div className="px-4 py-4 text-sm text-gray-500">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;