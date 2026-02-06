import React from 'react';
import { useNavigate } from 'react-router-dom';
import { View, Text, Image, TouchableOpacity, ScrollView } from '../../components/primitives';
import StatusBar from '../../components/red/StatusBar';
import BottomNavigation from '../../components/red/BottomNavigation';
import itveLogo from '@/assets/itve-logo.png';
import annaAvatar from '@/assets/anna-avatar.png';
import annaPost from '@/assets/anna-post.png';
import ecowearAvatar from '@/assets/ecowear-avatar.png';
import ecowearPost from '@/assets/ecowear-post.png';
import daveAvatar from '@/assets/dave-avatar.png';
import davePost from '@/assets/dave-post.png';
import notificationIcon from '@/assets/notification-icon.png';

const postsData = [
  {
    id: '1',
    username: 'wanderlust_anna',
    timeAgo: '2h ago',
    isVerified: true,
    verifiedColor: 'green',
    likes: 1204,
    caption: 'Woke up to this incredible view. Feeling so grateful for moments like these. ✨',
    comments: 88,
  },
  {
    id: '2',
    username: 'EcoWear',
    timeAgo: '',
    isVerified: true,
    verifiedColor: 'red',
    likes: 4512,
    caption: 'Embrace adventure with our new line of sustainable outdoor gear. Built for nature, by nature.',
    comments: 0,
    isSponsored: true,
    learnMore: true,
  },
  {
    id: '3',
    username: 'foodie_dave',
    timeAgo: '8h ago',
    isVerified: true,
    verifiedColor: 'green',
    likes: 634,
    caption: 'Homemade pasta night was a success! 🍝 Who wants the recipe?',
    comments: 42,
  },
];

const getAvatar = (username) => {
  if (username === 'wanderlust_anna') return annaAvatar;
  if (username === 'EcoWear') return ecowearAvatar;
  if (username === 'foodie_dave') return daveAvatar;
  return null;
};

const getPostImage = (username) => {
  if (username === 'wanderlust_anna') return annaPost;
  if (username === 'EcoWear') return ecowearPost;
  if (username === 'foodie_dave') return davePost;
  return null;
};

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <View className="app-container">
      <StatusBar />

      {/* Header */}
      <View className="flex items-center justify-between px-4 py-3">
        <View className="flex items-center gap-2">
          <Image
            source={itveLogo}
            alt="ITVE Logo"
            className="w-10 h-10 object-contain"
          />
          <Text className="text-white text-2xl font-extrabold tracking-wide">ITVE</Text>
        </View>
        <View className="flex items-center gap-4">
          <TouchableOpacity className="text-white" onPress={() => navigate('/search')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('/notifications')}>
            <Image source={notificationIcon} alt="Notifications" className="w-6 h-6" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Posts Feed */}
      <ScrollView className="flex-1 overflow-y-auto pb-24">
        {postsData.map((post) => (
          <View key={post.id} className="mb-0">
            {/* Post Header */}
            <View className="flex items-center justify-between px-4 py-3">
              <View className="flex items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center">
                  {getAvatar(post.username) && (
                    <Image source={getAvatar(post.username)} alt={post.username} className="w-full h-full object-cover" />
                  )}
                </View>
                <View>
                  <View className="flex items-center gap-1">
                    <Text className="text-white font-semibold text-sm">{post.username}</Text>
                    {post.isVerified && (
                      <View
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: post.verifiedColor === 'green' ? '#22C55E' : '#EF4444' }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                          <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      </View>
                    )}
                  </View>
                  <Text className="text-white/60 text-xs">
                    {post.isSponsored ? 'Sponsored' : post.timeAgo}
                  </Text>
                </View>
              </View>
              <TouchableOpacity className="text-white/80">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <circle cx="4" cy="10" r="1.5"/>
                  <circle cx="10" cy="10" r="1.5"/>
                  <circle cx="16" cy="10" r="1.5"/>
                </svg>
              </TouchableOpacity>
            </View>

            {/* Post Image */}
            <View className="w-full aspect-square bg-black/20">
              {getPostImage(post.username) && (
                <Image source={getPostImage(post.username)} alt="Post" className="w-full h-full object-cover" />
              )}
            </View>

            {/* Post Actions */}
            <View className="flex items-center justify-between px-4 py-3">
              <View className="flex items-center gap-4">
                <TouchableOpacity className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </TouchableOpacity>
                <TouchableOpacity className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </TouchableOpacity>
                <TouchableOpacity className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"/>
                  </svg>
                </TouchableOpacity>
              </View>
              <TouchableOpacity className="text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
              </TouchableOpacity>
            </View>

            {/* Likes & Caption */}
            <View className="px-4 pb-4">
              <Text className="text-white font-semibold text-sm mb-1 block">
                {post.likes.toLocaleString()} likes
              </Text>
              <Text className="text-white text-sm block">
                <Text className="font-semibold">{post.username}</Text>{' '}
                {post.caption}
              </Text>
              {post.learnMore && (
                <Text className="text-red-400 text-sm font-medium mt-1 block">Learn More</Text>
              )}
              {post.comments > 0 && (
                <Text className="text-white/60 text-sm mt-1 block">
                  View all {post.comments} comments
                </Text>
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      <BottomNavigation />
    </View>
  );
};

export default HomeScreen;
