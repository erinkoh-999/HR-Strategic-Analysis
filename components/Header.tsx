
import React from 'react';
import { ReportSection } from '../types';

interface HeaderProps {
  activeSection: ReportSection;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <header className="bg-white border-b border-slate-200 px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{activeSection}</h2>
        <p className="text-sm text-slate-500">1H FY26 Workforce Cost Analysis & Human Capital ROI Evaluation</p>
      </div>
      <div className="mt-4 md:mt-0 text-right">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-1">
          1H FY26 Reporting Period
        </span>
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{currentDate}</p>
      </div>
    </header>
  );
};
