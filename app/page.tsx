"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import TransformerScrollCanvas from "./components/TransformerScrollCanvas";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Tracks the scroll progress for the cinematic hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mock data for your marketplace
  const items = [
    { id: 1, name: "Used Aerodynamics Textbook", price: "15 ALGO", condition: "Good" },
    { id: 2, name: "Defianz Custom CAD Mouse", price: "25 ALGO", condition: "Mint" },
    { id: 3, name: "Engineering Graphics Drafter", price: "10 ALGO", condition: "Fair" },
    { id: 4, name: "Node.js Crash Course Notes", price: "5 ALGO", condition: "Mint" }
  ];

  return (
    <main className="bg-[#0b0b0b] min-h-screen text-slate-200 font-sans selection:bg-green-500/30">
      <Navbar />
      
      {/* =========================================
          PART 1: THE CINEMATIC SCROLL SEQUENCE
          ========================================= */}
      <section ref={containerRef} className="h-[500vh] relative bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
          
          {/* THE FRAME ENGINE */}
          <TransformerScrollCanvas 
            scrollYProgress={scrollYProgress} 
            totalFrames={120} // <-- Double check this matches your folder!
            imageFolderPath="/images/transformer-sequence" 
            extension="jpg" 
          />

          {/* THE HUD (Heads Up Display) Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-12 mix-blend-difference">
            <div className="text-left mt-16 md:mt-0">
              <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
                CampusChain
              </h1>
              <p className="text-green-400 font-mono text-xs md:text-sm mt-2 tracking-widest uppercase">
                System: Evolution Sequence
              </p>
            </div>
            
            <div className="text-right pb-8 md:pb-12">
              <p className="text-slate-300 text-xs md:text-sm font-mono tracking-widest uppercase animate-pulse">
                Scroll to Initiate ↓
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PART 2: THE ORIGINAL MARKETPLACE MVP
          ========================================= */}
      <div className="relative z-20 bg-slate-950 border-t border-green-500/20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        
        {/* DTU STORES MANAGEMENT DASHBOARD */}
        <div className="border-b border-slate-800 bg-slate-900/50 py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-black uppercase tracking-wide text-white">DTU Store Management</h2>
              <span className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-bold border border-green-500/20">
                Admin Access
              </span>
            </div>
            
            <div className="bg-[#0b0b0b] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900 text-slate-400">
                  <tr>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Store Location</th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Inventory Status</th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Pending Escrows</th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-5 font-bold text-white">Mic Mac Hub (Main Campus)</td>
                    <td className="px-6 py-5 text-green-400 font-medium">Optimal (42 items)</td>
                    <td className="px-6 py-5 text-slate-300">12 Transactions</td>
                    <td className="px-6 py-5 text-right"><button className="text-green-400 hover:text-white font-bold transition-colors">Manage →</button></td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-5 font-bold text-white">Library Cafe Exchange</td>
                    <td className="px-6 py-5 text-yellow-400 font-medium">Low Stock (8 items)</td>
                    <td className="px-6 py-5 text-slate-300">3 Transactions</td>
                    <td className="px-6 py-5 text-right"><button className="text-green-400 hover:text-white font-bold transition-colors">Manage →</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* REGULAR MARKETPLACE GRID */}
        <div className="p-8 max-w-7xl mx-auto py-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Latest Drops</h2>
              <p className="text-slate-400 mt-2 font-medium">Decentralized gear exchange.</p>
            </div>
            <button className="hidden md:block px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-colors">
              Connect Pera Wallet
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.id} className="group bg-[#0b0b0b] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)] transition-all duration-300 cursor-pointer">
                {/* Image Placeholder */}
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

      </div>
    </main>
  );
}