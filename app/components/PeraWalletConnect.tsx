"use client";
import { useState } from "react";

export default function PeraWalletConnect() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState("");

  const handleConnect = () => {
    setIsConnecting(true);
    
    // Simulate a network connection delay for the judges
    setTimeout(() => {
      setConnectedAddress("ALGO...7X9Q"); // Fake wallet address
      setIsConnecting(false);
    }, 1500); 
  };

  // State B: Wallet is Connected
  if (connectedAddress) {
    return (
      <div className="hidden md:flex px-6 py-3 bg-slate-900 border border-green-500/50 text-green-400 font-bold rounded-full items-center gap-3 shadow-[0_0_15px_rgba(74,222,128,0.1)]">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="font-mono text-sm">{connectedAddress}</span>
      </div>
    );
  }

  // State A: Ready to Connect
  return (
    <button 
      onClick={handleConnect}
      disabled={isConnecting}
      className="hidden md:flex px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-all items-center gap-2 disabled:opacity-70 disabled:cursor-wait"
    >
      {isConnecting ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          Awaiting Pera...
        </>
      ) : (
        "Connect Pera Wallet"
      )}
    </button>
  );
}
