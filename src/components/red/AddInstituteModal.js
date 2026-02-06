import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import karachiMap from '@/assets/karachi-map.png';

const AddInstituteModal = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const instituteTypes = ['School', 'College', 'General Public', 'Donation'];

  if (!isOpen) return null;

  return (
    <View className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <TouchableOpacity 
        className="absolute inset-0 bg-black/60"
        onPress={onClose}
        activeOpacity={1}
      />
      
      {/* Modal Content */}
      <View 
        className="relative w-full max-w-md rounded-t-3xl px-6 py-8"
        style={{
          background: 'linear-gradient(180deg, #852121 35.31%, #4E0C0C 67%, #380303 100%)'
        }}
      >
        {/* Header */}
        <View className="flex items-center mb-8">
          <TouchableOpacity 
            onPress={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Generate Promo Code</Text>
        </View>

        {/* Type of Institute Dropdown */}
        <View className="mb-4">
          <TouchableOpacity 
            onPress={() => setShowDropdown(!showDropdown)}
            className="w-full py-4 px-4 rounded-xl flex items-center justify-between"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <Text className="text-white/80 text-base">
              {selectedType || 'Type of Institute'}
            </Text>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`}
            >
              <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </TouchableOpacity>
          
          {showDropdown && (
            <View 
              className="mt-2 rounded-xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              {instituteTypes.map((type) => (
                <TouchableOpacity
                  key={type}
                  onPress={() => {
                    setSelectedType(type);
                    setShowDropdown(false);
                  }}
                  className="w-full py-3 px-4 text-left hover:bg-white/10 transition-colors"
                >
                  <Text className="text-white/80">{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Name of Institute */}
        <View className="mb-4">
          <TextInput
            placeholder="Name of Institute"
            value={instituteName}
            onChangeText={(text) => setInstituteName(text)}
            placeholderTextColor="rgba(255,255,255,0.6)"
            className="w-full py-4 px-4 rounded-xl text-white text-base outline-none"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          />
        </View>

        {/* Location */}
        <View className="mb-6">
          <View 
            className="w-full py-4 px-4 rounded-xl flex items-center justify-between"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <Text className="text-white/80 text-base">Location</Text>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 10.625C11.0355 10.625 11.875 9.78553 11.875 8.75C11.875 7.71447 11.0355 6.875 10 6.875C8.96447 6.875 8.125 7.71447 8.125 8.75C8.125 9.78553 8.96447 10.625 10 10.625Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 17.5C13.75 13.75 16.25 10.4518 16.25 8.125C16.25 4.67322 13.4518 1.875 10 1.875C6.54822 1.875 3.75 4.67322 3.75 8.125C3.75 10.4518 6.25 13.75 10 17.5Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </View>
          
          {/* Map Preview */}
          <View className="mt-4 rounded-xl overflow-hidden h-32">
            <Image 
              source={{ uri: karachiMap }} 
              accessibilityLabel="Location Map" 
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Generate Promo Code Button */}
        <TouchableOpacity 
          className="w-full py-4 rounded-full flex items-center justify-center"
          style={{ background: '#DC2626' }}
        >
          <Text className="text-white font-bold text-base">Generate Promo Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddInstituteModal;
