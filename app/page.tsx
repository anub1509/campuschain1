import Navbar from "./components/Navbar";

export default function Home() {
  const items = [
    { id: 1, name: "Used Aerodynamics Textbook", price: "15 ALGO", condition: "Good" },
    { id: 2, name: "Defianz Custom CAD Mouse", price: "25 ALGO", condition: "Mint" },
    { id: 3, name: "First Year Engineering Graphics Drafter", price: "10 ALGO", condition: "Fair" },
    { id: 4, name: "Node.js & React Crash Course Notes", price: "5 ALGO", condition: "Mint" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      
      <main className="p-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold">DTU Decentralized Exchange</h1>
            <p className="text-slate-400 mt-2">Zero-fee peer-to-peer campus marketplace.</p>
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm border border-slate-700">
            + List an Item
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col gap-4 hover:border-green-500/50 transition-colors cursor-pointer">
              <div className="aspect-square bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 border border-dashed border-slate-700">
                [Image Placeholder]
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-sm leading-tight">{item.name}</h3>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-green-400 font-bold">{item.price}</span>
                  <span className="text-xs px-2 py-1 bg-slate-800 rounded-full text-green-300 border border-green-900">
                    AI Rating: {item.condition}
                  </span>
                </div>
              </div>
              
              <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition-colors text-sm">
                Buy with Escrow
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}