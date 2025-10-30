// ============================================
// FILE 1: components/SearchBar.jsx
// ============================================
'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Mic, MicOff, X, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();
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
  const historyRef = useRef([]);

  // Categories with keywords
  const categorySuggestions = [
    { name: 'Oral Care', keywords: ['oral', 'dental', 'teeth', 'toothpaste', 'mouth'] },
    { name: 'Wellness', keywords: ['wellness', 'health', 'vitamin', 'supplement'] },
    { name: 'Face Moisturizer', keywords: ['face', 'moisturizer', 'cream', 'lotion'] },
    { name: 'Serums', keywords: ['serum', 'treatment', 'essence'] },
    { name: 'Shampoo', keywords: ['shampoo', 'hair', 'wash'] },
    { name: 'Perfumes', keywords: ['perfume', 'fragrance', 'scent'] },
    { name: 'Lipstick', keywords: ['lipstick', 'lip', 'makeup'] }
  ];

  // Products with keywords
  const products = [
    { 
      id: 1, 
      name: 'Face Wash', 
      category: 'Makeup', 
      image: '/images/categoryImage/dailycare.png',
      keywords: ['face wash', 'cleanser', 'face mask', 'makeup', 'face serum', 'face care', 'facial cleanser']
    },
    { 
      id: 2, 
      name: 'Stylish Him', 
      category: 'glow', 
      image: '/images/categoryImage/skin.png',
      keywords: ['face glow mask', 'face pack', 'perfume', 'makeup']
    },
    { 
      id: 3, 
      name: "Shampoo", 
      category: 'Haircare', 
      image: '/images/categoryImage/hair.png',
      keywords: ['shampoo', 'hair', 'loreal', 'wash', 'haircare', 'clean']
    },
    { 
      id: 4, 
      name: 'Maybelline Mascara', 
      category: 'Makeup', 
      image: '/images/categoryImage/glow.jpeg',
      keywords: ['mascara', 'eye', 'maybelline', 'makeup', 'lash', 'eyelash']
    },
  ];

  // Check if mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load history
  useEffect(() => {
    setSearchHistory(historyRef.current.slice(0, 5));
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

  const calculateKeywordMatch = (searchTokens, keywords, text) => {
    let score = 0;
    const textLower = text.toLowerCase();
    
    searchTokens.forEach(token => {
      if (textLower.includes(token)) score += 1.0;
      keywords.forEach(keyword => {
        if (keyword.includes(token) || token.includes(keyword)) score += 0.8;
      });
    });
    return score;
  };

  const performSearch = useCallback((text) => {
    const trimmedText = text.trim().toLowerCase();
    
    if (trimmedText.length === 0) {
      setMatches([]);
      return;
    }

    const tokens = trimmedText.split(/\s+/).filter(Boolean);

    const matchedCategories = categorySuggestions
      .map((cat) => ({
        category: cat.name,
        score: calculateKeywordMatch(tokens, cat.keywords, cat.name)
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((item, idx) => ({ 
        type: 'category', 
        id: `cat-${idx}`, 
        name: item.category,
        score: item.score 
      }));

    const matchedProducts = products
      .map((product) => {
        const score = calculateKeywordMatch(tokens, product.keywords, product.name);
        return { ...product, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    const unified = [
      ...matchedCategories,
      ...matchedProducts.map((p) => ({ type: 'product', ...p }))
    ];

    setMatches(unified.slice(0, 50));
  }, []);

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

  const handleSelect = (item) => {
    if (!item) return;
    const text = item.name;
    setQuery(text);
    setShowSuggestions(false);
    setHighlightIndex(-1);
    
    const updated = [text, ...historyRef.current.filter((h) => h !== text)].slice(0, 5);
    historyRef.current = updated;
    setSearchHistory(updated);
    
    setTimeout(() => {
      window.location.href = 'https://stylishhim.vercel.app/productpage';
    }, 100);
  };

  const handleSearchClick = () => {
    if (isMobile) {
      router.push('/fullsearchbar');
    }
  };

  const clearQuery = () => {
    setQuery('');
    setMatches([]);
    setShowSuggestions(false);
    setHighlightIndex(-1);
    inputRef.current?.focus();
  };

  const toggleMic = () => {
    setListening(!listening);
    if (!listening) {
      alert('Voice search feature');
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (!showSuggestions) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightIndex((idx) => Math.min(idx + 1, matches.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightIndex((idx) => Math.max(idx - 1, 0));
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

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div
        onClick={handleSearchClick}
        className={`flex items-center rounded-full px-4 py-2 bg-white transition-shadow shadow-sm ${
          showSuggestions ? 'shadow-lg' : ''
        } ${isMobile ? 'cursor-pointer' : ''}`}
      >
        <Search className="text-gray-500 mr-2" />
        <input
          ref={inputRef}
          value={query}
          onChange={handleChange}
          onFocus={() => {
            if (!isMobile) {
              setShowSuggestions(true);
              if (query.trim()) performSearch(query);
              else setMatches([]);
            }
          }}
          readOnly={isMobile}
          placeholder={listening ? "Listening..." : "Search for products, brands, cat..."}
          className="flex-1 outline-none text-black placeholder-gray-400 bg-transparent"
        />

        {query && !isMobile ? (
          <button onClick={clearQuery} className="text-gray-400 hover:text-gray-600 transition mr-2">
            <X size={18} />
          </button>
        ) : null}

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMic();
          }}
          className={`ml-1 transition ${listening ? 'text-red-500' : 'text-gray-500 hover:text-gray-700'}`}
        >
          {listening ? <MicOff /> : <Mic />}
        </button>
      </div>

      {!isMobile && showSuggestions && (matches.length > 0 || searchHistory.length > 0) && (
        <div
          className="absolute left-0 right-0 mt-2 bg-white rounded-2xl z-20 overflow-hidden border border-gray-200"
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
                    key={c.name}
                    onClick={() => {
                      setQuery(c.name);
                      performSearch(c.name);
                      setShowSuggestions(true);
                    }}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-black hover:bg-gray-200 transition"
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div
            ref={suggestionsRef}
            className="max-h-[calc(5*64px)] overflow-y-auto"
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

 