"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Your Components (untouched)
import Navbar from "./components/Navbar";
import StudentVerification from "./components/StudentVerification";
import CampusServices from "./components/CampusServices";
import PeraWalletConnect from "./components/PeraWalletConnect";
import CheckoutModal from "./components/CheckoutModal";
import UserDashboard from "./components/UserDashboard";

// ─── Reusable scroll-reveal wrapper ───────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  // ── YOUR STATE LOGIC — DO NOT TOUCH ──────────────────────────────────────
  const [isVerified, setIsVerified] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("market");
  // ─────────────────────────────────────────────────────────────────────────

  const items = [
    { id: 1, name: "Used Aerodynamics Textbook", price: "15 ALGO", condition: "Good" },
    { id: 2, name: "Defianz Custom CAD Mouse", price: "25 ALGO", condition: "Mint" },
    { id: 3, name: "Engineering Graphics Drafter", price: "10 ALGO", condition: "Fair" },
    { id: 4, name: "Node.js Crash Course Notes", price: "5 ALGO", condition: "Mint" },
  ];

  return (
    <main className="bg-[#0b0b0b] min-h-screen text-slate-200 font-sans selection:bg-green-500/30 relative overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION — "Hi, CampusChain here"
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

        {/* Background grid lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-green-500/5 blur-[120px]" />
        </div>

        {/* Top eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-green-500 mb-8 border border-green-500/30 px-4 py-1.5 rounded-full"
        >
          ◈ Web3 Campus Marketplace · DTU
        </motion.p>

        {/* Main greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none"
        >
          <span className="text-white block">Hi,</span>
          <span
            className="block bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: "text" }}
          >
            CampusChain
          </span>
          <span className="text-slate-500 block text-3xl md:text-5xl mt-3 font-bold tracking-tight">
            here.
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 max-w-xl text-slate-400 text-base md:text-lg leading-relaxed"
        >
          Buy, sell, and trade campus gear on-chain. Escrow-secured transactions.
          Student-verified identities. Zero middlemen.
        </motion.p>

        {/* CTA pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <span className="px-5 py-2.5 bg-green-500 text-black text-sm font-black uppercase tracking-widest rounded-lg cursor-default">
            Algorand Powered
          </span>
          <span className="px-5 py-2.5 border border-slate-700 text-slate-300 text-sm font-bold uppercase tracking-widest rounded-lg cursor-default">
            Pera Wallet Ready
          </span>
          <span className="px-5 py-2.5 border border-slate-700 text-slate-300 text-sm font-bold uppercase tracking-widest rounded-lg cursor-default">
            DTU Verified
          </span>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10 bg-gradient-to-b from-green-500 to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATS + MARQUEE BRIDGE SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-black py-24 overflow-hidden border-y border-slate-800/50">

        {/* Background noise texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />

        {/* Stats row */}
        <div className="max-w-7xl mx-auto px-8 mb-20">
          <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-800">
            {[
              { value: "340+", label: "Active Students" },
              { value: "12K", label: "ALGO in Escrow" },
              { value: "0%", label: "Platform Fee" },
              { value: "100%", label: "On-Chain Verified" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0b0b0b] px-8 py-10 flex flex-col gap-2 group hover:bg-slate-900/60 transition-colors">
                <span className="text-4xl md:text-5xl font-black text-green-400 tracking-tighter tabular-nums">
                  {stat.value}
                </span>
                <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Scrolling marquee */}
        <div className="relative">
          {/* fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap w-max"
          >
            {[...Array(2)].map((_, ri) => (
              <div key={ri} className="flex gap-12 items-center">
                {[
                  "Escrow Secured",
                  "◈",
                  "Pera Wallet",
                  "◈",
                  "DTU Verified",
                  "◈",
                  "Algorand L1",
                  "◈",
                  "Zero Middlemen",
                  "◈",
                  "Smart Contracts",
                  "◈",
                  "Campus Native",
                  "◈",
                ].map((word, i) => (
                  <span
                    key={i}
                    className={`font-black uppercase tracking-widest text-sm ${
                      word === "◈" ? "text-green-500" : "text-slate-600"
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Feature highlights row */}
        <div className="max-w-7xl mx-auto px-8 mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "⬡",
              title: "Escrow Protection",
              desc: "Funds are locked on-chain until delivery is confirmed. No trust required.",
            },
            {
              icon: "◈",
              title: "Student Identity",
              desc: "Only verified DTU students can access the marketplace. No outsiders.",
            },
            {
              icon: "⟁",
              title: "Instant Settlement",
              desc: "Algorand finalizes in 4 seconds. Your ALGO moves as fast as you do.",
            },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0b0b0b] border border-slate-800 rounded-xl p-8 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(74,222,128,0.06)] transition-all duration-300 group"
            >
              <span className="text-3xl text-green-500 block mb-5 group-hover:scale-110 transition-transform origin-left">
                {f.icon}
              </span>
              <h3 className="text-white font-black text-lg uppercase tracking-wide mb-2">
                {f.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          GATED DTU ECOSYSTEM
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 bg-slate-950 border-t border-green-500/20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] min-h-screen">
        <AnimatePresence mode="wait">

          {/* ── LOCK SCREEN ─────────────────────────────────────────────── */}
          {!isVerified ? (
            <motion.div
              key="verification-gate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center py-32 px-4"
            >
              {/* Gate label */}
              <Reveal className="mb-8 text-center">
                <p className="font-mono text-xs text-green-500 uppercase tracking-[0.3em] mb-3">
                  ◈ Identity Protocol
                </p>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                  Verify to Enter
                </h2>
                <p className="text-slate-500 mt-3 text-sm">
                  Access restricted to verified DTU students.
                </p>
              </Reveal>

              <div className="max-w-md w-full relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-50 pointer-events-none" />
                <div className="relative z-10">
                  {/* YOUR onClick preserved exactly */}
                  <StudentVerification onVerified={() => setIsVerified(true)} />
                </div>
              </div>
            </motion.div>

          ) : (

            /* ── UNLOCKED DASHBOARD ───────────────────────────────────── */
            <motion.div
              key="marketplace-dashboard"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >

              {/* BRANDING HEADER */}
              <Reveal className="max-w-7xl mx-auto px-8 pt-16 pb-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-green-400 font-black">
                    AR
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-wider">
                      Welcome, ANUBHAV RAJPUT
                    </h2>
                    <p className="text-slate-400 font-mono text-xs uppercase tracking-widest mt-1">
                      Authenticated: Team Eonyx · DTU Defianz Tech Team
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* TAB SWITCHER */}
              <Reveal delay={0.05} className="max-w-7xl mx-auto px-8 mb-4 border-b border-slate-800 flex gap-8">
                {/* YOUR onClick functions preserved exactly */}
                <button
                  onClick={() => setActiveTab("market")}
                  className={`pb-4 font-bold uppercase tracking-wider transition-colors border-b-2 ${
                    activeTab === "market"
                      ? "text-green-400 border-green-400"
                      : "text-slate-500 border-transparent hover:text-white"
                  }`}
                >
                  Marketplace
                </button>
                <button
                  onClick={() => setActiveTab("dashboard")}
                  className={`pb-4 font-bold uppercase tracking-wider transition-colors border-b-2 ${
                    activeTab === "dashboard"
                      ? "text-green-400 border-green-400"
                      : "text-slate-500 border-transparent hover:text-white"
                  }`}
                >
                  My Dashboard
                </button>
              </Reveal>

              {/* DYNAMIC CONTENT */}
              {activeTab === "market" ? (
                <>
                  {/* Campus Services — wrapped for scroll reveal */}
                  <Reveal delay={0.1}>
                    <CampusServices />
                  </Reveal>

                  {/* Marketplace Grid */}
                  <div className="max-w-7xl mx-auto px-8 py-16">

                    <Reveal className="flex justify-between items-end mb-12">
                      <div>
                        <p className="font-mono text-xs text-green-500 uppercase tracking-[0.25em] mb-2">
                          ◈ On-Chain Exchange
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
                          Latest Drops
                        </h2>
                        <p className="text-slate-400 mt-2 font-medium">
                          Decentralized gear exchange.
                        </p>
                      </div>
                      <PeraWalletConnect />
                    </Reveal>

                    {/* Cards — staggered scroll reveal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {items.map((item, i) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 0.6,
                            delay: i * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          /* YOUR onClick preserved exactly */
                          onClick={() => setSelectedItem(item)}
                          className="group bg-[#0b0b0b] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(74,222,128,0.12)] transition-all duration-300 cursor-pointer"
                        >
                          <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center text-slate-600 border border-slate-800 group-hover:scale-[1.02] transition-transform overflow-hidden relative">
                            <span className="font-mono text-xs uppercase tracking-widest">
                              Image Space
                            </span>
                            {/* Green corner accent on hover */}
                            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="flex-1 mt-2">
                            <h3 className="font-bold text-lg leading-tight text-white">
                              {item.name}
                            </h3>
                            <div className="flex justify-between items-center mt-4">
                              <span className="text-green-400 font-black tracking-wide">
                                {item.price}
                              </span>
                              <span className="text-xs px-2 py-1 bg-slate-900 rounded border border-slate-700 text-slate-300 font-medium uppercase">
                                {item.condition}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Reveal>
                  <UserDashboard />
                </Reveal>
              )}

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          ESCROW CHECKOUT MODAL — YOUR LOGIC PRESERVED EXACTLY
      ═══════════════════════════════════════════════════════════════════════ */}
      {selectedItem && (
        <CheckoutModal
          item={selectedItem}
          onClose={() => {
            setSelectedItem(null);
            setActiveTab("dashboard"); // Automatically flips to dashboard after checkout!
          }}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          FOOTER — TEAM EONYX
      ═══════════════════════════════════════════════════════════════════════ */}
      <footer className="relative bg-black border-t border-slate-800/60 overflow-hidden">
        {/* Subtle glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand mark */}
          <div className="flex items-center gap-3">
            <span className="text-green-500 font-black text-lg tracking-tight">
              Campus<span className="text-white">Chain</span>
            </span>
            <span className="w-px h-4 bg-slate-700" />
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
              DTU · Algorand
            </span>
          </div>

          {/* Team credit */}
          <p className="font-mono text-xs text-slate-500 text-center leading-relaxed">
            Built by{" "}
            <span className="text-green-400 font-bold">Team Eonyx</span>
            {" · "}
            <span className="text-slate-300">Anubhav Rajput</span>
            <span className="text-slate-600"> · </span>
            <span className="text-slate-300">Ahad</span>
            <span className="text-slate-600"> · </span>
            <span className="text-slate-300">Anas Malik</span>
            <span className="text-slate-600"> · </span>
            <span className="text-slate-300">Arpan Gupta</span>
          </p>

          {/* Chain tag */}
          <span className="px-3 py-1 border border-green-500/30 rounded-full text-green-500 font-mono text-xs uppercase tracking-widest">
            ◈ On-Chain
          </span>
        </div>
      </footer>
    </main>
  );
}

