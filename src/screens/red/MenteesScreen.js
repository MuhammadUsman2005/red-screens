import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from '../../components/primitives';
import StatusBar from '../../components/red/StatusBar';
import BottomNavigation from '../../components/red/BottomNavigation';
import menteeAvatar from '../../assets/mentee-avatar.png';
import dollarIcon from '../../assets/dollar-icon.png';
import verifiedBadge from '../../assets/verified-badge-blue.png';

const classesData = [
  {
    id: 'class-10',
    name: 'Class 10',
    code: 'abcs10',
    students: [
      { name: 'Ali', isVerified: true, hasRedStar: true },
      { name: 'Ali', isVerified: true, hasRedStar: true },
      { name: 'Ali', isVerified: true, hasRedStar: true },
      { name: 'Ali', isVerified: true, hasRedStar: true },
      { name: 'Ali', isVerified: true, hasRedStar: false },
      { name: 'Ali', isVerified: true, hasRedStar: false },
      { name: 'Ali', isVerified: true, hasRedStar: false },
      { name: 'Ali', isVerified: true, hasRedStar: false },
      { name: 'Ali', isVerified: false, hasRedStar: false },
    ],
  },
  { id: 'class-9', name: 'Class 9', code: 'abcs09', students: [] },
  { id: 'class-8', name: 'Class 8', code: 'abcs08', students: [] },
  { id: 'class-6', name: 'Class 6', code: 'abcs06', students: [] },
  { id: 'class-5', name: 'Class 5', code: 'abcs05', students: [] },
  { id: 'class-4', name: 'Class 4', code: 'abcs04', students: [] },
  { id: 'class-3', name: 'Class 3', code: 'abcs03', students: [] },
  { id: 'class-2', name: 'Class 2', code: 'abcs02', students: [] },
  { id: 'class-1', name: 'Class 1', code: 'abcs01', students: [] },
  { id: 'kg-3', name: 'Kinder Garden 3', code: 'abcs003', students: [] },
  { id: 'kg-2', name: 'Kinder Garden 2', code: 'abcs002', students: [] },
  { id: 'kg-1', name: 'Kinder Garden 1', code: 'abcs001', students: [] },
];

const MenteesScreen = () => {
  const [expandedClasses, setExpandedClasses] = useState(['class-10']);

  const toggleClass = (id) => {
    setExpandedClasses(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <View className="app-container">
      <StatusBar />

      {/* Header */}
      <View className="px-4 pt-4 pb-3">
        <View className="flex items-center justify-between mb-6">
          <Text className="text-white text-2xl font-extrabold tracking-wide">MENTEES</Text>
          <Image source={dollarIcon} alt="Dollar" className="w-10 h-10" />
        </View>
      </View>

      {/* Classes List */}
      <View className="flex-1 overflow-y-auto pb-24">
        {classesData.map((classItem) => {
          const isExpanded = expandedClasses.includes(classItem.id);

          return (
            <View key={classItem.id}>
              {/* Class Header */}
              <TouchableOpacity
                onPress={() => toggleClass(classItem.id)}
                className="w-full flex items-center justify-between px-4 py-3"
                style={{
                  background: 'linear-gradient(180deg, rgba(180,50,50,0.9) 0%, rgba(120,30,30,0.8) 100%)'
                }}
              >
                <Text className="text-white font-bold text-lg">{classItem.name}</Text>
                <View className="flex items-center gap-2">
                  <Text className="text-white/70 text-sm">{classItem.code}</Text>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </View>
              </TouchableOpacity>

              {/* Students List */}
              {isExpanded && classItem.students.length > 0 && (
                <View style={{ background: 'linear-gradient(180deg, rgba(60,15,15,0.9) 0%, rgba(40,10,10,0.8) 100%)' }}>
                  {classItem.students.map((student, index) => (
                    <View
                      key={index}
                      className="flex items-center justify-between px-4 py-3"
                      style={{ borderBottom: index < classItem.students.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                    >
                      <View className="flex items-center gap-3">
                        <View className="w-10 h-10 rounded-full overflow-hidden">
                          <Image source={menteeAvatar} alt={student.name} className="w-full h-full object-cover" />
                        </View>
                        <View className="flex items-center gap-1">
                          <Text className={`font-medium text-base ${index < 4 ? 'text-red-500' : 'text-white'}`}>{student.name}</Text>
                          {student.isVerified && (
                            <Image source={verifiedBadge} alt="Verified" className="w-5 h-5" />
                          )}
                        </View>
                      </View>
                      {student.hasRedStar && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#EF4444">
                          <path d="M8 0L10.2 5.1L16 5.8L12 9.9L13 16L8 13.1L3 16L4 9.9L0 5.8L5.8 5.1L8 0Z"/>
                        </svg>
                      )}
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </View>

      <BottomNavigation />
    </View>
  );
};

export default MenteesScreen;
