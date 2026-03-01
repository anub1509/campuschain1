"use client";
import { useRef, useState } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";

// Your Components
import Navbar from "./components/Navbar";
import TransformerScrollCanvas from "./components/TransformerScrollCanvas";
import StudentVerification from "./components/StudentVerification";
import CampusServices from "./components/CampusServices";
import PeraWalletConnect from "./components/PeraWalletConnect";
import CheckoutModal from "./components/CheckoutModal";
import UserDashboard from "./components/UserDashboard";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // States
  const [isVerified, setIsVerified] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null); 
  const [activeTab, setActiveTab] = useState("market"); // Controls Dashboard vs Marketplace
  
  // Cinematic Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Your Marketplace Items
  const items = [
    { id: 1, name: "Used Aerodynamics Textbook", price: "15 ALGO", condition: "Good" },
    { id: 2, name: "Defianz Custom CAD Mouse", price: "25 ALGO", condition: "Mint" },
    { id: 3, name: "Engineering Graphics Drafter", price: "10 ALGO", condition: "Fair" },
    { id: 4, name: "Node.js Crash Course Notes", price: "5 ALGO", condition: "Mint" }
  ];

  return (
    <main className="bg-[#0b0b0b] min-h-screen text-slate-200 font-sans selection:bg-green-500/30 relative">
      <Navbar />
      
      {/* =========================================
          PART 1: THE CINEMATIC SCROLL
          ========================================= */}
      <section ref={containerRef} className="h-[500vh] relative bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
          <TransformerScrollCanvas 
            scrollYProgress={scrollYProgress} 
            totalFrames={120} 
            imageFolderPath="/images/transformer-sequence" 
            extension="jpg" 
          />
          <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-12 mix-blend-difference">
            <div className="text-left mt-16 md:mt-0">
              <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
                CampusChain
              </h1>
              <p className="text-green-400 font-mono text-xs md:text-sm mt-2 tracking-widest uppercase">
                System: Evolution Sequence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PART 2: THE GATED DTU ECOSYSTEM
          ========================================= */}
      <div className="relative z-20 bg-slate-950 border-t border-green-500/20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] min-h-screen">
        <AnimatePresence mode="wait">
          
          {/* THE LOCK SCREEN */}
          {!isVerified ? (
            <motion.div 
              key="verification-gate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center py-32 px-4"
            >
              <div className="max-w-md w-full relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-50 pointer-events-none"></div>
                <div className="relative z-10">
                  <StudentVerification onVerified={() => setIsVerified(true)} />
                </div>
              </div>
            </motion.div>
          ) : (
            
            /* THE UNLOCKED DASHBOARD */
            <motion.div
              key="marketplace-dashboard"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              
              {/* BRANDING HEADER */}
              <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-green-400 font-black">
                    AR
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-wider">Welcome, ANUBHAV RAJPUT</h2>
                    <p className="text-slate-400 font-mono text-xs uppercase tracking-widest mt-1">
                      Authenticated: Team Eonyx | DTU Defianz Tech Team
                    </p>
                  </div>
                </div>
              </div>

              {/* TAB SWITCHER */}
              <div className="max-w-7xl mx-auto px-8 mb-4 border-b border-slate-800 flex gap-8">
                <button 
                  onClick={() => setActiveTab("market")}
                  className={`pb-4 font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === "market" ? "text-green-400 border-green-400" : "text-slate-500 border-transparent hover:text-white"}`}
                >
                  Marketplace
                </button>
                <button 
                  onClick={() => setActiveTab("dashboard")}
                  className={`pb-4 font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === "dashboard" ? "text-green-400 border-green-400" : "text-slate-500 border-transparent hover:text-white"}`}
                >
                  My Dashboard
                </button>
              </div>

              {/* DYNAMIC CONTENT (MARKET VS DASHBOARD) */}
              {activeTab === "market" ? (
                <>
                  <CampusServices />
                  <div className="max-w-7xl mx-auto px-8 py-16">
                    <div className="flex justify-between items-end mb-12">
                      <div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Latest Drops</h2>
                        <p className="text-slate-400 mt-2 font-medium">Decentralized gear exchange.</p>
                      </div>
                      <PeraWalletConnect />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {items.map((item) => (
                        <div 
                          key={item.id} 
                          onClick={() => setSelectedItem(item)} 
                          className="group bg-[#0b0b0b] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)] transition-all duration-300 cursor-pointer"
                        >
                          <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center text-slate-600 border border-slate-800 group-hover:scale-[1.02] transition-transform overflow-hidden relative">
                            <span className="font-mono text-xs uppercase tracking-widest">Image Space</span>
                          </div>
                          <div className="flex-1 mt-2">
                            <h3 className="font-bold text-lg leading-tight text-white">{item.name}</h3>
                            <div className="flex justify-between items-center mt-4">
                              <span className="text-green-400 font-black tracking-wide">{item.price}</span>
                              <span className="text-xs px-2 py-1 bg-slate-900 rounded border border-slate-700 text-slate-300 font-medium uppercase">
                                {item.condition}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <UserDashboard />
              )}

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================
          PART 3: THE ESCROW CHECKOUT MODAL
          ========================================= */}
      {selectedItem && (
        <CheckoutModal item={selectedItem} onClose={() => {
          setSelectedItem(null);
          setActiveTab("dashboard"); // Automatically flips to dashboard after checkout!
        }} />
      )}

    </main>
  );
}
