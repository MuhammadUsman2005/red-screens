import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import StatusBar from '../../components/red/StatusBar';
import BottomNavigation from '../../components/red/BottomNavigation';
import AddInstituteModal from '../../components/red/AddInstituteModal';
import dollarIcon from '../../assets/dollar-icon.png';

const institutesData = [
  {
    id: 'abc-school',
    name: 'ABC School',
    code: 'abcs',
    classes: [
      { name: 'Class 10', code: 'abcs10' },
      { name: 'Class 9', code: 'abcs09' },
      { name: 'Class 8', code: 'abcs08' },
    ],
  },
  {
    id: 'abc-college',
    name: 'ABC College',
    code: 'abcc',
    classes: [
      { name: 'Pre Engineering 12', code: 'abcceng2' },
      { name: 'Pre Medical 12', code: 'abccmed2' },
      { name: 'Commerce 12', code: 'abcccom2' },
    ],
  },
];

const InstitutesScreen = () => {
  const [expandedInstitutes, setExpandedInstitutes] = useState(['abc-school', 'abc-college']);
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleInstitute = (id) => {
    setExpandedInstitutes(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <View className="app-container">
      <StatusBar />
      
      {/* Header */}
      <View className="px-4 pt-4 pb-3">
        <View className="flex items-center justify-between mb-6">
          <Text className="text-white text-2xl font-extrabold tracking-wide">INSTITUTES</Text>
          {/* Dollar Icon */}
          <Image source={{ uri: dollarIcon }} accessibilityLabel="Dollar" className="w-10 h-10" />
        </View>
        
        {/* School/Colleges Button */}
        <TouchableOpacity 
          onPress={() => setShowAddModal(true)}
          className="institutes-header-button"
        >
          <Text className="text-white font-bold text-base tracking-wide">SCHOOL/COLLEGES</Text>
          <View className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </View>
        </TouchableOpacity>
      </View>

      {/* Institutes List */}
      <View className="flex-1 overflow-y-auto pb-24 px-4">
        {institutesData.map((institute) => {
          const isExpanded = expandedInstitutes.includes(institute.id);
          
          return (
            <View key={institute.id} className="mb-2">
              {/* Institute Header */}
              <TouchableOpacity 
                onPress={() => toggleInstitute(institute.id)}
                className="institute-item w-full"
              >
                <Text className="text-white font-bold text-lg">{institute.name}</Text>
                <View className="flex items-center gap-2">
                  <Text className="text-white/70 text-sm">{institute.code}</Text>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none"
                    className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  >
                    <path d="M5 12.5L10 7.5L15 12.5" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </View>
              </TouchableOpacity>
              
              {/* Classes List */}
              {isExpanded && (
                <View className="institute-classes">
                  {institute.classes.map((classItem, index) => (
                    <View 
                      key={index} 
                      className="class-item"
                    >
                      <Text className="text-white/90 text-base font-semibold">{classItem.name}</Text>
                      <Text className="text-white/60 text-sm">{classItem.code}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </View>

      <BottomNavigation />

      {/* Add Institute Modal */}
      <AddInstituteModal 
        isOpen={showAddModal} 
        onClose={() => setShowAddModal(false)} 
      />
    </View>
  );
};

export default InstitutesScreen;
