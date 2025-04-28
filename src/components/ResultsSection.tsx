
import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const Counter = ({ end, suffix, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(countUp);
      }
    };

    animationFrameId = requestAnimationFrame(countUp);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-bold cosmic-text">
      {count}{suffix}
    </div>
  );
};

const ResultsSection = () => {
  return (
    <section className="py-24 px-4 relative bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="absolute inset-0 opacity-10 star-bg"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 cosmic-text">
          What Success Looks Like
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Counter end={1} suffix="B+" />
            <p className="mt-4 text-gray-600">lives positively transformed</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-cosmic-gradient flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 12 15c-2.795 0-5.3-1.267-6.955-3.25m15.686 0A8.959 8.959 0 0 1 12 15c-2.795 0-5.3-1.267-6.955-3.25m15.686 0l.315 1.691A9 9 0 0 0 18.064 3.965l-.318 1.692a7.59 7.59 0 0 1-8.293 5.09l-1.791-.341m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918l-.368 1.967a9 9 0 0 0 18.212 1.967l-.369-1.967Z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-600">Earth becomes a beacon of peace and wisdom</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-cosmic-gradient flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-600">Humanity steps into its interstellar future</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
