import React, { useState } from 'react';
import StatusBar from '../../components/red/StatusBar';
import BottomNavigation from '../../components/red/BottomNavigation';
import ChatListItem, { ChatContact } from '../../components/red/ChatListItem';
import { SearchIcon } from '../../components/icons/NavIcons';

const mockContacts: ChatContact[] = [
  { id: 'ali-akbar', name: 'Ali Akbar', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: true, verifiedType: 'blue', avatarColor: '#1a1a2e' },
  { id: 'talha-nawaz', name: 'Talha Nawaz', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: true, verifiedType: 'red', avatarColor: '#1a1a2e' },
  { id: 'ayaan-hassan', name: 'Ayaan Hassan', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'blue', avatarColor: '#1a1a2e' },
  { id: 'danish-aslam', name: 'Danish Aslam', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'blue', avatarColor: '#1a1a2e' },
  { id: 'rayyan-hussain', name: 'Rayyan Hussain', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'green', avatarColor: '#1a1a2e' },
  { id: 'ibrahim-khan', name: 'Ibrahim Khan', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'red', avatarColor: '#1a1a2e' },
  { id: 'maryam-nawaz', name: 'Maryam Nawaz', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'blue', avatarColor: '#1a1a2e' },
  { id: 'umer-haider', name: 'Umer Haider', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'green', avatarColor: '#1a1a2e' },
  { id: 'rohail-niazi', name: 'Rohail Niazi', lastMessage: 'Hello world', time: '3:15 pm', isOnline: false, hasUnread: false, verifiedType: 'green', avatarColor: '#1a1a2e' },
];

const MessagesScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = mockContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <StatusBar />
      
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <h1 className="text-white text-3xl font-bold mb-4">Chats</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <SearchIcon 
            size={18} 
            color="rgba(255, 255, 255, 0.5)" 
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input pl-10"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto pb-24">
        {filteredContacts.map((contact) => (
          <ChatListItem key={contact.id} contact={contact} />
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default MessagesScreen;
