import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  MessagesIcon, 
  InstitutesIcon, 
  MenteesIcon, 
  ProfileIcon 
} from '../icons/NavIcons';

interface NavItem {
  id: string;
  label: string;
  icon: React.FC<{ size?: number; color?: string }>;
  path: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: HomeIcon, path: '/home' },
  { id: 'messages', label: 'Messages', icon: MessagesIcon, path: '/' },
  { id: 'institutes', label: 'Institutes', icon: InstitutesIcon, path: '/institutes' },
  { id: 'mentees', label: 'Mentees', icon: MenteesIcon, path: '/mentees' },
  { id: 'profile', label: 'Profile', icon: ProfileIcon, path: '/profile' },
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
            onClick={() => navigate(item.path)}
            className={`nav-item ${active ? 'nav-item-active' : ''}`}
          >
            <IconComponent 
              size={22} 
              color={active ? '#EF4444' : 'rgba(255, 255, 255, 0.6)'} 
            />
            <span className="nav-item-text">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
