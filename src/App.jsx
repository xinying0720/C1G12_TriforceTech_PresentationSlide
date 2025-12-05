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
import GlassIcons from './GlassIcons'
import { FiTrendingUp, FiUsers, FiSun } from "react-icons/fi";
import AnimatedList from './AnimatedList'
import PixelTransition from './PixelTransition';
import GreenWaqfImg from './assets/green_waqf.jpg';
import ContinuousCharityImg from './assets/continuous_charity.jpg';
import ZakatEndorsementImg from './assets/zakat_endorsement.jpg';
import CurvedLoop from './CurvedLoop';

const items = [
  { color: 'blue', label: '70%+Rising Demand for Sustainable Living' },
  { color: 'purple', label: '22.4 million Muslim Population in Malaysia' },
  { color: 'orange', label: 'Government Push for Renewable Energy which targets 31% RE by 2035' },
];
const SponsorItem = ({ img, name }) => (
  <div className="flex items-center">
    <img src={img} className="w-12 h-12 mr-3" />
    <span className="text-black text-3xl">{name}</span>
  </div>
);
const App = () => {
  return (
    <>
      {/* SECTION 1 — OurWebsite*/}
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
          <h1 className="glow-text text-8xl mb-10 relative z-10">SolarAid</h1>
          <p className="text-white text-center text-6ml relative z-10">
            Presented by Triforce Tech || Aligned with SDG7.1 & 7.2
          </p>


        </div>
      </div>


      {/* SECTION 2 — Group Members */}
      <section className="w-full h-screen flex flex-col justify-center items-center bg-black">

        {/* Title */}
        <h2 className="text-white text-5xl font-bold mb-3 text-center">
          Group Members
        </h2>

        {/* Circular Gallery */}
        <div className="w-full h-full relative flex justify-center items-center">
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </section>


      {/* SECTION 3 — AI video */}
      <section className="w-full h-screen bg-black flex justify-center items-center relative overflow-hidden">
        <video
          src="/C1G12_TriforceTech_StoryVideo.mp4"
          autoPlay
          loop
          controls
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>


      {/* SECTION 4 — Problem Statement */}
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
            speed={5}
            className='custom-class'
          />
        </div>
      </section>


      {/* SECTION 5 - SolarAid Intro */}
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

              {/* Title */}
              <h2 className="text-white text-5xl font-bold mb-6">
                SDG7 : Affordable and Clean Energy
              </h2>

              {/* Main Paragraph */}
              <p className="text-white text-xl opacity-90 leading-relaxed mb-8">
                SolarAid is a digital platform that enables Malaysians to donate their
                unused electricity, support Green Waqf initiatives, and bring clean,
                dependable energy to those who need it most.
              </p>

              {/* SDG7.1 Row */}
              <p className="text-white text-lg opacity-90 leading-relaxed mb-4">
                <strong className="text-cyan-300">SDG7.1:</strong>
                &nbsp;“By 2030, ensure universal access to affordable, reliable and modern energy services.”
              </p>

              {/* SDG7.2 Row */}
              <p className="text-white text-lg opacity-90 leading-relaxed">
                <strong className="text-cyan-300">SDG7.2:</strong>
                &nbsp;“By 2030, substantially increase the share of renewable energy in the global energy mix.”
              </p>

            </div>
          </ElectricBorder>
        </div>
      </section>


      {/* SECTION 6 — Scope Statement */}
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
            <strong className="text-2xl block mb-7">Target Business Partner</strong>
            TNB
          </div>

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


      {/* SECTION 8 — The Solution with Core Features */}
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
      

      {/* SECTION 9 — Market Analysis */}
      <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <h2 className="text-white text-5xl font-bold mb-10 text-center">
          Market Analysis
        </h2>

        <div className="w-full max-w-6xl">
          <GlassIcons items={items} />
        </div>
      </section>


      {/* SECTION 10 — Differentiate with Market Model Nowadays */}
      <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Title */}
        <h2 className="text-white text-5xl font-bold mb-10 text-center">
          Differentiate with Market Model Nowadays
        </h2>

        {/* Animated List */}
        <div className="w-full max-w-4xl flex justify-center">
          <AnimatedList
            items={[
              "SolarAid introduces a brand-new asset class: “Solar Energy as Green Waqf”",
              "No existing platform in Malaysia treats solar electricity as mal (wealth)",
              "Helping community in needs in term of electricity",
              "Generate energy-based Jariah donation certificate at the same time",
              "Uses AI to prioritize communities for continuous charity (Jariah) impact",
              "Offers leaderboard & donation prediction",
              "Uses AI as a Wakil (trusted Islamic agent)",
              "This gives Solaraid a first-mover advantage"
            ]}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={true}
            className="mx-auto"
          />
        </div>
      </section>


      {/* SECTION 11 — Environment & Society impact and Potential Improvements */}
      <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Title */}
        <h2 className="text-white text-5xl font-bold mb-10 text-center">
          <span className="block">Environment & Society impact and</span>
          <span className="block">Potential Improvements</span>
        </h2>

        {/* PixelTransition Boxes */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-center">

          <PixelTransition
            firstContent={
              <img
                src={GreenWaqfImg}  // imported at top
                alt="Promotes Renewable Energy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111",
                  color: "#fff",
                  textAlign: "center",
                  padding: 20,
                }}
              >
                <p>
                  Promotes Renewable Energy (Green Waqf)<br /><br />
                  Reduces Carbon Footprint<br /><br />
                  Sustainable Energy Access (SDG 7.1 & 7.2)
                </p>
              </div>
            }
            gridSize={12}
            pixelColor='#ffffff'
            once={false}
            animationStepDuration={0.4}
            className="custom-pixel-card w-full md:w-1/3 h-64"
          />

          <PixelTransition
            firstContent={
              <img
                src={ContinuousCharityImg}
                alt="Encourages Continuous Charity"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111",
                  color: "#fff",
                  textAlign: "center",
                  padding: 20,
                }}
              >
                <p>
                  Encourages Continuous Charity (Jariah)<br /><br />
                  Supports Vulnerable Communities<br /><br />
                  Fosters Community Participation
                </p>
              </div>
            }
            gridSize={12}
            pixelColor='#ffffff'
            once={false}
            animationStepDuration={0.4}
            className="custom-pixel-card w-full md:w-1/3 h-64"
          />

          <PixelTransition
            firstContent={
              <img
                src={ZakatEndorsementImg}
                alt="Secure Zakat Authority Endorsement"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111",
                  color: "#fff",
                  textAlign: "center",
                  padding: 20,
                }}
              >
                <p>
                  Secure Zakat Authority Endorsement to gain direct financial returns<br /><br />
                  Form strategic partnerships to improve trustworthy
                </p>
              </div>
            }
            gridSize={14}
            pixelColor='#ffffff'
            once={false}
            animationStepDuration={0.4}
            className="custom-pixel-card w-full md:w-1/3 h-64"
          />

        </div>
      </section>


      {/* SECTION 12 — Conclusion */}
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
        <h2 className="text-white text-5xl font-bold mb-12 text-center relative z-10">
          Conclusion
        </h2>

        {/* Conclusion Text */}
        <div className="max-w-4xl text-center text-xl text-white leading-relaxed relative z-10">
          SolarAid turns surplus solar energy into Green Waqf, letting users donate electricity to communities in need while sharing their Jariah Certificate on social media.<br /><br />
          With AI-powered surplus detection, impact tracking, and automated certificates, the platform makes giving easy, transparent, and meaningful.<br /><br />
          It doesn’t just deliver energy. It sends light, empowering communities, supporting SDG7, and redefining charitable giving in Malaysia.
        </div>
      </section>


      {/* SECTION 13 — CurvedLoop Outro */}
      <section className="w-full min-h-[40vh] bg-gradient-to-b from-black to-white/0 flex flex-col justify-center items-center py-16 text-center space-y-14 relative overflow-hidden">
        <CurvedLoop
          marqueeText="Thank You for Watching ✦ SolarAid ✦"
          speed={2}
          curveAmount={400}
          direction="left"
          interactive={true}
          className="text-white text-7xl md:text-9xl font-bold"
        />
      </section>

      {/* SECTION 14 — Powered By */}
      <section className="powered-section w-full min-h-[40vh] flex flex-col justify-center items-center py-16 text-center space-y-14 relative overflow-hidden">

          <h3 className="text-black text-4xl font-bold mb-6">Powered By</h3>

          {/* ROW 1 */}
          <div className="w-full overflow-hidden">
              <div className="marquee-right flex whitespace-nowrap gap-60">

                  {/* GROUP 1 */}
                  <div className="flex items-center gap-70 min-w-max px-10">
                      <SponsorItem img="/sponsors/sealion.png" name="Sea-Lion AI" />
                      <SponsorItem img="/sponsors/cloudflare.png" name="Cloudflare" />
                      <SponsorItem img="/sponsors/gentech.png" name="GenTech AI" />
                  </div>

                  {/* GROUP 2 */}
                  <div className="flex items-center gap-70 min-w-max px-10">
                      <SponsorItem img="/sponsors/sealion.png" name="Sea-Lion AI" />
                      <SponsorItem img="/sponsors/cloudflare.png" name="Cloudflare" />
                      <SponsorItem img="/sponsors/gentech.png" name="GenTech AI" />
                  </div>

              </div>
          </div>

          {/* ROW 2 */}
          <div className="w-full overflow-hidden">
              <div className="marquee-left flex whitespace-nowrap gap-10">

                  {/* GROUP 1 */}
                  <div className="flex items-center gap-20 min-w-max px-10">
                      <SponsorItem img="/sponsors/jamai.png" name="Jam AI" />
                      <SponsorItem img="/sponsors/assembly.png" name="AssemblyAI" />
                      <SponsorItem img="/sponsors/tavily.png" name="Tavily" />
                      <SponsorItem img="/sponsors/github.png" name="GitHub" />
                      <SponsorItem img="/sponsors/supabase.png" name="Supabase" />
                      <SponsorItem img="/sponsors/langchain.png" name="LangChain" />
                  </div>

                  {/* GROUP 2 */}
                  <div className="flex items-center gap-20 min-w-max px-10">
                      <SponsorItem img="/sponsors/jamai.png" name="Jam AI" />
                      <SponsorItem img="/sponsors/assembly.png" name="AssemblyAI" />
                      <SponsorItem img="/sponsors/tavily.png" name="Tavily" />
                      <SponsorItem img="/sponsors/github.png" name="GitHub" />
                      <SponsorItem img="/sponsors/supabase.png" name="Supabase" />
                      <SponsorItem img="/sponsors/langchain.png" name="LangChain" />
                  </div>

              </div>
          </div>

          <style>{`
              .marquee-right {
                  animation: marqueeRight 25s linear infinite;
              }
              @keyframes marqueeRight {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-50%); }
              }

              .marquee-left {
                  animation: marqueeLeft 25s linear infinite;
              }
              @keyframes marqueeLeft {
                  0% { transform: translateX(-50%); }
                  100% { transform: translateX(0%); }
              }
          `}</style>

      </section>

    </>
  )
}

export default App
