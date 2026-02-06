import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../../components/red/StatusBar';
import BottomNavigation from '../../components/red/BottomNavigation';

const profileData = {
  username: 'sahil_xoxo',
  fullName: 'Sahil Kumar',
  bio: "Hey I'm Sahil. I love Football.\nAnd you?",
  stats: {
    mentees: 12,
    friends: 35,
    institutes: 8,
  },
  metrics: [
    { label: 'Students in Mentorship', value: '1490' },
    { label: 'School Ambassador', value: '10' },
    { label: 'College Ambassador', value: '10' },
  ],
  achievements: [
    { id: 1, color: '#87CEEB' },
    { id: 2, color: '#87CEEB' },
    { id: 3, color: '#87CEEB' },
    { id: 4, color: '#87CEEB' },
    { id: 5, color: '#87CEEB' },
  ],
  education: {
    institution: 'NED university',
    field: 'Civil Engineering',
  },
  languages: ['English', 'Urdu', 'Sindhi'],
  location: 'Karachi, Pakistan',
};

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ProfileScreen = () => {
  const navigate = useNavigate();

  return (
    <View className="app-container">
      <StatusBar />

      {/* Header */}
      <View className="flex items-center justify-between px-4 py-3">
        <Text className="text-white text-lg font-bold">{profileData.username}</Text>
        <TouchableOpacity>
          <SettingsIcon />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        className="flex-1 pb-24" 
        style={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Avatar */}
        <View className="flex items-center mt-4 mb-3">
          <View 
            className="w-28 h-28 rounded-full flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #F5E6D3 0%, #E8D5C0 100%)' }}
          >
            {/* Avatar placeholder - man with sunglasses */}
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="30" r="18" fill="#8B6F47"/>
              <ellipse cx="40" cy="65" rx="25" ry="18" fill="#2D2D2D"/>
              <circle cx="40" cy="35" r="14" fill="#D4A574"/>
              <rect x="28" y="30" width="24" height="6" rx="3" fill="#1a1a1a" opacity="0.8"/>
            </svg>
          </View>
          {/* Verified badge */}
          <View 
            className="absolute w-6 h-6 rounded-full flex items-center justify-center"
            style={{ 
              background: '#EF4444', 
              marginTop: 96, 
              marginLeft: 20,
              border: '2px solid #4E0C0C'
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </View>
        </View>

        {/* Name & Bio */}
        <View className="flex items-center px-6 mb-5">
          <Text className="text-white text-xl font-bold mb-2">{profileData.fullName}</Text>
          <Text className="text-white/70 text-sm text-center leading-5">{profileData.bio}</Text>
        </View>

        {/* Stats Card */}
        <View 
          className="mx-4 rounded-2xl flex-row items-center justify-around py-5 mb-5"
          style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <View className="flex items-center">
            <Text className="text-white text-2xl font-bold">{profileData.stats.mentees}</Text>
            <Text className="text-white/60 text-xs mt-1">Mentees</Text>
          </View>
          <View style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.15)' }} />
          <View className="flex items-center">
            <Text className="text-white text-2xl font-bold">{profileData.stats.friends}</Text>
            <Text className="text-white/60 text-xs mt-1">Friends</Text>
          </View>
          <View style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.15)' }} />
          <View className="flex items-center">
            <Text className="text-white text-2xl font-bold">{profileData.stats.institutes}</Text>
            <Text className="text-white/60 text-xs mt-1">Institutes</Text>
          </View>
        </View>

        {/* Metrics */}
        <View className="mx-4 mb-5">
          {profileData.metrics.map((metric, index) => (
            <View 
              key={index} 
              className="flex-row items-center justify-between py-4"
              style={{ borderBottom: index < profileData.metrics.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
            >
              <Text className="text-white font-semibold text-base">{metric.label}</Text>
              <View 
                className="rounded-full px-4 py-1"
                style={{ border: '2px solid #EF4444' }}
              >
                <Text className="text-red-400 font-bold text-sm">{metric.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Achievements */}
        <View 
          className="mx-4 rounded-2xl p-5 mb-5"
          style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Text className="text-white text-lg font-bold mb-4">Achievements</Text>
          <View className="flex-row gap-3">
            {profileData.achievements.map((ach) => (
              <View 
                key={ach.id}
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ border: '3px solid #87CEEB', background: 'rgba(135,206,235,0.1)' }}
              >
                <View className="w-8 h-8 rounded-sm" style={{ background: 'rgba(135,206,235,0.3)' }} />
              </View>
            ))}
          </View>
        </View>

        {/* Education */}
        <View 
          className="mx-4 rounded-2xl p-5 mb-5"
          style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Text className="text-white text-lg font-bold mb-3">Education</Text>
          <View className="flex-row items-center gap-3">
            <View 
              className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
              style={{ background: 'white' }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="20" r="10" fill="#1E40AF"/>
                <path d="M8 18C8 18 12 12 16 8C20 12 24 18 24 18" fill="#F59E0B"/>
                <circle cx="16" cy="14" r="4" fill="#87CEEB"/>
              </svg>
            </View>
            <View>
              <Text className="text-white font-semibold text-base">{profileData.education.institution}</Text>
              <Text className="text-white/60 text-sm">{profileData.education.field}</Text>
            </View>
          </View>
        </View>

        {/* Languages */}
        <View 
          className="mx-4 rounded-2xl p-5 mb-5"
          style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Text className="text-white text-lg font-bold mb-3">Languages</Text>
          <View className="flex-row gap-3">
            {profileData.languages.map((lang) => (
              <View 
                key={lang}
                className="rounded-full px-4 py-2"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <Text className="text-white text-sm">{lang}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Location */}
        <View 
          className="mx-4 rounded-2xl p-5 mb-28"
          style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Text className="text-white text-lg font-bold mb-3">Location</Text>
          <View className="flex-row items-center gap-3">
            <View 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(139,64,64,0.8)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#EF4444">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </View>
            <Text className="text-white text-base">{profileData.location}</Text>
          </View>
        </View>
      </ScrollView>

      <BottomNavigation />
    </View>
  );
};

export default ProfileScreen;
