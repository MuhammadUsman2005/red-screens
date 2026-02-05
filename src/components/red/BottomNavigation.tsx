import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  MessagesIcon, 
  InstitutesIcon, 
  MenteesIcon
} from '../icons/NavIcons';
import profileIcon from '@/assets/profile-icon.png';

interface NavItem {
  id: string;
  label: string;
  icon: React.FC<{ size?: number; color?: string }>;
  path: string | null;
}

const ProfileIconComponent: React.FC<{ size?: number; color?: string }> = ({ size = 24, color }) => (
  <img 
    src={profileIcon} 
    alt="Profile" 
    width={size} 
    height={size}
    style={{ 
      filter: color === '#EF4444' ? 'none' : 'brightness(0) invert(1) opacity(0.6)'
    }}
  />
);

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: HomeIcon, path: '/home' },
  { id: 'messages', label: 'Messages', icon: MessagesIcon, path: '/' },
  { id: 'institutes', label: 'Institutes', icon: InstitutesIcon, path: '/institutes' },
  { id: 'mentees', label: 'Mentees', icon: MenteesIcon, path: '/mentees' },
  { id: 'profile', label: 'Profile', icon: ProfileIconComponent, path: null },
];

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname.startsWith('/chat');
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const active = isActive(item.path);
        const IconComponent = item.icon;
        
        return (
          <button
            key={item.id}
            onClick={() => item.path && navigate(item.path)}
            className={`nav-item ${active ? 'nav-item-active' : ''}`}
          >
            <div className="nav-icon-wrapper flex items-center justify-center">
              <IconComponent 
                size={22} 
                color="rgba(255, 255, 255, 0.6)"
              />
            </div>
            <span className="nav-item-text">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
