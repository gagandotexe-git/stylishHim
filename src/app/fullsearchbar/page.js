"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Mic, MicOff, X, Search, ArrowLeft, Trash2 } from "lucide-react";
import BeautyProductsGrid from "../homepage/page";
import CategorySlider from "@/components/CategorySlider";

// Debounce utility to delay API calls
const useDebounce = (callback, delay) => {
  const timer = useRef(null);
  const debounced = useCallback(
    (...args) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );
  return debounced;
};

const FullScreenSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [listening, setListening] = useState(false);
  const [showDefaultContent, setShowDefaultContent] = useState(true); // 👈 new state

  const inputRef = useRef(null);
  const historyRef = useRef(["lipstick", "trimmer"]);

  // Auto-focus input when page loads
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 200);
    return () => clearTimeout(timer);
  }, []);

  // Load recent searches on mount
  useEffect(() => {
    setSearchHistory(historyRef.current);
  }, []);

  // Debounced search function
  const fetchResults = useCallback(async (searchText) => {
    if (!searchText.trim()) {
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/api/search?query=${encodeURIComponent(searchText)}`);
      const data = await res.json();

      if (data?.success && data?.results?.length > 0) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    } catch (err) {
      console.error("Search API error:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedSearch = useDebounce(fetchResults, 500);

  // 👇 handle typing
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // if user starts typing first character, hide default components
    if (value.length > 0) {
      setShowDefaultContent(false);
      debouncedSearch(value);
    } else {
      // when input cleared manually
      setShowDefaultContent(true);
      setResults([]);
    }
  };

  const handleSelect = (item) => {
    const updated = [item.name, ...historyRef.current.filter((h) => h !== item.name)].slice(0, 5);
    historyRef.current = updated;
    setSearchHistory(updated);

    // Navigate to product page
    window.location.href = `/product/${item.slug}`;
  };

  // 👇 clear input and restore defaults
  const clearQuery = () => {
    setQuery("");
    setResults([]);
    setShowDefaultContent(true); // show the grid + slider again
    inputRef.current?.blur(); // remove focus
  };

  const clearHistory = () => {
    historyRef.current = [];
    setSearchHistory([]);
  };

  const toggleMic = () => {
    setListening(!listening);
    if (!listening) {
      alert("Voice search would start here (requires setup)");
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-gray-800"
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-base text-gray-500 flex-1">Search Products</h1>
        </div>

        {/* Search Input */}
        <div className="flex items-center rounded-lg px-4 py-2 bg-white border-2 border-pink-500">
          <Search className="text-gray-500 mr-3" size={20} />
          <input
            ref={inputRef}
            value={query}
            onChange={handleChange}
            placeholder="Search for brands, products, or categories"
            className="flex-1 outline-none text-gray-800 placeholder-gray-400 bg-transparent"
          />
          {query && (
            <button
              onClick={clearQuery}
              className="text-gray-400 hover:text-gray-600 mr-2"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={toggleMic}
            className={`transition ${listening ? "text-pink-500" : "text-gray-500"}`}
          >
            {listening ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
        </div>
      </div>

      {/* 👇 Show these only when no typing */}
      {showDefaultContent && (
        <>
          <CategorySlider />
          <BeautyProductsGrid />
        </>
      )}

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        {query.trim() === "" ? (
          // Default content: Recent searches
          <div className="px-4 py-4">
            {searchHistory.length > 0 && (
              <>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-bold text-gray-800">Recent Searches</h2>
                  <button onClick={clearHistory} className="text-gray-400 hover:text-gray-600">
                    <Trash2 size={18} />
                  </button>
                </div>
                {searchHistory.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setQuery(item);
                      fetchResults(item);
                      setShowDefaultContent(false);
                    }}
                    className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 transition"
                  >
                    <Search size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-800">{item}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        ) : (
          // Search Results
          <div className="px-2 py-3">
            {loading ? (
              <div className="text-center py-8 text-gray-500">Searching...</div>
            ) : results.length > 0 ? (
              results.map((item) => (
                <div
                  key={item._id}
                  onClick={() => handleSelect(item)}
                  className="flex items-center gap-3 p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition"
                >
                  {/* Product Image */}
                  <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.category}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FullScreenSearch;
