'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/Images/icon.png';
import carImg from '@/app/Images/car.png';

const MAROON = '#922b2b';
// Audio from public folder – no import needed (Next.js serves public/ at root)
const CAR_SOUND_SRC = '/Audio/car.mp3';

// Customer testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Ahmed Khan',
    role: 'Business Executive',
    rating: 5,
    text: 'Exceptional service! The car was pristine and the booking process was seamless. Highly recommend Cario for premium travel.',
    avatar: '👨‍💼'
  },
  {
    id: 2,
    name: 'Sarah Ali',
    role: 'Travel Blogger',
    rating: 5,
    text: 'Best car rental experience ever! Professional drivers, luxury vehicles, and unbeatable rates. Will definitely use again.',
    avatar: '👩‍💻'
  },
  {
    id: 3,
    name: 'Hassan Raza',
    role: 'Entrepreneur',
    rating: 5,
    text: 'Cario transformed my business trips. Reliable, comfortable, and always on time. A true premium service!',
    avatar: '👨‍💼'
  },
  {
    id: 4,
    name: 'Fatima Malik',
    role: 'Corporate Manager',
    rating: 5,
    text: 'Outstanding fleet and customer service. The attention to detail is remarkable. Cario sets the standard for luxury travel.',
    avatar: '👩‍💼'
  }
];

// Customer Feedback Component
function CustomerFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="customer-feedback-container relative z-20 w-full max-w-2xl mx-auto px-4 pb-8 sm:pb-12">
      <div className="feedback-card backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            Customer Reviews
          </h3>
          <div className="flex gap-1">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                  ? 'bg-[#922b2b] w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="testimonial-content min-h-[200px] relative">
          <div
            key={currentTestimonial.id}
            className="testimonial-item animate-fadeIn"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 drop-shadow-sm"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 italic">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#922b2b] to-[#b83838] flex items-center justify-center text-2xl shadow-lg">
                {currentTestimonial.avatar}
              </div>
              <div>
                <div className="font-semibold text-gray-800 text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-gray-600 text-sm">
                  {currentTestimonial.role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/20">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="text-sm text-gray-600 font-medium">
            {currentIndex + 1} / {testimonials.length}
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LandingIntro() {
  const [phase, setPhase] = useState('white');
  const engineRef = useRef(null);
  const engineStartedRef = useRef(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('maroon'), 500);
    const t2 = setTimeout(() => setPhase('circle'), 1200);
    const t3 = setTimeout(() => setPhase('content'), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Engine continuous play – start jab content dikhe; browser block kare to pehle click pe start
  const startEngine = () => {
    if (engineStartedRef.current) return;
    const el = engineRef.current;
    if (!el) return;
    el.loop = true;
    el.volume = 0.35;
    el.play().then(() => { engineStartedRef.current = true; }).catch(() => { });
  };

  useEffect(() => {
    if (phase !== 'content') return;
    const t = setTimeout(startEngine, 400);
    return () => clearTimeout(t);
  }, [phase]);

  // Pehla click/tap anywhere (browser autoplay block) – engine start
  useEffect(() => {
    if (phase !== 'content') return;
    const onFirstInteraction = () => {
      startEngine();
      document.removeEventListener('click', onFirstInteraction);
      document.removeEventListener('touchstart', onFirstInteraction);
    };
    document.addEventListener('click', onFirstInteraction, { once: true });
    document.addEventListener('touchstart', onFirstInteraction, { once: true });
    return () => {
      document.removeEventListener('click', onFirstInteraction);
      document.removeEventListener('touchstart', onFirstInteraction);
    };
  }, [phase]);

  return (
    <div className="landing-intro relative min-h-screen">
      {/* Continuous sound – public/Audio/car.mp3 */}
      <audio ref={engineRef} src={CAR_SOUND_SRC} preload="auto" loop />

      {/* 1. White screen */}
      <div
        className="landing-overlay landing-overlay-white fixed inset-0 z-20 bg-white transition-opacity duration-500 ease-out"
        style={{ opacity: phase === 'white' ? 1 : 0, pointerEvents: phase === 'white' ? 'auto' : 'none' }}
        aria-hidden={phase !== 'white'}
      />

      {/* 2. Full maroon, then circle shrink */}
      <div
        className="landing-overlay landing-overlay-maroon fixed inset-0 z-10"
        style={{
          backgroundColor: MAROON,
          clipPath: phase === 'white' ? 'circle(0% at 50% 50%)' : phase === 'maroon' ? 'circle(150vmax at 50% 50%)' : 'circle(0% at 50% 50%)',
          transition: phase === 'maroon' ? 'clip-path 0s' : 'clip-path 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: phase === 'content' ? 'none' : 'auto',
        }}
        aria-hidden={phase === 'content'}
      />

      {/* 3. Content – diagonal split: left maroon, right white */}
      <div
        className="landing-content landing-split min-h-screen relative transition-opacity duration-700 ease-out"
        style={{ opacity: phase === 'content' ? 1 : 0, pointerEvents: phase === 'content' ? 'auto' : 'none' }}
      >
        {/* Diagonal background – left maroon, right with gradient + design */}
        <div className="landing-split-left fixed inset-0 z-0" style={{ backgroundColor: MAROON }} />
        <div className="landing-split-right fixed inset-0 z-0 landing-right-bg" />

        {/* Left side – maroon pe content */}
        <div className="landing-left relative z-10 flex flex-col items-center justify-center min-h-screen px-8 sm:px-12 lg:px-16 text-center pt-12 sm:pt-16">
          <div className="logo-3d-wrap mb-6">
            <Image
              src={logo}
              alt="Cario"
              width={88}
              height={88}
              className="shrink-0 drop-shadow-lg"
            />
          </div>
          <h1 className="font-cario-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-4 tracking-tight drop-shadow-sm">
            Cario
          </h1>
          <p className="text-white/90 text-base sm:text-lg max-w-xs sm:max-w-sm font-light leading-relaxed mb-6">
            Book your route for the best travel experience.
          </p>
          <div className="landing-left-features flex flex-wrap justify-center gap-x-6 gap-y-1 text-white/80 text-sm sm:text-base font-medium mb-8">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/90" /> Premium fleet
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/90" /> Easy booking
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/90" /> Best rates
            </span>
          </div>
          <Link
            href="/app"
            className="landing-left-btn diagonal-maroon-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border-2 border-white/30 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-white/50"
          >
            <span className="relative z-10">Book Now</span>
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>


        <div className="landing-right relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Right side decorative – soft circles, screen complete */}
          <div className="landing-right-deco absolute inset-0 pointer-events-none" aria-hidden />
          <div className="landing-car-wrap w-full flex-1 flex items-center justify-center relative z-10">
            <div className="landing-car-entry w-full h-full flex items-center justify-center">
              <div className="landing-car-float w-full h-full flex items-center justify-center">
                <div className="car-3d-wrap w-full h-full flex items-center justify-center">
                  <Image
                    src={carImg}
                    alt="Car"
                    width={1900}
                    height={1080}
                    className="landing-car-image"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Customer Feedback Section */}
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
}
