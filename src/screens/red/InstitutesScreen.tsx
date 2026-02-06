import React, { useState } from 'react';
import StatusBar from '../../components/red/StatusBar';
import BottomNavigation from '../../components/red/BottomNavigation';
import AddInstituteModal from '../../components/red/AddInstituteModal';
import dollarIcon from '../../assets/dollar-icon.png';

interface ClassItem {
  name: string;
  code: string;
}

interface Institute {
  id: string;
  name: string;
  code: string;
  classes: ClassItem[];
}

const institutesData: Institute[] = [
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

const InstitutesScreen: React.FC = () => {
  const [expandedInstitutes, setExpandedInstitutes] = useState<string[]>(['abc-school', 'abc-college']);
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleInstitute = (id: string) => {
    setExpandedInstitutes(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="app-container">
      <StatusBar />
      
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-2xl font-extrabold tracking-wide">INSTITUTES</h1>
          {/* Dollar Icon */}
          <img src={dollarIcon} alt="Dollar" className="w-10 h-10" />
        </div>
        
        {/* School/Colleges Button */}
        <button 
          onClick={() => setShowAddModal(true)}
          className="institutes-header-button"
        >
          <span className="text-white font-bold text-base tracking-wide">SCHOOL/COLLEGES</span>
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </button>
      </div>

      {/* Institutes List */}
      <div className="flex-1 overflow-y-auto pb-24 px-4">
        {institutesData.map((institute) => {
          const isExpanded = expandedInstitutes.includes(institute.id);
          
          return (
            <div key={institute.id} className="mb-2">
              {/* Institute Header */}
              <button 
                onClick={() => toggleInstitute(institute.id)}
                className="institute-item w-full"
              >
                <span className="text-white font-bold text-lg">{institute.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-white/70 text-sm">{institute.code}</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none"
                    className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  >
                    <path d="M5 12.5L10 7.5L15 12.5" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              {/* Classes List */}
              {isExpanded && (
                <div className="institute-classes">
                  {institute.classes.map((classItem, index) => (
                    <div 
                      key={index} 
                      className="class-item"
                    >
                      <span className="text-white/90 text-base font-semibold">{classItem.name}</span>
                      <span className="text-white/60 text-sm">{classItem.code}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <BottomNavigation />

      {/* Add Institute Modal */}
      <AddInstituteModal 
        isOpen={showAddModal} 
        onClose={() => setShowAddModal(false)} 
      />
    </div>
  );
};

export default InstitutesScreen;
