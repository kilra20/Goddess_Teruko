'use client';

import { useState, useEffect } from 'react';

export default function AgeGate() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check if user has already verified age
    const verified = localStorage.getItem('teruko_age_verified');
    if (verified === 'true') {
      setIsAgeVerified(true);
    }
    setMounted(true);
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('teruko_age_verified', 'true');
    setIsAgeVerified(true);
  };

  const handleLeave = () => {
    window.location.href = 'https://www.youtubekids.com';
  };

  if (!mounted) return null;

  if (!isAgeVerified) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-white">Are you over 18?</h1>
          
          <div className="space-y-4">
            <button
              onClick={handleConfirm}
              className="block w-32 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-300"
            >
              YES
            </button>
            
            <button
              onClick={handleLeave}
              className="block w-32 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded transition duration-300"
            >
              NO
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
