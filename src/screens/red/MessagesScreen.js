import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from '../../components/primitives.js';
import StatusBar from '../../components/red/StatusBar.js';
import BottomNavigation from '../../components/red/BottomNavigation.js';
import ChatListItem from '../../components/red/ChatListItem.js';
import { SearchIcon } from '../../components/icons/NavIcons.js';

const mockContacts = [
  { id: 'ali-akbar', name: 'Ali Akbar', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: true, verifiedType: 'blue' },
  { id: 'talha-nawaz', name: 'Talha Nawaz', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: true, verifiedType: 'red' },
  { id: 'ayaan-hassan', name: 'Ayaan Hassan', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'blue' },
  { id: 'danish-aslam', name: 'Danish Aslam', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'blue' },
  { id: 'rayyan-hussain', name: 'Rayyan Hussain', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'green' },
  { id: 'ibrahim-khan', name: 'Ibrahim Khan', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'red' },
  { id: 'maryam-nawaz', name: 'Maryam Nawaz', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'blue' },
  { id: 'umer-haider', name: 'Umer Haider', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'green' },
  { id: 'rohail-niazi', name: 'Rohail Niazi', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'green' },
];

const MessagesScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = mockContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="app-container">
      <StatusBar />
      
      <View className="px-4 pt-4 pb-3">
        <Text className="text-white text-3xl font-bold mb-4 block">Chats</Text>
        
        <View className="relative">
          <SearchIcon 
            size={18} 
            color="rgba(255, 255, 255, 0.5)" 
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <TextInput
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="search-input pl-10"
          />
        </View>
      </View>

      <ScrollView className="flex-1 pb-24">
        {filteredContacts.map((contact) => (
          <ChatListItem key={contact.id} contact={contact} />
        ))}
      </ScrollView>

      <BottomNavigation />
    </View>
  );
};

export default MessagesScreen;
