import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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

const mockMessages = [
  { id: '1', text: 'Hello world', isSent: false, time: '3:15 pm' },
  { id: '2', text: 'Hello world', isSent: true, time: '3:15 pm' },
];

const ChatScreen = () => {
  const navigate = useNavigate();
  const { chatId } = useParams();
  const [messageText, setMessageText] = useState('');

  const getContactName = () => {
    const nameMap = {
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
      setMessageText('');
    }
  };

  return (
    <View className="app-container flex flex-col">
      <StatusBar />
      
      {/* Chat Header */}
      <View className="chat-header">
        <TouchableOpacity 
          onPress={handleBack}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-card border border-border"
        >
          <BackArrowIcon size={20} color="currentColor" />
        </TouchableOpacity>

        <View className="avatar-container">
          <View className="avatar" />
        </View>

        <View className="flex-1">
          <View className="flex items-center">
            <Text className="text-primary-foreground font-semibold text-base">
              {getContactName()}
            </Text>
            <View className="inline-flex items-center justify-center w-4 h-4 rounded-full ml-1 bg-status-verified">
              <CheckIcon size={10} color="currentColor" />
            </View>
          </View>
          <Text className="text-status-online text-sm">Online</Text>
        </View>

        <TouchableOpacity className="w-10 h-10 flex items-center justify-center text-primary-foreground">
          <MoreIcon size={24} color="currentColor" />
        </TouchableOpacity>
      </View>

      {/* Messages Area */}
      <View className="flex-1 overflow-y-auto px-4 py-4">
        {/* Date Separator */}
        <View className="flex justify-center mb-4">
          <Text className="text-white/60 text-sm">Today</Text>
        </View>

        {/* Messages */}
        <View className="flex flex-col gap-4">
          {mockMessages.map((message) => (
            <View
              key={message.id}
              className={`flex ${message.isSent ? 'justify-end' : 'justify-start'}`}
            >
              <View
                className={`message-bubble ${
                  message.isSent ? 'message-sent' : 'message-received'
                }`}
              >
                <Text className="text-white text-sm">{message.text}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Message Input */}
      <View className="chat-input-container">
        <TouchableOpacity className="w-8 h-8 flex items-center justify-center text-white/60">
          <CameraIcon size={22} color="currentColor" />
        </TouchableOpacity>

        <View className="flex-1">
          <TextInput
            placeholder="Type a message..."
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
            onSubmitEditing={handleSend}
            placeholderTextColor="rgba(255,255,255,0.5)"
            className="chat-input w-full"
          />
        </View>

        <TouchableOpacity className="w-8 h-8 flex items-center justify-center text-muted-foreground">
          <AttachmentIcon size={22} color="currentColor" />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={handleSend}
          className="w-8 h-8 flex items-center justify-center text-muted-foreground"
        >
          <SendIcon size={22} color="currentColor" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
