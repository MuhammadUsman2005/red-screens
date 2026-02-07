import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { View, Text, TouchableOpacity, Image } from '../primitives.js';
import { 
  HomeIcon, 
  MessagesIcon, 
  PromoIcon, 
  MenteesIcon
} from '../icons/NavIcons.js';
import profileIcon from '@/assets/profile-icon.png';

const ProfileIconComponent = ({ size = 24, color }) => (
  <Image 
    source={profileIcon} 
    alt="Profile" 
    width={size} 
    height={size}
    style={{ 
      filter: color === '#EF4444' ? 'none' : 'brightness(0) invert(1) opacity(0.6)'
    }}
  />
);

const navItems = [
  { id: 'home', label: 'Home', icon: HomeIcon, path: '/home' },
  { id: 'messages', label: 'Messages', icon: MessagesIcon, path: '/' },
  { id: 'promo', label: 'Promo', icon: PromoIcon, path: '/institutes' },
  { id: 'mentees', label: 'Mentees', icon: MenteesIcon, path: '/mentees' },
  { id: 'profile', label: 'Profile', icon: ProfileIconComponent, path: null },
];

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname.startsWith('/chat');
    }
    return location.pathname.startsWith(path);
  };

  return (
    <View className="bottom-nav">
      {navItems.map((item) => {
        const active = isActive(item.path);
        const IconComponent = item.icon;
        
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => item.path && navigate(item.path)}
            className={`nav-item ${active ? 'nav-item-active' : ''}`}
          >
            <View className="nav-icon-wrapper flex items-center justify-center">
              <IconComponent 
                size={22} 
                color="rgba(255, 255, 255, 0.6)"
              />
            </View>
            <Text className="nav-item-text">{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;
