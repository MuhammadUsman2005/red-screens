import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../../components/red/StatusBar';
import BottomNavigation from '../../components/red/BottomNavigation';
import { BackArrowIcon } from '../../components/icons/NavIcons';
import alexAvatar from '../../assets/alex-avatar.png';
import sophiaClarkAvatar from '../../assets/sophia-clark-avatar.png';
import liamEvansAvatar from '../../assets/liam-evans-avatar.png';
import oliviaAvatar from '../../assets/olivia-avatar.png';
import noahAvatar from '../../assets/noah-avatar.png';

const suggestions = [
  { id: '1', name: 'Alex Anderson', username: '@alex.anderson', avatar: alexAvatar },
  { id: '2', name: 'Sophia Clark', username: '@sophia.clark', avatar: sophiaClarkAvatar },
  { id: '3', name: 'Liam Evans', username: '@liam.evans', avatar: liamEvansAvatar },
  { id: '4', name: 'Olivia Foster', username: '@olivia.foster', avatar: oliviaAvatar },
  { id: '5', name: 'Noah Garcia', username: '@noah.garcia', avatar: noahAvatar },
];

const SearchScreen = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSuggestions = useMemo(() => {
    if (!searchQuery.trim()) {
      return suggestions;
    }
    const query = searchQuery.toLowerCase();
    return suggestions.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.username.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="app-container">
      <StatusBar />
      
      {/* Header */}
      <div className="flex items-center px-4 py-3">
        <button onClick={() => navigate('/home')} className="text-white mr-4">
          <BackArrowIcon size={24} color="white" />
        </button>
        <h1 className="text-white text-xl font-semibold flex-1 text-center pr-10">Search</h1>
      </div>

      {/* Search Input */}
      <div className="px-4 mb-6">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
              <circle cx="11" cy="11" r="7"/>
              <path d="M16 16L20 20" strokeLinecap="round"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#5A1A1A] rounded-full py-3 pl-12 pr-12 text-white placeholder-white/60 text-sm outline-none border border-white/20"
          />
          <button 
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
                <path d="M2 2L8 8M8 2L2 8" strokeLinecap="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Suggestions */}
      <div className="flex-1 overflow-y-auto pb-24 px-4">
        <h2 className="text-white font-semibold text-lg mb-4">Suggestions</h2>
        
        <div className="space-y-4">
          {filteredSuggestions.map((suggestion) => (
            <div key={suggestion.id} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
                {suggestion.avatar && (
                  <img src={suggestion.avatar} alt={suggestion.name} className="w-full h-full object-cover" />
                )}
              </div>
              <div>
                <p className="text-white font-semibold text-base">{suggestion.name}</p>
                <p className="text-white/60 text-sm">{suggestion.username}</p>
              </div>
            </div>
          ))}
          {filteredSuggestions.length === 0 && (
            <p className="text-white/60 text-sm">No results found</p>
          )}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default SearchScreen;
