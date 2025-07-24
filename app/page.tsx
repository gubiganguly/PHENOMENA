"use client";

import { HeroSection } from '@/components/sections/hero-section';
import { CinematicReelSection } from '@/components/sections/cinematic-reel-section';
import { PressSection } from '@/components/sections/press-section';
import { EmailCaptureSection } from '@/components/sections/email-capture-section';
import { QRSection } from '@/components/sections/qr-section';
import { ManifestoSection } from '@/components/sections/manifesto-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section with Silk Background */}
      <HeroSection />
      
      {/* Cinematic Reel Section */}
      <CinematicReelSection />
      
      {/* Manifesto Section */}
      <ManifestoSection />
      
      {/* Press Section */}
      <PressSection />
      
      {/* Email Capture Section */}
      <EmailCaptureSection />
      
      {/* QR Code Section */}
      <QRSection />
    </main>
  );
}
