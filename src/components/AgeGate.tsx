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
    window.location.href = 'https://www.google.com';
  };

  if (!mounted) return null;

  if (!isAgeVerified) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold mb-8 text-red-600">⚠️ AGE VERIFICATION</h1>
          
          <div className="bg-gray-900 border-2 border-red-600 rounded-lg p-8 mb-8">
            <p className="text-lg mb-4">
              This site contains mature content intended for adults only.
            </p>
            
            <div className="text-sm text-gray-400 space-y-3 mb-8 text-left">
              <p>By entering, you certify that:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>You are at least 18 years old (or the legal age of majority in your jurisdiction)</li>
                <li>Viewing adult-themed material is legal where you live</li>
                <li>You will not share this content with minors</li>
                <li>You consent to view mature material</li>
              </ul>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleConfirm}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
              >
                I CONFIRM & AGREE — ENTER
              </button>
              
              <button
                onClick={handleLeave}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                I&apos;M UNDER 18 — LEAVE
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              Your choice will be saved for 365 days.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
