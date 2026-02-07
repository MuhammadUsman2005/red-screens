import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../../components/red/StatusBar.js';
import BottomNavigation from '../../components/red/BottomNavigation.js';
import sophiaAvatar from '../../assets/sophia-avatar.png';
import ethanAvatar from '../../assets/ethan-avatar.png';
import avaAvatar from '../../assets/ava-avatar.png';
import oliverAvatar from '../../assets/oliver-avatar.png';
import sophiaStudentAvatar from '../../assets/sophia-student-avatar.png';
import liamAvatar from '../../assets/liam-avatar.png';
import ethanStudentAvatar from '../../assets/ethan-student-avatar.png';
import avaStudentAvatar from '../../assets/ava-student-avatar.png';
import oliverStudentAvatar from '../../assets/oliver-student-avatar.png';

const socialNotificationsToday = [
  { id: '1', type: 'like', user: 'Sophia', action: 'liked your post', time: '1h', avatar: sophiaAvatar },
  { id: '2', type: 'comment', user: 'Ethan', action: 'commented on your post', time: '3h', avatar: ethanAvatar },
  { id: '3', type: 'follow', user: 'Ava', action: 'followed you', time: '4h', avatar: avaAvatar },
  { id: '4', type: 'request', user: 'Oliver', action: 'accepted your request', time: '5h', avatar: oliverAvatar },
];

const achievementNotifications = [
  { id: '1', icon: 'trophy', message: 'Congratulations! Your have Achieved 2nd rank in Top Promoter  season 4.', time: '2d' },
  { id: '2', icon: 'trophy', message: 'Congratulations! You\'ve received a bonus of 5,000 pkr.', time: '3d' },
  { id: '3', icon: 'star', message: 'You have unlocked', highlight: 'Top Performer Acheivemenet', time: '5d' },
  { id: '4', icon: 'trophy', message: 'You\'ve reached second position in the', time: '' },
];

const studentNotificationsToday = [
  { id: '1', user: 'Sophia', action: 'secured ABC Scholarship', time: '1h', avatar: sophiaStudentAvatar },
  { id: '2', user: 'Liam', action: 'started AI Diploma Journey', time: '2h', avatar: liamAvatar },
  { id: '3', user: 'Ethan', action: 'secured job at AYASC pvt ltd', time: '3h', avatar: ethanStudentAvatar },
  { id: '4', user: 'Ava', action: 'completed her AI Diploma', time: '4h', avatar: avaStudentAvatar },
  { id: '5', user: 'Oliver', action: 'achieved 2nd position in AI Diploma', time: '5h', avatar: oliverStudentAvatar },
];

const NotificationsScreen = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('social');

  const renderSocialTab = () => (
    <>
      <div className="mb-6">
        <h3 className="text-white font-semibold text-base mb-4">Today</h3>
        <div className="space-y-4">
          {socialNotificationsToday.map((notification) => (
            <div key={notification.id} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
                {notification.avatar && (
                  <img src={notification.avatar} alt={notification.user} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">
                  <span className="font-semibold">{notification.user}</span> {notification.action}
                </p>
                <p className="text-white/50 text-xs">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold text-base mb-4">This Week</h3>
        <div className="space-y-4">
          {achievementNotifications.map((notification) => (
            <div key={notification.id} className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-[#EF4444] flex items-center justify-center flex-shrink-0">
                {notification.icon === 'trophy' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M6 9H4.5C3.67 9 3 8.33 3 7.5V6C3 5.17 3.67 4.5 4.5 4.5H6" strokeLinecap="round"/>
                    <path d="M18 9H19.5C20.33 9 21 8.33 21 7.5V6C21 5.17 20.33 4.5 19.5 4.5H18" strokeLinecap="round"/>
                    <path d="M6 4.5H18V11C18 14.31 15.31 17 12 17C8.69 17 6 14.31 6 11V4.5Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17V20" strokeLinecap="round"/>
                    <path d="M8 20H16" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">
                  {notification.highlight ? (
                    <>
                      {notification.message} <span className="text-red-400">{notification.highlight}</span>
                    </>
                  ) : (
                    notification.message
                  )}
                </p>
                {notification.time && <p className="text-white/50 text-xs">{notification.time}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderStudentTab = () => (
    <>
      <div className="mb-6">
        <h3 className="text-white font-semibold text-base mb-4">Today</h3>
        <div className="space-y-4">
          {studentNotificationsToday.map((notification) => (
            <div key={notification.id} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
                {notification.avatar && (
                  <img src={notification.avatar} alt={notification.user} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">
                  {notification.id === '1' ? (
                    <>Hurray! <span className="font-semibold">{notification.user}</span> {notification.action}</>
                  ) : (
                    <><span className="font-semibold">{notification.user}</span> {notification.action}</>
                  )}
                </p>
                <p className="text-white/50 text-xs">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold text-base mb-4">This Week</h3>
      </div>
    </>
  );

  return (
    <div className="app-container">
      <StatusBar />
      
      <div className="flex items-center justify-center py-3">
        <h1 className="text-white text-xl font-semibold">Notifications</h1>
      </div>

      <div className="flex items-center gap-3 px-4 mb-6">
        <button
          onClick={() => setActiveTab('social')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === 'social'
              ? 'bg-[#EF4444] text-white'
              : 'bg-transparent border border-white/40 text-white/80'
          }`}
        >
          Social
        </button>
        <button
          onClick={() => setActiveTab('student')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === 'student'
              ? 'bg-[#EF4444] text-white'
              : 'bg-transparent border border-white/40 text-white/80'
          }`}
        >
          Student
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 px-4">
        {activeTab === 'social' ? renderSocialTab() : renderStudentTab()}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default NotificationsScreen;
