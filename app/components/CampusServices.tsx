"use client";

export default function CampusServices() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LATE-NIGHT DELIVERY CARD */}
        <div className="relative group overflow-hidden rounded-2xl bg-[#0b0b0b] border border-slate-800 p-8 hover:border-emerald-500/50 transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-emerald-500/20 transition-all"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg inline-block text-emerald-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest rounded-full animate-pulse">
                Live Network
              </span>
            </div>
            
            <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">P2P Late-Night Delivery</h3>
            <p className="text-slate-400 font-medium mb-8 max-w-sm">
              Secure, student-to-student drops for food and essentials anywhere on campus. Escrow protected.
            </p>
            
            <button className="bg-slate-900 hover:bg-emerald-500 hover:text-black text-white border border-slate-700 hover:border-emerald-500 font-bold py-3 px-6 rounded-lg transition-all w-full md:w-auto">
              Request a Drop →
            </button>
          </div>
        </div>

        {/* SKILL BARTER CARD */}
        <div className="relative group overflow-hidden rounded-2xl bg-[#0b0b0b] border border-slate-800 p-8 hover:border-blue-500/50 transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-blue-500/20 transition-all"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg inline-block text-blue-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-widest rounded-full">
                Tokenize Talent
              </span>
            </div>
            
            <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">Skill Barter System</h3>
            <p className="text-slate-400 font-medium mb-8 max-w-sm">
              Hire peers for CAD designs, React debugging, or tutoring. Pay securely in ALGO per hour.
            </p>
            
            <button className="bg-slate-900 hover:bg-blue-500 hover:text-black text-white border border-slate-700 hover:border-blue-500 font-bold py-3 px-6 rounded-lg transition-all w-full md:w-auto">
              Hire a Student →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
