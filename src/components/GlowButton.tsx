'use client';

import { useRef, useEffect } from 'react';

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  label: string;
}

export default function GlowButton({ href, children, label }: GlowButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;

      ref.current.style.setProperty('--mouse-x', `${percentX}%`);
      ref.current.style.setProperty('--mouse-y', `${percentY}%`);
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="glow-on-hover h-full p-8 rounded-xl border border-red-700/60 bg-gradient-to-br from-red-900/20 to-transparent hover:from-red-900/40 transition duration-300 cursor-pointer flex flex-col items-center justify-center space-y-4">
        {children}
        <p className="text-lg font-bold text-red-500 group-hover:text-red-400 transition">
          {label}
        </p>
      </div>
    </a>
  );
}
