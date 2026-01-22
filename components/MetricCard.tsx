
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  isNegative?: boolean;
  suffix?: string;
  icon?: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  isNegative = false, 
  suffix,
  icon 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-transform hover:scale-[1.02] duration-300">
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</p>
        <div className={`p-2 rounded-lg ${isNegative ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
        {suffix && <span className="text-slate-500 font-medium">{suffix}</span>}
      </div>
      {change && (
        <div className={`mt-4 flex items-center text-sm font-semibold ${isNegative ? 'text-red-500' : 'text-emerald-500'}`}>
          {isNegative ? <ArrowDownRight size={16} className="mr-1" /> : <ArrowUpRight size={16} className="mr-1" />}
          {change}
          <span className="text-slate-400 font-normal ml-2 italic">vs FY25</span>
        </div>
      )}
    </div>
  );
};
