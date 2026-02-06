import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from '@/primitives';
import karachiMap from '../../assets/karachi-map.png';

const AddInstituteModal = ({ isOpen, onClose }) => {
  const [instituteType, setInstituteType] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const instituteTypes = ['School', 'College', 'General Public', 'Donation'];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <View 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <View className="fixed inset-x-0 bottom-0 z-50 max-w-md mx-auto">
        <View 
          className="rounded-t-3xl px-6 py-6"
          style={{
            background: 'linear-gradient(180deg, #852121 0%, #4E0C0C 50%, #380303 100%)'
          }}
        >
          {/* Header */}
          <View className="flex items-center gap-3 mb-6">
            <TouchableOpacity 
              onClick={onClose}
              className="text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </TouchableOpacity>
            <Text className="text-white text-xl font-bold">Generate Promo Code</Text>
          </View>

          {/* Type of Institute Dropdown */}
          <View className="mb-4">
            <TouchableOpacity 
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full flex items-center justify-between px-5 py-4 rounded-full text-left"
              style={{ background: 'rgba(0,0,0,0.3)' }}
            >
              <Text className={instituteType ? 'text-white font-medium' : 'text-white/70'}>
                {instituteType || 'Type of Institute'}
              </Text>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none"
                className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`}
              >
                <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </TouchableOpacity>
            
            {showDropdown && (
              <View className="mt-2 rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.4)' }}>
                {instituteTypes.map((type) => (
                  <TouchableOpacity
                    key={type}
                    onClick={() => {
                      setInstituteType(type);
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-5 py-3 text-white hover:bg-white/10 transition-colors"
                  >
                    {type}
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Name of Institute Input */}
          <View className="mb-6">
            <TextInput
              type="text"
              placeholder="Name of Institute"
              value={instituteName}
              onChange={(e) => setInstituteName(e.target.value)}
              className="w-full px-5 py-4 rounded-full text-white placeholder-white/70"
              style={{ background: 'rgba(0,0,0,0.3)', border: 'none', outline: 'none' }}
            />
          </View>

          {/* Location Section */}
          <View className="mb-6">
            <Text className="block text-white font-bold text-lg mb-3">Location</Text>
            <View className="rounded-xl overflow-hidden h-40">
              <Image 
                src={karachiMap} 
                alt="Karachi, Pakistan" 
                className="w-full h-full object-cover"
              />
            </View>
          </View>

          {/* Generate Promo Code Button */}
          <TouchableOpacity 
            className="w-full py-4 rounded-full text-white font-bold text-base"
            style={{ background: '#DC2626' }}
          >
            Generate Promo Code
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AddInstituteModal;
