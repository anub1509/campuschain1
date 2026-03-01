"use client";

export default function UserDashboard() {
  const storeTransactions = [
    { id: "TX992", vendor: "Mic Mac Canteen", item: "Lunch Combo", amount: "3.5 ALGO", date: "Today, 1:30 PM", status: "Completed" },
    { id: "TX991", vendor: "DTU Print Shop", item: "Project Report", amount: "0.5 ALGO", date: "Yesterday", status: "Completed" },
    { id: "TX990", vendor: "Nescafe Kiosk", item: "Cold Coffee", amount: "1.2 ALGO", date: "Yesterday", status: "Completed" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 space-y-8 animate-in fade-in duration-500">
      
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Ecosystem Dashboard</h2>
          <p className="text-slate-400 mt-1 font-medium">Manage DTU store expenditures and track active escrow contracts.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500 uppercase tracking-widest">Total Spent This Week</p>
          <p className="text-2xl font-black text-green-400">25.2 ALGO</p>
        </div>
      </div>

      {/* ACTIVE ORDER TRACKER */}
      <div className="bg-[#0b0b0b] border border-green-500/30 rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-green-500 animate-pulse"></div>
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold uppercase tracking-widest rounded-full mb-3 inline-block">
              Active Escrow
            </span>
            <h3 className="text-xl font-bold text-white">Used Aerodynamics Textbook</h3>
            <p className="text-slate-400 text-sm font-mono mt-1">Contract: 0x8F2...9A1B</p>
          </div>
          <span className="text-xl font-black text-white">15.001 ALGO</span>
        </div>

        {/* PROGRESS BAR */}
        <div className="relative pt-4">
          <div className="flex justify-between text-xs font-bold uppercase text-slate-500 mb-2">
            <span className="text-green-400">Funds Locked</span>
            <span className="text-green-400">Meetup Set</span>
            <span>Completed</span>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-800">
            <div style={{ width: "66%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 relative">
              <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-r from-transparent to-white/30 animate-[pulse_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
          <p className="text-sm text-slate-400">Status: <span className="text-white font-medium">Awaiting delivery confirmation at OAT.</span></p>
        </div>
      </div>

      {/* DTU STORES MANAGEMENT LEDGER */}
      <div className="bg-[#0b0b0b] border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
          Campus Store Expenditures
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="text-xs uppercase bg-slate-900/50 text-slate-500 border-b border-slate-800">
              <tr>
                <th className="px-4 py-3 font-medium">TxID</th>
                <th className="px-4 py-3 font-medium">Vendor</th>
                <th className="px-4 py-3 font-medium">Item</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {storeTransactions.map((tx, idx) => (
                <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-900/20 transition-colors">
                  <td className="px-4 py-4 font-mono text-xs">{tx.id}</td>
                  <td className="px-4 py-4 text-white font-medium">{tx.vendor}</td>
                  <td className="px-4 py-4">{tx.item}</td>
                  <td className="px-4 py-4">{tx.date}</td>
                  <td className="px-4 py-4 text-right font-bold text-white">{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
