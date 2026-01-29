import React from 'react';
import StatusBar from '../../components/red/StatusBar';
import BottomNavigation from '../../components/red/BottomNavigation';
import itveLogo from '@/assets/itve-logo.png';

interface Post {
  id: string;
  username: string;
  timeAgo: string;
  isVerified: boolean;
  verifiedColor: 'green' | 'red';
  imageUrl: string;
  likes: number;
  caption: string;
  comments: number;
  isSponsored?: boolean;
  learnMore?: boolean;
}

const postsData: Post[] = [
  {
    id: '1',
    username: 'wanderlust_anna',
    timeAgo: '2h ago',
    isVerified: true,
    verifiedColor: 'green',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    likes: 1204,
    caption: 'Woke up to this incredible view. Feeling so grateful for moments like these. ✨',
    comments: 88,
  },
  {
    id: '2',
    username: 'EcoWear',
    timeAgo: '',
    isVerified: true,
    verifiedColor: 'red',
    imageUrl: 'https://images.unsplash.com/photo-1544923246-77307dd628b9?w=800&h=600&fit=crop',
    likes: 4512,
    caption: 'Embrace adventure with our new line of sustainable outdoor gear. Built for nature, by nature.',
    comments: 0,
    isSponsored: true,
    learnMore: true,
  },
  {
    id: '3',
    username: 'foodie_dave',
    timeAgo: '8h ago',
    isVerified: true,
    verifiedColor: 'green',
    imageUrl: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=800&h=600&fit=crop',
    likes: 634,
    caption: 'Homemade pasta night was a success! 🍝 Who wants the recipe?',
    comments: 42,
  },
];

const HomeScreen: React.FC = () => {
  return (
    <div className="app-container">
      <StatusBar />
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img 
            src={itveLogo} 
            alt="ITVE Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-white text-2xl font-extrabold tracking-wide">ITVE</span>
        </div>
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button className="text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          {/* Bookmark/Flag Icon */}
          <button className="text-red-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.3746 18.7907 21.7178 18.4576 21.8892C18.1245 22.0606 17.7236 22.0315 17.4188 21.8137L12 18.0289L6.58124 21.8137C6.27642 22.0315 5.87549 22.0606 5.54242 21.8892C5.20935 21.7178 5 21.3746 5 21V3Z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="flex-1 overflow-y-auto pb-24">
        {postsData.map((post) => (
          <div key={post.id} className="mb-0">
            {/* Post Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-bold">
                    {post.username.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-semibold text-sm">{post.username}</span>
                    {post.isVerified && (
                      <div 
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: post.verifiedColor === 'green' ? '#22C55E' : '#EF4444' }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                          <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <span className="text-white/60 text-xs">
                    {post.isSponsored ? 'Sponsored' : post.timeAgo}
                  </span>
                </div>
              </div>
              <button className="text-white/80">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <circle cx="4" cy="10" r="1.5"/>
                  <circle cx="10" cy="10" r="1.5"/>
                  <circle cx="16" cy="10" r="1.5"/>
                </svg>
              </button>
            </div>

            {/* Post Image */}
            <div className="w-full aspect-square bg-gray-800">
              <img 
                src={post.imageUrl} 
                alt="Post" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-4">
                {/* Heart */}
                <button className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                {/* Comment */}
                <button className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </button>
                {/* Share */}
                <button className="text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"/>
                  </svg>
                </button>
              </div>
              {/* Bookmark */}
              <button className="text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
              </button>
            </div>

            {/* Likes & Caption */}
            <div className="px-4 pb-4">
              <p className="text-white font-semibold text-sm mb-1">
                {post.likes.toLocaleString()} likes
              </p>
              <p className="text-white text-sm">
                <span className="font-semibold">{post.username}</span>{' '}
                {post.caption}
              </p>
              {post.learnMore && (
                <p className="text-red-400 text-sm font-medium mt-1">Learn More</p>
              )}
              {post.comments > 0 && (
                <p className="text-white/60 text-sm mt-1">
                  View all {post.comments} comments
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default HomeScreen;
