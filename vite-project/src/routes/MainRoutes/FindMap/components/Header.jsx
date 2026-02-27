import React from 'react';
import Icons from './Icons';

export default function Header({ toggleSidebar, isSidebarOpen }){
  const HomeIcon = Icons.MapPin; // small visual substitute
  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-4 z-20 sticky top-0">
      <div className="flex items-center gap-3">
        <div className="bg-slate-900 text-white p-2 rounded-xl shadow-lg shadow-slate-900/20">
          <Icons.Home size={20} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-900 leading-tight tracking-tight">QuickHomeLoan</h1>
          <p className="text-xs text-slate-500 font-medium tracking-wide">Property Map Explorer</p>
        </div>
      </div>

      <button onClick={toggleSidebar} className="md:hidden p-2.5 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors active:scale-95">
        {isSidebarOpen ? <Icons.X size={24} /> : <Icons.Filter size={24} />}
      </button>

      <div className="hidden md:flex items-center gap-4">
        <button className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          Saved Properties
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 active:scale-95">
          Login / Signup
        </button>
      </div>
    </header>
  );
}
