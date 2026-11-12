'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export default function Sidebar({ isOpen, onClose, links }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.3, display: 'block' });
      gsap.to(sidebarRef.current, { x: 0, duration: 0.4, ease: 'power3.out' });
    } else {
      document.body.style.overflow = 'unset';
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.3, onComplete: () => {
        if (backdropRef.current) backdropRef.current.style.display = 'none';
      }});
      gsap.to(sidebarRef.current, { x: '100%', duration: 0.3, ease: 'power3.in' });
    }
  }, [isOpen]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <div className="md:hidden">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-50 opacity-0 hidden backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl p-6 flex flex-col justify-between transform translate-x-full"
      >
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
            <span className="font-bold text-sm tracking-widest text-neutral-900 uppercase">
              Navigation
            </span>
            <button
              onClick={onClose}
              aria-label="Close Menu"
              className="p-1.5 text-neutral-500 hover:text-neutral-950 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block font-mono text-sm uppercase tracking-wider text-neutral-800 hover:text-neutral-950 hover:translate-x-1 transition-all py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-neutral-200 text-xs font-mono text-neutral-500">
          Muhammad Masood © 2026
        </div>
      </div>
    </div>
  );
}