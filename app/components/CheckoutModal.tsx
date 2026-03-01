"use client";
import { useState } from "react";

// ── Web3 Demo Constants ────────────────────────────────────────────────────────
const txId = "RCXEFO2DTVJFUHUEOSIDQE3RIHSOC7Y2Z2GBIHOLIZK6YEWGZL7DIE4CGQ";
const receiverId = "HIY32MNZC3TQLPNRLSV5VXDN2UFTYRSIHBYMM5BXI2XIWETLC3RUZWURS4";
// ──────────────────────────────────────────────────────────────────────────────

export default function CheckoutModal({ item, onClose }: { item: any, onClose: () => void }) {
  const [step, setStep] = useState(1);

  const handleCheckout = () => {
    setStep(2);
    setTimeout(() => setStep(3), 2000); // Simulate blockchain confirmation
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#0b0b0b] border border-green-500/30 rounded-2xl w-full max-w-2xl overflow-hidden shadow-[0_0_40px_rgba(74,222,128,0.1)] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <h3 className="text-xl font-black text-white uppercase tracking-wide">Secure Escrow</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-white font-bold text-xl">&times;</button>
        </div>
        <div className="p-6">

          {/* ── STEP 1: Confirm ─────────────────────────────────────────── */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center bg-slate-900 p-4 rounded-lg border border-slate-800">
                <span className="text-white font-medium">{item.name}</span>
                <span className="text-green-400 font-bold">{item.price}</span>
              </div>

              {/* Escrow contract address — truncated receiverId */}
              <div className="flex flex-col gap-1 bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                  Escrow Smart Contract
                </span>
                <span className="font-mono text-xs text-green-400 tracking-wide">
                  {receiverId.slice(0, 6)}...{receiverId.slice(-3)}
                </span>
              </div>

              <button onClick={handleCheckout} className="mt-6 w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl transition-all">
                Sign & Lock Funds in Escrow
              </button>
            </div>
          )}

          {/* ── STEP 2: Confirming ──────────────────────────────────────── */}
          {step === 2 && (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <span className="w-12 h-12 rounded-full border-4 border-slate-800 border-t-green-500 animate-spin"></span>
              <p className="text-slate-400 font-mono text-sm animate-pulse">Awaiting Algorand Network Finality...</p>
            </div>
          )}

          {/* ── STEP 3: Success + Live On-Chain Receipt ─────────────────── */}
          {step === 3 && (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-3xl border border-green-500/50">✓</div>
              <h4 className="text-2xl font-black text-white uppercase mt-2">Funds Locked in Smart Contract</h4>

              {/* ── Live On-Chain Receipt ── */}
              <div className="w-full mt-2 bg-slate-900 border border-green-500/20 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(74,222,128,0.05)]">
                {/* Receipt header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-black/40">
                  <span className="font-mono text-xs text-green-500 uppercase tracking-[0.2em]">◈ Live On-Chain Receipt</span>
                  <span className="font-mono text-xs text-slate-600 uppercase tracking-widest">Algorand Testnet</span>
                </div>

                {/* Receipt rows */}
                <div className="flex flex-col divide-y divide-slate-800/60">
                  {/* Destination */}
                  <div className="px-4 py-3 flex flex-col gap-1 text-left">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Destination</span>
                    <span className="font-mono text-xs text-slate-300 break-all leading-relaxed">{receiverId}</span>
                  </div>

                  {/* Transaction Hash */}
                  <div className="px-4 py-3 flex flex-col gap-1 text-left">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Transaction Hash</span>
                    <span className="font-mono text-xs text-green-400 break-all leading-relaxed">{txId}</span>
                  </div>
                </div>

                {/* Explorer link button */}
                <div className="px-4 py-3 border-t border-slate-800 bg-black/20">
                  <a
                    href={`https://lora.algokit.io/testnet/transaction/${txId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-500/60 text-green-400 font-mono text-xs uppercase tracking-widest py-2.5 rounded-lg transition-all duration-200"
                  >
                    Verify on Lora Explorer
                    <span className="text-base leading-none">↗</span>
                  </a>
                </div>
              </div>

              {/* ── Embedded Lora Explorer ── */}
              <div className="w-full mt-2 rounded-xl overflow-hidden border border-green-500/20 shadow-[0_0_20px_rgba(74,222,128,0.05)]">
                {/* iframe header bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-black border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-[10px] text-green-500 uppercase tracking-[0.2em]">Live · Lora Explorer</span>
                  </div>
                  <a
                    href={`https://lora.algokit.io/testnet/transaction/${txId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-slate-500 hover:text-green-400 uppercase tracking-widest transition-colors flex items-center gap-1"
                  >
                    Open Full Page <span>↗</span>
                  </a>
                </div>
                {/* iframe embed */}
                <iframe
                  src={`https://lora.algokit.io/testnet/transaction/${txId}`}
                  className="w-full h-64 bg-slate-950"
                  style={{ border: "none", colorScheme: "dark" }}
                  title="Lora Algorand Explorer — Transaction Proof"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>

              <button onClick={() => { onClose(); }} className="mt-4 w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl transition-all">
                Return to Dashboard
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}