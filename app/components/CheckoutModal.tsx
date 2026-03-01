"use client";
import { useState } from "react";

export default function CheckoutModal({ item, onClose }: { item: any, onClose: () => void }) {
  const [step, setStep] = useState(1);

  const handleCheckout = () => {
    setStep(2);
    setTimeout(() => setStep(3), 2000); // Simulate blockchain confirmation
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#0b0b0b] border border-green-500/30 rounded-2xl w-full max-w-md overflow-hidden shadow-[0_0_40px_rgba(74,222,128,0.1)]">
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <h3 className="text-xl font-black text-white uppercase tracking-wide">Secure Escrow</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-white font-bold text-xl">&times;</button>
        </div>
        <div className="p-6">
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center bg-slate-900 p-4 rounded-lg border border-slate-800">
                <span className="text-white font-medium">{item.name}</span>
                <span className="text-green-400 font-bold">{item.price}</span>
              </div>
              <button onClick={handleCheckout} className="mt-6 w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl transition-all">
                Sign & Lock Funds in Escrow
              </button>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <span className="w-12 h-12 rounded-full border-4 border-slate-800 border-t-green-500 animate-spin"></span>
              <p className="text-slate-400 font-mono text-sm animate-pulse">Awaiting Algorand Network Finality...</p>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-3xl border border-green-500/50">✓</div>
              <h4 className="text-2xl font-black text-white uppercase mt-2">Funds Locked in Smart Contract</h4>
              
              {/* THE REAL WEB3 PROOF */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 w-full mt-2">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Algorand TestNet Receipt</p>
                {/* REPLACE THIS URL WITH YOUR ACTUAL TX ID FROM STEP 1 */}
                <a 
                  href="https://testnet.explorer.perawallet.app/tx/YOUR_REAL_TXID_GOES_HERE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 font-mono text-xs break-all hover:text-blue-300 transition-colors flex items-center justify-center gap-2"
                >
                  View on Pera Explorer <span className="text-lg">↗</span>
                </a>
              </div>

              <button onClick={() => {
                onClose();
              }} className="mt-4 w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl transition-all">
                Return to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
