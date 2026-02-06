import React, { useState } from 'react';
import karachiMap from '@/assets/karachi-map.png';

const AddInstituteModal = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const instituteTypes = ['School', 'College', 'General Public', 'Donation'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-md rounded-t-3xl px-6 py-8"
        style={{
          background: 'linear-gradient(180deg, #852121 35.31%, #4E0C0C 67%, #380303 100%)'
        }}
      >
        {/* Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h2 className="text-white text-xl font-bold">Generate Promo Code</h2>
        </div>

        {/* Type of Institute Dropdown */}
        <div className="mb-4">
          <div 
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full py-4 px-4 rounded-xl flex items-center justify-between cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <span className="text-white/80 text-base">
              {selectedType || 'Type of Institute'}
            </span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`}
            >
              <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {showDropdown && (
            <div 
              className="mt-2 rounded-xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              {instituteTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    setShowDropdown(false);
                  }}
                  className="w-full py-3 px-4 text-left text-white/80 hover:bg-white/10 transition-colors"
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Name of Institute */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name of Institute"
            value={instituteName}
            onChange={(e) => setInstituteName(e.target.value)}
            className="w-full py-4 px-4 rounded-xl text-white placeholder-white/60 text-base outline-none"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          />
        </div>

        {/* Location */}
        <div className="mb-6">
          <div 
            className="w-full py-4 px-4 rounded-xl flex items-center justify-between"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <span className="text-white/80 text-base">Location</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 10.625C11.0355 10.625 11.875 9.78553 11.875 8.75C11.875 7.71447 11.0355 6.875 10 6.875C8.96447 6.875 8.125 7.71447 8.125 8.75C8.125 9.78553 8.96447 10.625 10 10.625Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 17.5C13.75 13.75 16.25 10.4518 16.25 8.125C16.25 4.67322 13.4518 1.875 10 1.875C6.54822 1.875 3.75 4.67322 3.75 8.125C3.75 10.4518 6.25 13.75 10 17.5Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Map Preview */}
          <div className="mt-4 rounded-xl overflow-hidden h-32">
            <img 
              src={karachiMap} 
              alt="Location Map" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Generate Promo Code Button */}
        <button 
          className="w-full py-4 rounded-full text-white font-bold text-base"
          style={{ background: '#DC2626' }}
        >
          Generate Promo Code
        </button>
      </div>
    </div>
  );
};

export default AddInstituteModal;
