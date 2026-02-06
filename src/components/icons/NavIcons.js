import React from 'react';
import { Image } from 'react-native';
import navHome from '@/assets/nav-home.png';
import navMessages from '@/assets/nav-messages.png';
import navInstitutes from '@/assets/nav-institutes.png';

export const HomeIcon = ({ size = 24, color }) => (
  <Image 
    source={{ uri: navHome }} 
    accessibilityLabel="Home" 
    style={{ 
      width: size, 
      height: size,
      filter: color === '#EF4444' ? 'none' : 'brightness(0) invert(1) opacity(0.6)'
    }}
  />
);

export const MessagesIcon = ({ size = 24, color }) => (
  <Image 
    source={{ uri: navMessages }} 
    accessibilityLabel="Messages" 
    style={{ 
      width: size, 
      height: size,
      filter: color === '#EF4444' ? 'none' : 'brightness(0) invert(1) opacity(0.6)'
    }}
  />
);

export const InstitutesIcon = ({ size = 24, color }) => (
  <Image 
    source={{ uri: navInstitutes }} 
    accessibilityLabel="Institutes" 
    style={{ 
      width: size + 6, 
      height: size + 6,
      filter: color === '#EF4444' ? 'none' : 'brightness(0) invert(1) opacity(0.6)'
    }}
  />
);

export const PromoIcon = ({ className, size = 24, color = 'currentColor' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.41 18.09V19H10.74V18.07C9.03 17.71 7.58 16.61 7.47 14.67H9.43C9.53 15.72 10.25 16.54 12.08 16.54C14.04 16.54 14.48 15.56 14.48 14.95C14.48 14.12 14.04 13.34 11.81 12.81C9.33 12.21 7.63 11.19 7.63 9.14C7.63 7.42 9.02 6.3 10.74 5.93V5H13.41V5.95C15.27 6.4 16.2 7.81 16.26 9.34H14.3C14.25 8.23 13.66 7.47 12.08 7.47C10.58 7.47 9.68 8.15 9.68 9.11C9.68 9.95 10.33 10.5 12.35 11.02C14.37 11.54 16.53 12.41 16.53 14.93C16.52 16.76 15.15 17.76 13.41 18.09Z" 
      fill={color}
    />
  </svg>
);

export const MenteesIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
  </svg>
);

export const ProfileIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
  </svg>
);

export const SearchIcon = ({ size = 24, color = 'currentColor', className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const BackArrowIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const MoreIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

export const CameraIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 19V7a2 2 0 0 0-2-2h-3l-2-3H8L6 5H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const AttachmentIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.44 11.05l-9.19 9.19a5 5 0 0 1-7.07-7.07l9.19-9.19a3 3 0 0 1 4.24 4.24l-8.49 8.49a1 1 0 0 1-1.42-1.42l7.78-7.78" />
  </svg>
);

export const SendIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export const CheckIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
