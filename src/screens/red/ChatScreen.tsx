import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StatusBar from '../../components/red/StatusBar';
import { 
  BackArrowIcon, 
  MoreIcon, 
  CameraIcon, 
  AttachmentIcon, 
  SendIcon,
  CheckIcon 
} from '../../components/icons/NavIcons';

interface Message {
  id: string;
  text: string;
  isSent: boolean;
  time: string;
}

const mockMessages: Message[] = [
  { id: '1', text: 'Hello world', isSent: false, time: '3:15 pm' },
  { id: '2', text: 'Hello world', isSent: true, time: '3:15 pm' },
];

const ChatScreen: React.FC = () => {
  const navigate = useNavigate();
  const { chatId } = useParams<{ chatId: string }>();
  const [messageText, setMessageText] = useState('');

  // Get contact name from chatId
  const getContactName = () => {
    const nameMap: Record<string, string> = {
      'ali-akbar': 'Ali Akbar',
      'talha-nawaz': 'Talha Nawaz',
      'ayaan-hassan': 'Ayaan Hassan',
      'danish-aslam': 'Danish Aslam',
      'rayyan-hussain': 'Rayyan Hussain',
      'ibrahim-khan': 'Ibrahim Khan',
      'maryam-nawaz': 'Maryam Nawaz',
      'umer-haider': 'Umer Haider',
      'rohail-niazi': 'Rohail Niazi',
    };
    return nameMap[chatId || ''] || 'Unknown';
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleSend = () => {
    if (messageText.trim()) {
      // In a real app, this would send the message
      setMessageText('');
    }
  };

  return (
    <div className="app-container flex flex-col">
      <StatusBar />
      
      {/* Chat Header */}
      <div className="chat-header">
        <button 
          onClick={handleBack}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-card border border-border"
        >
          <BackArrowIcon size={20} color="currentColor" />
        </button>

        <div className="avatar-container">
          <div className="avatar" style={{ backgroundColor: '#1a1a2e' }} />
        </div>

        <div className="flex-1">
          <div className="flex items-center">
            <span className="text-primary-foreground font-semibold text-base">
              {getContactName()}
            </span>
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full ml-1 bg-status-verified">
              <CheckIcon size={10} color="currentColor" />
            </span>
          </div>
          <p className="text-status-online text-sm">Online</p>
        </div>

        <button className="w-10 h-10 flex items-center justify-center text-primary-foreground">
          <MoreIcon size={24} color="currentColor" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Date Separator */}
        <div className="flex justify-center mb-4">
          <span className="text-white/60 text-sm">Today</span>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-4">
          {mockMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isSent ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`message-bubble ${
                  message.isSent ? 'message-sent' : 'message-received'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="chat-input-container">
        <button className="w-8 h-8 flex items-center justify-center text-white/60">
          <CameraIcon size={22} color="currentColor" />
        </button>

        <div className="flex-1">
          <input
            type="text"
            placeholder="Type a message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="chat-input w-full"
          />
        </div>

        <button className="w-8 h-8 flex items-center justify-center text-muted-foreground">
          <AttachmentIcon size={22} color="currentColor" />
        </button>

        <button 
          onClick={handleSend}
          className="w-8 h-8 flex items-center justify-center text-muted-foreground"
        >
          <SendIcon size={22} color="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
