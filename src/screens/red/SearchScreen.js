import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from '../../components/primitives.js';
import StatusBar from '../../components/red/StatusBar.js';
import BottomNavigation from '../../components/red/BottomNavigation.js';
import { BackArrowIcon } from '../../components/icons/NavIcons.js';
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
    if (!searchQuery.trim()) return suggestions;
    const query = searchQuery.toLowerCase();
    return suggestions.filter(
      (s) => s.name.toLowerCase().includes(query) || s.username.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const clearSearch = () => setSearchQuery('');

  return (
    <View className="app-container">
      <StatusBar />
      
      <View className="flex items-center px-4 py-3">
        <TouchableOpacity onPress={() => navigate('/home')} className="text-white mr-4">
          <BackArrowIcon size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-semibold flex-1 text-center pr-10">Search</Text>
      </View>

      <View className="px-4 mb-6">
        <View className="relative">
          <View className="absolute left-4 top-1/2 -translate-y-1/2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
              <circle cx="11" cy="11" r="7"/>
              <path d="M16 16L20 20" strokeLinecap="round"/>
            </svg>
          </View>
          <TextInput
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="w-full bg-[#5A1A1A] rounded-full py-3 pl-12 pr-12 text-white placeholder-white/60 text-sm outline-none border border-white/20"
          />
          <TouchableOpacity 
            onPress={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <View className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
                <path d="M2 2L8 8M8 2L2 8" strokeLinecap="round"/>
              </svg>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 pb-24 px-4">
        <Text className="text-white font-semibold text-lg mb-4 block">Suggestions</Text>
        
        <View className="space-y-4">
          {filteredSuggestions.map((suggestion) => (
            <View key={suggestion.id} className="flex items-center gap-3">
              <View className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
                <Image source={suggestion.avatar} alt={suggestion.name} className="w-full h-full object-cover" />
              </View>
              <View>
                <Text className="text-white font-semibold text-base block">{suggestion.name}</Text>
                <Text className="text-white/60 text-sm block">{suggestion.username}</Text>
              </View>
            </View>
          ))}
          {filteredSuggestions.length === 0 && (
            <Text className="text-white/60 text-sm">No results found</Text>
          )}
        </View>
      </ScrollView>

      <BottomNavigation />
    </View>
  );
};

export default SearchScreen;
