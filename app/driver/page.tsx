"use client";
import { useState, useEffect } from "react";

export default function DriverApp() {
  const [status, setStatus] = useState("searching"); // states: searching, ping, accepted

  // Simulate a new order coming in after 5 seconds
  useEffect(() => {
    if (status === "searching") {
      const timer = setTimeout(() => {
        setStatus("ping");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="bg-[#0b0b0b] min-h-screen text-slate-200 font-sans p-6 flex flex-col">
      {/* Mobile Header */}
      <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6 mt-4">
        <div>
          <h1 className="text-xl font-black text-white uppercase tracking-wider">Campus Courier</h1>
          <p className="text-green-400 font-mono text-xs uppercase tracking-widest mt-1">Network: Active</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center text-green-400 font-bold">
          AR
        </div>
      </div>

      {/* STATE 1: Searching for Jobs */}
      {status === "searching" && (
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
          <div className="relative flex items-center justify-center w-32 h-32">
            <div className="absolute inset-0 border-4 border-green-500/20 rounded-full animate-ping"></div>
            <div className="absolute inset-2 border-4 border-green-500/40 rounded-full animate-pulse"></div>
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(74,222,128,0.4)]">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-black text-white uppercase">Scanning DTU...</h2>
            <p className="text-slate-400 mt-2">Looking for active drop requests nearby.</p>
          </div>
        </div>
      )}

      {/* STATE 2: Job Incoming */}
      {status === "ping" && (
        <div className="flex-1 flex flex-col justify-center animate-in slide-in-from-bottom-10 fade-in duration-500">
          <div className="bg-slate-900 border-2 border-green-500 rounded-2xl p-6 shadow-[0_0_40px_rgba(74,222,128,0.2)]">
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-green-500 text-black text-xs font-black uppercase tracking-widest rounded animate-pulse">
                New Request
              </span>
              <span className="text-xl font-black text-green-400">+ 2.0 ALGO</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Late-Night Food Drop</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-500 mt-2"></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Pickup</p>
                  <p className="text-white font-medium">Mic Mac Canteen</p>
                </div>
              </div>
              <div className="w-0.5 h-6 bg-slate-800 ml-1 -my-2"></div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Dropoff</p>
                  <p className="text-white font-medium">CV Raman Hostel (Gate 2)</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setStatus("accepted")}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-black uppercase tracking-wider py-4 rounded-xl transition-all text-lg"
            >
              Accept Drop Contract
            </button>
          </div>
        </div>
      )}

      {/* STATE 3: Job Accepted */}
      {status === "accepted" && (
        <div className="flex-1 flex flex-col pt-8 animate-in zoom-in-95 duration-300">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-4xl border border-green-500/50 mx-auto mb-4">
              ✓
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-wide">Contract Secured</h2>
            <p className="text-slate-400 mt-2">Funds locked in escrow. Proceed to pickup.</p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Active Route</h4>
            <div className="bg-black rounded-lg p-4 border border-slate-800 text-center text-slate-500 font-mono text-sm">
              [ Map Navigation UI ]
            </div>
            <button 
              onClick={() => setStatus("searching")}
              className="mt-6 w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700"
            >
              Simulate Completion
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
