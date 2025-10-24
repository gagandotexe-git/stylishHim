'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Mic, MicOff, X, Search } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SearchBar = () => {
  // core state
  const [query, setQuery] = useState('');
  const [matches, setMatches] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [listeningBorderHidden, setListeningBorderHidden] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const speechTimeoutRef = useRef(null);

  // Speech recognition setup
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // Categories with keywords for better matching
  const categorySuggestions = [
    { name: 'Razors for Men', keywords: ['razor', 'shave', 'blade', 'men', 'grooming'] },
    { name: 'Best Sellers', keywords: ['best', 'seller', 'popular', 'top', 'trending'] },
    { name: 'Gifts for Men', keywords: ['gift', 'present', 'men', 'him'] },
    { name: 'Trimmers', keywords: ['trimmer', 'trim', 'beard', 'hair', 'clipper'] },
    { name: 'Shave', keywords: ['shave', 'shaving', 'razor', 'foam', 'gel'] },
    { name: 'Fragrances', keywords: ['perfume', 'fragrance', 'scent', 'cologne', 'smell'] },
    { name: 'Skin', keywords: ['skin', 'skincare', 'face', 'moisturizer', 'cream'] },
    { name: 'Corporate Gifting', keywords: ['corporate', 'gift', 'business', 'office'] },
    { name: 'Blog', keywords: ['blog', 'article', 'read', 'tips'] },
    { name: 'Women', keywords: ['women', 'woman', 'her', 'female', 'lady'] },
    { name: 'Haircare', keywords: ['hair', 'haircare', 'shampoo', 'conditioner', 'treatment'] },
    { name: 'Makeup', keywords: ['makeup', 'cosmetic', 'lipstick', 'foundation', 'eyeshadow'] },
    { name: 'Skincare', keywords: ['skincare', 'skin', 'face', 'serum', 'moisturizer'] },
    { name: 'New Arrivals', keywords: ['new', 'arrival', 'latest', 'fresh', 'recent'] },
    { name: 'Top Rated', keywords: ['top', 'rated', 'best', 'review', 'recommended'] },
    { name: 'Budget Buys', keywords: ['budget', 'cheap', 'affordable', 'value', 'deal'] },
    { name: 'Personal Care', keywords: ['personal', 'care', 'hygiene', 'daily'] },
    { name: 'Bath & Body', keywords: ['bath', 'body', 'shower', 'soap', 'wash'] },
    { name: 'Oral Care', keywords: ['oral', 'dental', 'teeth', 'toothpaste', 'mouth'] },
    { name: 'Wellness', keywords: ['wellness', 'health', 'vitamin', 'supplement'] }
  ];

  // Products with keywords
  const products = [
    { 
      id: 1, 
      name: 'Nykaa Lipstick', 
      category: 'Makeup', 
      image: '/images/productseven.jpeg',
      keywords: ['lipstick', 'lip', 'nykaa', 'makeup', 'cosmetic', 'color']
    },
    { 
      id: 2, 
      name: 'Lakme Eyeliner', 
      category: 'Makeup', 
      image: '/images/productseven.jpeg',
      keywords: ['eyeliner', 'eye', 'lakme', 'makeup', 'liner', 'kajal']
    },
    { 
      id: 3, 
      name: "L'Oreal Shampoo", 
      category: 'Haircare', 
      image: '/images/productseven.jpeg',
      keywords: ['shampoo', 'hair', 'loreal', 'wash', 'haircare', 'clean']
    },
    { 
      id: 4, 
      name: 'Maybelline Mascara', 
      category: 'Makeup', 
      image: '/images/productseven.jpeg',
      keywords: ['mascara', 'eye', 'maybelline', 'makeup', 'lash', 'eyelash']
    },
  ];

  // Load history from memory (not localStorage)
  const historyRef = useRef([]);
  useEffect(() => {
    setSearchHistory(historyRef.current.slice(0, 5));
  }, []);

  // Handle speech recognition transcript
  useEffect(() => {
    if (transcript) {
      setQuery(transcript);
      setShowSuggestions(true);
      performSearch(transcript);

      // Auto-search after 1.5 seconds of continuous speech
      if (speechTimeoutRef.current) {
        clearTimeout(speechTimeoutRef.current);
      }
      
      speechTimeoutRef.current = setTimeout(() => {
        if (transcript.trim()) {
          handleSelect({ type: 'text', name: transcript });
        }
      }, 1500);
    }
  }, [transcript]);

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

  // Enhanced keyword matching function
  const calculateKeywordMatch = (searchTokens, keywords, text) => {
    let score = 0;
    const textLower = text.toLowerCase();
    
    searchTokens.forEach(token => {
      // Direct match in text
      if (textLower.includes(token)) {
        score += 1.0;
      }
      
      // Keyword match
      keywords.forEach(keyword => {
        if (keyword.includes(token) || token.includes(keyword)) {
          score += 0.8;
        }
        // Partial keyword match
        if (keyword.length > 3 && token.length > 3) {
          const minLen = Math.min(keyword.length, token.length);
          let matching = 0;
          for (let i = 0; i < minLen; i++) {
            if (keyword[i] === token[i]) matching++;
          }
          if (matching / minLen > 0.6) {
            score += 0.5;
          }
        }
      });
    });
    
    return score;
  };

  // Enhanced search with keyword matching
  const performSearch = useCallback((text) => {
    const trimmedText = text.trim().toLowerCase();
    
    if (trimmedText.length === 0) {
      setMatches([]);
      return;
    }

    const tokens = trimmedText.split(/\s+/).filter(Boolean);

    // Search categories with keyword matching
    const matchedCategories = categorySuggestions
      .map((cat) => {
        const score = calculateKeywordMatch(tokens, cat.keywords, cat.name);
        return { category: cat.name, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((item, idx) => ({ 
        type: 'category', 
        id: `cat-${idx}`, 
        name: item.category,
        score: item.score 
      }));

    // Search products with keyword matching
    const matchedProducts = products
      .map((product) => {
        const nameScore = calculateKeywordMatch(tokens, product.keywords, product.name);
        const categoryScore = calculateKeywordMatch(tokens, [], product.category) * 0.5;
        const score = nameScore + categoryScore;
        
        return { ...product, score };
      })
      .filter((item) => item.score > 0)
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
    
    // Update history in memory
    const updated = [text, ...historyRef.current.filter((h) => h !== text)].slice(0, 5);
    historyRef.current = updated;
    setSearchHistory(updated);
    
    // Stop listening if active
    if (listening) {
      SpeechRecognition.stopListening();
      resetTranscript();
    }
    
    // Navigate to products page
    setTimeout(() => {
      window.location.href = '/products/0';
    }, 100);
  };

  // Voice toggle with speech recognition
  const toggleMic = () => {
    if (!browserSupportsSpeechRecognition) {
      alert('Your browser does not support speech recognition. Please use Chrome, Edge, or Safari.');
      return;
    }

    if (listening) {
      SpeechRecognition.stopListening();
      if (speechTimeoutRef.current) {
        clearTimeout(speechTimeoutRef.current);
      }
    } else {
      resetTranscript();
      setQuery('');
      setMatches([]);
      SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    }
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
    resetTranscript();
    if (listening) {
      SpeechRecognition.stopListening();
    }
    inputRef.current?.focus();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (speechTimeoutRef.current) {
        clearTimeout(speechTimeoutRef.current);
      }
      if (listening) {
        SpeechRecognition.stopListening();
      }
    };
  }, [listening]);

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto" style={{ fontFamily: "'Marcellus', 'Work Sans', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Work+Sans:wght@400;500;600&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .listening-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
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
          placeholder={listening ? "Listening..." : "Search for products, brands, categ..."}
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
          className={`ml-1 transition ${listening ? 'text-red-500 listening-pulse' : 'text-gray-500 hover:text-gray-700'}`}
          aria-label="Voice search"
          title={listening ? "Stop listening" : "Start voice search"}
        >
          {listening ? <MicOff /> : <Mic />}
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