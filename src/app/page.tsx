'use client';

import Image from 'next/image';
import AgeGate from '@/components/AgeGate';
import GlowButton from '@/components/GlowButton';

export default function Home() {
  return (
    <>
      <AgeGate />
      
      <main className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800 z-40">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <p className="text-lg font-bold text-red-500 tracking-wider">WELCOME</p>
          </div>
        </nav>

        {/* Main Content */}
        <section className="pt-32 pb-20 px-6 flex items-center justify-center min-h-screen">
          <div className="max-w-6xl mx-auto w-full space-y-8">
            {/* Banner */}
            <div className="rounded-lg overflow-hidden border border-red-700 bg-gray-900 mx-auto w-full max-w-4xl">
              <div className="relative w-full">
                <Image
                  src="/teruko-banner.jpg"
                  alt="Goddess Teruko"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Bio and Links Grid */}
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
              {/* Bio Section - Left */}
              <div className="col-span-2">
                <div className="p-12 rounded-xl border border-red-700 bg-gradient-to-br from-red-900/30 to-transparent h-full flex items-center justify-center cursor-default">
                  <p className="text-2xl md:text-3xl font-bold leading-relaxed text-white text-center italic" style={{ fontFamily: 'Georgia, serif' }}>
                    Hello everyone I&apos;m Teruko and I&apos;m here to make you all my little pets~ come in my DMs and submit for me, don&apos;t resist it&apos;s pointless
                  </p>
                </div>
              </div>

              {/* Social Links - Right */}
              <div className="space-y-6">
                {/* Twitter Card */}
                <GlowButton
                  href="https://x.com/Goddess_Teruko"
                  label="TWITTER"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-red-600 flex items-center justify-center group-hover:bg-red-700 transition duration-300">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a4.5 4.5 0 00-4.5-4.5z" />
                    </svg>
                  </div>
                </GlowButton>

                {/* Throne Card */}
                <GlowButton
                  href="https://throne.com/goddess_teruko_"
                  label="THRONE"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-red-600 flex items-center justify-center group-hover:bg-red-700 transition duration-300">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </GlowButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
