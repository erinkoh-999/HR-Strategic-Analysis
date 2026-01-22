
import React from 'react';
import { MetricCard } from './MetricCard';
import { Users, DollarSign, TrendingUp, Briefcase } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  ComposedChart, Line, Area 
} from 'recharts';
import { FY25_DATA, FY26_DATA } from '../constants';

export const ExecutiveSummary: React.FC = () => {
  const chartData = [
    { name: '1H FY25', revenue: FY25_DATA.revenue, cost: FY25_DATA.workforceCost, headcount: FY25_DATA.headcount },
    { name: '1H FY26', revenue: FY26_DATA.revenue, cost: FY26_DATA.workforceCost, headcount: FY26_DATA.headcount },
  ];

  return (
    <div className="space-y-8">
      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Total Headcount" 
          value={FY26_DATA.headcount} 
          change="+11%" 
          icon={<Users size={20} />} 
        />
        <MetricCard 
          title="Workforce Cost" 
          value={`$${FY26_DATA.workforceCost}M`} 
          change="+14.1%" 
          isNegative={true}
          icon={<DollarSign size={20} />} 
        />
        <MetricCard 
          title="Revenue" 
          value={`$${FY26_DATA.revenue}M`} 
          change="-30.2%" 
          isNegative={true}
          icon={<TrendingUp size={20} />} 
        />
        <MetricCard 
          title="Human Capital ROI" 
          value={FY26_DATA.humanCapitalROI.toFixed(2)} 
          change="-26.5%" 
          isNegative={true}
          icon={<Briefcase size={20} />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Insight Card */}
        <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            Performance Divergence Analysis
          </h4>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} label={{ value: 'USD (Millions)', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  cursor={{ fill: '#f8fafc' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="revenue" name="Total Revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={60} />
                <Bar dataKey="cost" name="Workforce Cost" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={60} />
                <Line type="monotone" dataKey="headcount" name="Headcount" stroke="#ef4444" strokeWidth={3} dot={{ r: 6, fill: '#ef4444' }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-50 rounded-lg border border-slate-100">
            <div>
              <h5 className="font-bold text-slate-900 text-sm mb-2">Strategy Recap</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Strategic expansion to 70 employees targeted ICT and IMA growth. While capacity increased, monetization lagged significantly, especially in Cyber and Distribution sectors.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm mb-2">Critical Signal</h5>
              <p className="text-sm text-red-600 font-medium leading-relaxed">
                Workforce costs now represent 30.6% of revenue, up from 18.7%. The widening "Headcount vs Revenue" jaw indicates an urgent need for restructuring.
              </p>
            </div>
          </div>
        </div>

        {/* Executive Summary Text */}
        <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif text-blue-400">Executive Brief</h4>
            <div className="space-y-6 text-slate-300 leading-relaxed text-sm">
              <p>
                In 1H FY26, we executed a strategic headcount increase (+7 hires) to boost technical and commercial capacity. 
              </p>
              <div className="p-4 bg-slate-800 rounded-lg border-l-4 border-red-500">
                <p className="font-bold text-white mb-1">Human Capital ROI Alert</p>
                Every $1 spent on talent now yields only $0.86 in Gross Profit, a 26% decline from FY25.
              </div>
              <p>
                The investment in ICT (+32%) and IMA (+34%) has yet to translate into the anticipated top-line recovery. The primary drag remains the Cybersecurity unit ($7k revenue vs $1.4M loss).
              </p>
            </div>
          </div>
          <button className="mt-8 w-full py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-semibold text-sm">
            Download Full PDF Report
          </button>
        </div>
      </div>
    </div>
  );
};
