import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

// 4 Core Features
const cardData = [
    {
        color: '#060010',
        title: 'Location-Based Donation Targeting (SEA-LION)',
        description: 'SEA-LION performs real-time web search + multi-factor scoring (disaster risk, economy, community need) to rank the Top 5 areas needing electricity. User opens the donation map → sees AI-ranked urgent locations → taps any location to view “Why this area needs help” explanations.',
        label: 'Feature 1'
    },
    {
        color: '#060010',
        title: 'Automated Jariah Certificate',
        description: 'AI (Sea-Lion + image processing) generates a personalized, verifiable charity certificate and auto-calculates the user’s clean-energy impact. User enters donation amount → clicks Generate Certificate → receives a shareable digital certificate.',
        label: 'Feature 2'
    },
    {
        color: '#060010',
        title: 'AI Future Donation Prediction',
        description: 'AI analyses donor leaderboard + user behaviour to predict the optimal kWh range (min & max) needed to surpass the donor above them. User opens leaderboard → taps “Predict My Next Donation” → AI shows recommended donation to move up the ranks.',
        label: 'Feature 3'
    },
    {
        color: '#060010',
        title: 'AI Chatbot (RAG + Agentic Reasoning)',
        description: 'Retrieves verified Islamic finance rules, donation guidelines, and platform documents using RAG + reasoning agents + fallback LLM for accurate answers. User asks questions (text or voice) → chatbot retrieves facts + reasons → provides clear answers about donation steps, rules, or certificate help.',
        label: 'Feature 4'
    }
];

// Detect mobile
const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
};

// Global spotlight following mouse
const GlobalSpotlight = ({ spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, glowColor = DEFAULT_GLOW_COLOR }) => {
    const spotlightRef = useRef(null);

    useEffect(() => {
        const spotlight = document.createElement('div');
        spotlight.style.cssText = `
      position: fixed;
      width: ${spotlightRadius * 2}px;
      height: ${spotlightRadius * 2}px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle, rgba(${glowColor},0.3) 0%, transparent 70%);
      z-index: 200;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
        document.body.appendChild(spotlight);
        spotlightRef.current = spotlight;

        const handleMouseMove = e => {
            if (!spotlightRef.current) return;
            gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.05 });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            spotlightRef.current?.remove();
        };
    }, [spotlightRadius, glowColor]);

    return null;
};

// Magic Bento Component
const MagicBento = ({
    enableSpotlight = true,
    glowColor = DEFAULT_GLOW_COLOR,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS
}) => {
    const gridRef = useRef(null);
    const isMobile = useMobileDetection();

    // Split cards into 2x2 layout
    const topCards = cardData.slice(0, 2);
    const bottomCards = cardData.slice(2, 4);

    return (
        <section className="w-full py-20 bg-black flex flex-col items-center justify-center relative">
            {/* Section title */}
            <h2 className="text-white text-5xl font-bold mb-16 z-10 relative text-center">
                The Solution with Core Features
            </h2>

            {/* Spotlight */}
            {enableSpotlight && <GlobalSpotlight spotlightRadius={spotlightRadius} glowColor={glowColor} />}

            {/* Bento grid */}
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
                {/* Top row */}
                {topCards.map((card, idx) => (
                    <div
                        key={idx}
                        className="magic-bento-card bg-[#060010] p-6 rounded-2xl border border-[#7df9ff] hover:shadow-[0_0_30px_rgba(132,0,255,0.5)] transition-all duration-300"
                    >
                        <div className="magic-bento-card__label text-cyan-400 font-bold mb-2">{card.label}</div>
                        <h3 className="magic-bento-card__title text-white text-xl font-semibold mb-2">{card.title}</h3>
                        <p className="magic-bento-card__description text-gray-200 text-sm">{card.description}</p>
                    </div>
                ))}

                {/* Bottom row */}
                {bottomCards.map((card, idx) => (
                    <div
                        key={idx}
                        className="magic-bento-card bg-[#060010] p-6 rounded-2xl border border-[#7df9ff] hover:shadow-[0_0_30px_rgba(132,0,255,0.5)] transition-all duration-300"
                    >
                        <div className="magic-bento-card__label text-cyan-400 font-bold mb-2">{card.label}</div>
                        <h3 className="magic-bento-card__title text-white text-xl font-semibold mb-2">{card.title}</h3>
                        <p className="magic-bento-card__description text-gray-200 text-sm">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MagicBento;
