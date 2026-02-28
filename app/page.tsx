"use client";
import { useRef, useState } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import TransformerScrollCanvas from "./components/TransformerScrollCanvas";
import StudentVerification from "./components/StudentVerification";
import CampusServices from "./components/CampusServices";

// 2. IMPORT YOUR ORIGINAL PROTOTYPE COMPONENTS HERE
// import VelocityVibe from "./components/VelocityVibe";
// import OriginalMarketplace from "./components/OriginalMarketplace";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVerified, setIsVerified] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#0b0b0b] min-h-screen text-slate-200">
      <Navbar />
      
      {/* =========================================
          PART 1: THE CINEMATIC SCROLL SEQUENCE
          ========================================= */}
      <section ref={containerRef} className="h-[500vh] relative bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
          
          {/* THIS IS WHAT PLAYS YOUR VEO VIDEO! */}
          <TransformerScrollCanvas 
            scrollYProgress={scrollYProgress} 
            totalFrames={120} // Make sure this matches your image count!
            imageFolderPath="/images/transformer-sequence" 
            extension="jpg" 
          />

          <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-12 mix-blend-difference">
            <div className="text-left mt-16 md:mt-0">
              <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
                CampusChain
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PART 2: THE GATED ECOSYSTEM
          ========================================= */}
      <div className="relative z-20 bg-slate-950 min-h-screen">
        <AnimatePresence mode="wait">
          
          {!isVerified ? (
            /* THE LOGIN SCREEN */
            <motion.div>
              <StudentVerification onVerified={() => setIsVerified(true)} />
            </motion.div>
          ) : (
            
            /* =========================================
               PART 3: THE MERGED DASHBOARD (VERIFIED ONLY)
               ========================================= */
            <motion.div>
              
              {/* A. THE NEW CAMPUSCHAIN DASHBOARD & SERVICES */}
              <CampusServices />
              
              {/* B. PASTE YOUR ORIGINAL PROTOTYPE UI HERE */}
              <div className="max-w-7xl mx-auto px-8 py-12 border-t border-slate-800 mt-12">
                 <h2 className="text-3xl font-black text-white mb-8">Team Eonyx Original Prototype</h2>
                 
                 {/* -> PASTE YOUR ORIGINAL HTML/COMPONENTS HERE <- */}
                 {/* <VelocityVibe /> */}
                 {/* <YourOldGrid /> */}
                 
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
