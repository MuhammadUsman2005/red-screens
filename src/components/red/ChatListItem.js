import React from 'react';
import { useNavigate } from 'react-router-dom';
import { View, Text } from '@/primitives';
import { CheckIcon } from '../icons/NavIcons';

const ChatListItem = ({ contact }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chat/${contact.id}`);
  };

  const getVerifiedBadge = () => {
    if (!contact.verifiedType) return null;
    
    const badgeColors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      red: 'bg-red-500',
    };

    return (
      <Text className={`inline-flex items-center justify-center w-4 h-4 rounded-full ml-1 ${badgeColors[contact.verifiedType]}`}>
        <CheckIcon size={10} color="white" />
      </Text>
    );
  };

  return (
    <View className="chat-list-item" onClick={handleClick}>
      {/* Avatar */}
      <View className="avatar-container">
        <View className="avatar" />
        {contact.isOnline && <View className="avatar-online" />}
      </View>

      {/* Content */}
      <View className="flex-1 min-w-0">
        <View className="flex items-center">
          <Text className="text-white font-semibold text-base truncate">
            {contact.name}
          </Text>
          {getVerifiedBadge()}
        </View>
        <Text className="block text-white/60 text-sm truncate mt-0.5">
          {contact.lastMessage}
        </Text>
      </View>

      {/* Right side */}
      <View className="flex flex-col items-end gap-1">
        <Text className="text-white/50 text-xs">
          {contact.time}
        </Text>
        {contact.hasUnread && <View className="unread-dot" />}
      </View>
    </View>
  );
};

export default ChatListItem;
