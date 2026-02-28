"use client";
import { useState } from "react";

export default function StudentVerification({ onVerified }: { onVerified: () => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setError("");

    // Simulate a quick network check for that high-tech feel
    setTimeout(() => {
      if (email.toLowerCase().endsWith("@dtu.ac.in")) {
        onVerified(); // Unlocks the marketplace
      } else {
        setError("Access denied. A valid @dtu.ac.in student email is required.");
        setIsChecking(false);
      }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#0b0b0b] border border-slate-800 rounded-xl shadow-[0_0_30px_rgba(74,222,128,0.05)]">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black uppercase tracking-wide text-white">
          Verify Enrollment
        </h2>
        <p className="text-slate-400 mt-2 text-sm font-medium">
          CampusChain is a zero-friction, gated ecosystem.
        </p>
      </div>

      <form onSubmit={handleVerify} className="w-full max-w-sm flex flex-col gap-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="rollnumber@dtu.ac.in"
            className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all font-mono text-sm"
            required
          />
        </div>
        
        {error && (
          <p className="text-red-400 text-xs font-mono bg-red-500/10 p-2 rounded border border-red-500/20">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isChecking}
          className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-lg transition-colors flex justify-center items-center"
        >
          {isChecking ? "Authenticating..." : "Enter Ecosystem"}
        </button>
      </form>
    </div>
  );
}

