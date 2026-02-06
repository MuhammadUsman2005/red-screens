import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { View, Text, Image, TouchableOpacity } from '@/primitives';
import StatusBar from '../../components/red/StatusBar';
import BottomNavigation from '../../components/red/BottomNavigation';
import sophiaAvatar from '../../assets/sophia-avatar.png';
import ethanAvatar from '../../assets/ethan-avatar.png';
import avaAvatar from '../../assets/ava-avatar.png';
import oliverAvatar from '../../assets/oliver-avatar.png';
import sophiaStudentAvatar from '../../assets/sophia-student-avatar.png';
import liamAvatar from '../../assets/liam-avatar.png';
import ethanStudentAvatar from '../../assets/ethan-student-avatar.png';
import avaStudentAvatar from '../../assets/ava-student-avatar.png';
import oliverStudentAvatar from '../../assets/oliver-student-avatar.png';

const socialNotificationsToday = [
  { id: '1', type: 'like', user: 'Sophia', action: 'liked your post', time: '1h', avatar: sophiaAvatar },
  { id: '2', type: 'comment', user: 'Ethan', action: 'commented on your post', time: '3h', avatar: ethanAvatar },
  { id: '3', type: 'follow', user: 'Ava', action: 'followed you', time: '4h', avatar: avaAvatar },
  { id: '4', type: 'request', user: 'Oliver', action: 'accepted your request', time: '5h', avatar: oliverAvatar },
];

const achievementNotifications = [
  { id: '1', icon: 'trophy', message: 'Congratulations! Your have Achieved 2nd rank in Top Promoter  season 4.', time: '2d' },
  { id: '2', icon: 'trophy', message: 'Congratulations! You\'ve received a bonus of 5,000 pkr.', time: '3d' },
  { id: '3', icon: 'star', message: 'You have unlocked', highlight: 'Top Performer Acheivemenet', time: '5d' },
  { id: '4', icon: 'trophy', message: 'You\'ve reached second position in the', time: '' },
];

const studentNotificationsToday = [
  { id: '1', user: 'Sophia', action: 'secured ABC Scholarship', time: '1h', avatar: sophiaStudentAvatar },
  { id: '2', user: 'Liam', action: 'started AI Diploma Journey', time: '2h', avatar: liamAvatar },
  { id: '3', user: 'Ethan', action: 'secured job at AYASC pvt ltd', time: '3h', avatar: ethanStudentAvatar },
  { id: '4', user: 'Ava', action: 'completed her AI Diploma', time: '4h', avatar: avaStudentAvatar },
  { id: '5', user: 'Oliver', action: 'achieved 2nd position in AI Diploma', time: '5h', avatar: oliverStudentAvatar },
];

const NotificationsScreen = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('social');

  const renderSocialTab = () => (
    <>
      {/* Today Section */}
      <View className="mb-6">
        <Text className="block text-white font-semibold text-base mb-4">Today</Text>
        <View className="space-y-4">
          {socialNotificationsToday.map((notification) => (
            <View key={notification.id} className="flex items-center gap-3">
              <View className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
                {notification.avatar && (
                  <Image src={notification.avatar} alt={notification.user} className="w-full h-full object-cover" />
                )}
              </View>
              <View className="flex-1">
                <Text className="block text-white text-sm">
                  <Text className="font-semibold">{notification.user}</Text> {notification.action}
                </Text>
                <Text className="block text-white/50 text-xs">{notification.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* This Week Section */}
      <View>
        <Text className="block text-white font-semibold text-base mb-4">This Week</Text>
        <View className="space-y-4">
          {achievementNotifications.map((notification) => (
            <View key={notification.id} className="flex items-start gap-3">
              <View className="w-12 h-12 rounded-full bg-[#EF4444] flex items-center justify-center flex-shrink-0">
                {notification.icon === 'trophy' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M6 9H4.5C3.67 9 3 8.33 3 7.5V6C3 5.17 3.67 4.5 4.5 4.5H6" strokeLinecap="round"/>
                    <path d="M18 9H19.5C20.33 9 21 8.33 21 7.5V6C21 5.17 20.33 4.5 19.5 4.5H18" strokeLinecap="round"/>
                    <path d="M6 4.5H18V11C18 14.31 15.31 17 12 17C8.69 17 6 14.31 6 11V4.5Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17V20" strokeLinecap="round"/>
                    <path d="M8 20H16" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinejoin="round"/>
                  </svg>
                )}
              </View>
              <View className="flex-1">
                <Text className="block text-white text-sm">
                  {notification.highlight ? (
                    <>
                      {notification.message} <Text className="text-red-400">{notification.highlight}</Text>
                    </>
                  ) : (
                    notification.message
                  )}
                </Text>
                {notification.time && <Text className="block text-white/50 text-xs">{notification.time}</Text>}
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  );

  const renderStudentTab = () => (
    <>
      {/* Today Section */}
      <View className="mb-6">
        <Text className="block text-white font-semibold text-base mb-4">Today</Text>
        <View className="space-y-4">
          {studentNotificationsToday.map((notification) => (
            <View key={notification.id} className="flex items-center gap-3">
              <View className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
                {notification.avatar && (
                  <Image src={notification.avatar} alt={notification.user} className="w-full h-full object-cover" />
                )}
              </View>
              <View className="flex-1">
                <Text className="block text-white text-sm">
                  {notification.id === '1' ? (
                    <>Hurray! <Text className="font-semibold">{notification.user}</Text> {notification.action}</>
                  ) : (
                    <><Text className="font-semibold">{notification.user}</Text> {notification.action}</>
                  )}
                </Text>
                <Text className="block text-white/50 text-xs">{notification.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* This Week Section */}
      <View>
        <Text className="block text-white font-semibold text-base mb-4">This Week</Text>
      </View>
    </>
  );

  return (
    <View className="app-container">
      <StatusBar />
      
      {/* Header */}
      <View className="flex items-center justify-center py-3">
        <Text className="text-white text-xl font-semibold">Notifications</Text>
      </View>

      {/* Tabs */}
      <View className="flex items-center gap-3 px-4 mb-6">
        <TouchableOpacity
          onClick={() => setActiveTab('social')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === 'social'
              ? 'bg-[#EF4444] text-white'
              : 'bg-transparent border border-white/40 text-white/80'
          }`}
        >
          Social
        </TouchableOpacity>
        <TouchableOpacity
          onClick={() => setActiveTab('student')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === 'student'
              ? 'bg-[#EF4444] text-white'
              : 'bg-transparent border border-white/40 text-white/80'
          }`}
        >
          Student
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="flex-1 overflow-y-auto pb-24 px-4">
        {activeTab === 'social' ? renderSocialTab() : renderStudentTab()}
      </View>

      <BottomNavigation />
    </View>
  );
};

export default NotificationsScreen;
