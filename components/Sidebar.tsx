
import React from 'react';
import { ReportSection } from '../types';
import { 
  LayoutDashboard, 
  TrendingUp, 
  BarChart4, 
  Target, 
  AlertCircle 
} from 'lucide-react';

interface SidebarProps {
  activeSection: ReportSection;
  onSectionChange: (section: ReportSection) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { name: ReportSection.EXECUTIVE_SUMMARY, icon: <LayoutDashboard size={20} /> },
    { name: ReportSection.COST_DYNAMICS, icon: <TrendingUp size={20} /> },
    { name: ReportSection.FINANCIAL_RATIOS, icon: <BarChart4 size={20} /> },
    { name: ReportSection.STRATEGIC_ALIGNMENT, icon: <Target size={20} /> },
    { name: ReportSection.RECOMMENDATIONS, icon: <AlertCircle size={20} /> },
  ];

  return (
    <div className="w-72 bg-slate-900 text-white h-full flex flex-col shadow-xl">
      <div className="p-8 border-b border-slate-800">
        <h1 className="text-2xl font-bold font-serif tracking-tight text-blue-400">FLEXXON</h1>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">HR Strategic Analysis</p>
      </div>
      
      <nav className="flex-1 mt-6 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => onSectionChange(item.name as ReportSection)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                  activeSection === item.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white shadow-inner">
            EK
          </div>
          <div>
            <p className="text-sm font-semibold">Erin Koh</p>
            <p className="text-xs text-slate-400">HR Director</p>
          </div>
        </div>
        <div className="text-[10px] text-slate-500 uppercase tracking-tighter">
          Confidential - Internal Use Only
        </div>
      </div>
    </div>
  );
};
