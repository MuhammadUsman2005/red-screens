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
      
      {/* Modal */}
      <div className="fixed inset-x-0 bottom-0 z-50 max-w-md mx-auto">
        <div className="add-institute-modal">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <button 
              onClick={onClose}
              className="text-black"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h2 className="text-black text-xl font-semibold">Add Institute</h2>
          </div>

          {/* Type of Institute Dropdown */}
          <div className="mb-4">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="modal-input-field w-full flex items-center justify-between"
            >
              <span className={instituteType ? 'text-red-500' : 'text-red-400'}>
                {instituteType || 'Type of Institute'}
              </span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none"
                className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`}
              >
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {showDropdown && (
              <div className="modal-dropdown">
                {instituteTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setInstituteType(type);
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100"
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
              className="modal-input-field w-full text-red-500 placeholder-red-400"
            />
          </div>

          {/* Location Section */}
          <div className="mb-6">
            <h3 className="text-black font-semibold text-lg mb-3">Location</h3>
            <div className="map-container">
              {/* Static map placeholder matching the design */}
              <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/67.0011,24.8607,12,0/340x160@2x?access_token=pk.placeholder"
                  alt="Map"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a styled placeholder if map fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div class="text-center">
                          <svg class="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <p class="text-gray-500 text-sm">Karachi, Pakistan</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>

          {/* Add Institute Button */}
          <button className="add-institute-button">
            Add Institute
          </button>
        </div>
      </div>
    </>
  );
};

export default AddInstituteModal;
