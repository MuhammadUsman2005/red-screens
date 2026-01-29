import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '../icons/NavIcons';

export interface ChatContact {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  isOnline: boolean;
  hasUnread: boolean;
  verifiedType: 'blue' | 'green' | 'red' | null;
  avatarColor?: string;
}

interface ChatListItemProps {
  contact: ChatContact;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ contact }) => {
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
      <span className={`inline-flex items-center justify-center w-4 h-4 rounded-full ml-1 ${badgeColors[contact.verifiedType]}`}>
        <CheckIcon size={10} color="white" />
      </span>
    );
  };

  return (
    <div className="chat-list-item" onClick={handleClick}>
      {/* Avatar */}
      <div className="avatar-container">
        <div 
          className="avatar"
          style={{ backgroundColor: contact.avatarColor || '#1a1a2e' }}
        />
        {contact.isOnline && <div className="avatar-online" />}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <span className="text-white font-semibold text-base truncate">
            {contact.name}
          </span>
          {getVerifiedBadge()}
        </div>
        <p className="text-white/60 text-sm truncate mt-0.5">
          {contact.lastMessage}
        </p>
      </div>

      {/* Right side */}
      <div className="flex flex-col items-end gap-1">
        <span className="text-white/50 text-xs">
          {contact.time}
        </span>
        {contact.hasUnread && <div className="unread-dot" />}
      </div>
    </div>
  );
};

export default ChatListItem;
