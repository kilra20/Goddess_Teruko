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
        <div className="max-w-md mx-auto px-6 py-12 text-center">
          <div className="bg-gray-900 border-2 border-red-600 rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-8 text-red-600">Are you 18+?</h1>
            
            <div className="space-y-4">
              <button
                onClick={handleConfirm}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
              >
                YES
              </button>
              
              <button
                onClick={handleLeave}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                NO
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
