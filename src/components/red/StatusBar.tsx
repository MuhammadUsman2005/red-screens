import React from 'react';

const StatusBar: React.FC = () => {
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <div className="status-bar">
      <span>{getCurrentTime()}</span>
      <div className="flex items-center gap-1">
        {/* Signal bars */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="1" fill="white" />
          <rect x="5" y="5" width="3" height="7" rx="1" fill="white" />
          <rect x="10" y="2" width="3" height="10" rx="1" fill="white" />
          <rect x="15" y="0" width="3" height="12" rx="1" fill="white" fillOpacity="0.4" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 10C8.55228 10 9 10.4477 9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10Z" fill="white" />
          <path d="M5 8C5.83333 7.16667 6.83333 6.75 8 6.75C9.16667 6.75 10.1667 7.16667 11 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2.5 5.5C4.16667 3.83333 6 3 8 3C10 3 11.8333 3.83333 13.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M0 3C2.33333 0.666667 5 0 8 0C11 0 13.6667 0.666667 16 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
        </svg>
        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="white" strokeOpacity="0.35" />
          <rect x="2" y="2" width="17" height="8" rx="1.5" fill="white" />
          <path d="M23 4V8C24.1046 8 25 7.10457 25 6V6C25 4.89543 24.1046 4 23 4Z" fill="white" fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
};

export default StatusBar;
