import React from 'react'
import Particles from './Particles'
import CircularGallery from './CircularGallery'
import ElectricBorder from './ElectricBorder'
import TargetCursor from './TargetCursor';
import Galaxy from './Galaxy';
import ShinyText from './ShinyText';
import MagicBento from './MagicBento'
import LightRays from './LightRays';
import SystemDiagram from './assets/system-architecture.png';

const App = () => {
  return (
    <>
      {/* SECTION 1 */}
      <div className="w-full h-screen relative bg-black flex justify-center items-center">
        <div className="w-full h-full relative">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="absolute flex flex-col justify-center items-center space-y-3">
          <h1 className="glow-text text-8xl mb-10 relative z-10">SolaRaid</h1>
          <p className="text-white text-center text-6ml relative z-10">
            Presented by Triforce Tech || Aligned with SDG7.1 & 7.2
          </p>

          {/* Group Members Section */}
          <ShinyText
            text="Group Members :"
            disabled={false}
            speed={3}
            className="text-white text-2xl text-center relative z-10 mt-4"
          />
          <ShinyText
            text="Lim Jia Qian , Lim Xin Ying"
            disabled={false}
            speed={3}
            className="text-white text-1xl text-center relative z-10"
          />
          <ShinyText
            text="Ooi Jia Hui , Beh Jia Xin"
            disabled={false}
            speed={3}
            className="text-white text-1xl text-center relative z-10"
          />
          <ShinyText
            text="Felicia Sia Xin Rou"
            disabled={false}
            speed={3}
            className="text-white text-1xl text-center relative z-10"
          />
        </div>
      </div>
      {/* SECTION 2 */}
      <section className="w-full h-screen flex justify-center items-center bg-black">
        <div className="w-full h-full relative">
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="w-full h-screen flex justify-center items-center bg-black px-6">
        <div className="max-w-4xl w-full">
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16, padding: 24 }}
          >
            <div className="text-center">
              <h2 className="text-white text-5xl font-bold mb-6">
                Affordable and Clean Energy
              </h2>

              <p className="text-white text-xl opacity-90 leading-relaxed">
                SolarAid is a digital platform that enables Malaysians to donate their
                unused electricity, support Green Waqf initiatives, and bring clean,
                dependable energy to those who need it most.
              </p>
            </div>
          </ElectricBorder>
        </div>
      </section>

      {/* SECTION 4 — Scope Statement */}
      <section className="w-full h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Galaxy Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={240}
          />
        </div>

        {/* TargetCursor effect */}
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />

        {/* Title */}
        <h2 className="text-white text-5xl font-bold mb-12 text-center relative z-10">
          Scope Statement
        </h2>

        {/* Two Boxes */}
        <div className="flex flex-col md:flex-row gap-10 relative z-10">

          {/* Box 1 */}
          <div
            className="cursor-target bg-[#111] border border-[#444] text-white p-8 rounded-2xl 
                 text-xl max-w-md text-center shadow-lg hover:shadow-cyan-400/60 
                 transition-all duration-300"
          >
            <strong className="text-2xl block mb-3">Target Users</strong>
            Socially Conscious Citizens & Jariah-Conscious Muslim Malaysians
          </div>

          {/* Box 2 */}
          <div
            className="cursor-target bg-[#111] border border-[#444] text-white p-8 rounded-2xl 
                 text-xl max-w-md text-center shadow-lg hover:shadow-cyan-400/60 
                 transition-all duration-300"
          >
            <strong className="text-2xl block mb-3">Target Business Partner</strong>
            TNB
          </div>

        </div>
      </section>
      {/* SECTION 5 — Problem Statement with ShinyText and Galaxy Background */}
      <section className="w-full h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Galaxy Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={180}
          />
        </div>

        {/* Title */}
        <h2 className="text-white text-5xl font-bold mb-12 text-center relative z-10">
          Problem Statement
        </h2>

        {/* ShinyText */}
        <div className="max-w-4xl text-center text-xl text-white leading-relaxed relative z-10">
          <ShinyText
            text="Many Malaysian households generate surplus solar energy that often goes unused, while low-income communities still struggle with expensive electricity. There is currently no trusted platform for individuals to donate their surplus renewable energy. This creates a gap where clean energy is wasted, social welfare opportunities are lost, and progress toward SDG 7 remains slow. A smart, automated AI system is needed to detect surplus solar generation, match it with communities facing energy shortages, and transparently verify donation to maximise social and environmental impact."
            disabled={false}
            speed={3}
            className='custom-class'
          />
        </div>
      </section>
      {/* SECTION 6 — The Solution with Core Features */}
      <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">

        {/* MagicBento Component */}
        <div className="w-full max-w-6xl flex justify-center relative z-10">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
      </section>
      {/* SECTION 7 — System Architecture */}
      <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* LightRays Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        {/* Title */}
        <h2 className="text-white text-5xl font-bold mb-6 relative z-10 text-center">
          System Architecture
        </h2>

        {/* Image */}
        <img
          src={SystemDiagram} // use the imported variable
          alt="System Architecture"
          className="max-w-4xl w-full h-auto object-contain relative z-10"
        />
      </section>
    </>
  )
}

export default App
