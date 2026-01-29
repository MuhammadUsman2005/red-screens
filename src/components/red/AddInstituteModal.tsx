import React, { useState } from 'react';

interface AddInstituteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddInstituteModal: React.FC<AddInstituteModalProps> = ({ isOpen, onClose }) => {
  const [instituteType, setInstituteType] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const instituteTypes = ['School', 'College', 'University', 'Institute'];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Modal - Using Red Gradient Background */}
      <div className="fixed inset-x-0 bottom-0 z-50 max-w-md mx-auto">
        <div 
          className="rounded-t-3xl px-6 py-6"
          style={{
            background: 'linear-gradient(180deg, #852121 0%, #4E0C0C 50%, #380303 100%)'
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <button 
              onClick={onClose}
              className="text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h2 className="text-white text-xl font-bold">Add Institute</h2>
          </div>

          {/* Type of Institute Dropdown */}
          <div className="mb-4">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full flex items-center justify-between px-5 py-4 rounded-full text-left"
              style={{ background: 'rgba(0,0,0,0.3)' }}
            >
              <span className={instituteType ? 'text-white font-medium' : 'text-white/70'}>
                {instituteType || 'Type of Institute'}
              </span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none"
                className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`}
              >
                <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {showDropdown && (
              <div className="mt-2 rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.4)' }}>
                {instituteTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setInstituteType(type);
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-5 py-3 text-white hover:bg-white/10 transition-colors"
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Name of Institute Input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Name of Institute"
              value={instituteName}
              onChange={(e) => setInstituteName(e.target.value)}
              className="w-full px-5 py-4 rounded-full text-white placeholder-white/70"
              style={{ background: 'rgba(0,0,0,0.3)', border: 'none', outline: 'none' }}
            />
          </div>

          {/* Location Section */}
          <div className="mb-6">
            <h3 className="text-white font-bold text-lg mb-3">Location</h3>
            <div className="rounded-xl overflow-hidden h-40">
              {/* Static map placeholder matching the design */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-10 h-10 mx-auto text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-gray-600 text-sm font-medium">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Add Institute Button */}
          <button 
            className="w-full py-4 rounded-full text-white font-bold text-base"
            style={{ background: '#DC2626' }}
          >
            Add Institute
          </button>
        </div>
      </div>
    </>
  );
};

export default AddInstituteModal;
