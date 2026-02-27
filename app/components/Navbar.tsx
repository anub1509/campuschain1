"use client";
import { useState, useEffect } from "react";
import { PeraWalletConnect } from "@perawallet/connect";
import { Wallet, Search } from "lucide-react";

const peraWallet = new PeraWalletConnect();

export default function Navbar() {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);

  useEffect(() => {
    peraWallet.reconnectSession().then((accounts) => {
      if (accounts.length) {
        peraWallet.connector?.on("disconnect", handleDisconnect);
        setAccountAddress(accounts[0]);
      }
    }).catch(console.error);
  }, []);

  const handleConnect = async () => {
    try {
      const newAccounts = await peraWallet.connect();
      peraWallet.connector?.on("disconnect", handleDisconnect);
      setAccountAddress(newAccounts[0]);
    } catch (error) {
      console.log("Connection failed", error);
    }
  };

  const handleDisconnect = () => {
    peraWallet.disconnect();
    setAccountAddress(null);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-slate-900 text-white border-b border-slate-800">
      <div className="text-xl font-bold text-green-400">CampusChain</div>
      
      <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
        <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search for textbooks, CAD laptops..." 
          className="w-full pl-10 pr-4 py-2 bg-slate-800 rounded-lg focus:ring-2 focus:ring-green-400 outline-none text-sm"
        />
      </div>

      <button 
        onClick={accountAddress ? handleDisconnect : handleConnect}
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium text-slate-950 transition-colors"
      >
        <Wallet size={18} />
        <span>{accountAddress ? `${accountAddress.slice(0, 4)}...${accountAddress.slice(-4)}` : "Connect Wallet"}</span>
      </button>
    </nav>
  );
}