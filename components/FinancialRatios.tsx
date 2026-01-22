
import React from 'react';
import { FY25_DATA, FY26_DATA } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const FinancialRatios: React.FC = () => {
  const productivityData = [
    { name: '1H FY25', val: FY25_DATA.revenuePerEmployee, color: '#94a3b8' },
    { name: '1H FY26', val: FY26_DATA.revenuePerEmployee, color: '#ef4444' }
  ];

  const efficiencyData = [
    { name: '1H FY25', val: FY25_DATA.costToRevenueRatio, color: '#3b82f6' },
    { name: '1H FY26', val: FY26_DATA.costToRevenueRatio, color: '#1d4ed8' }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ratio 1 */}
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-lg font-bold text-slate-800">Revenue per Employee</h4>
              <p className="text-sm text-slate-500">Productivity Index (Total Revenue / Headcount)</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-red-500">-37%</span>
            </div>
          </div>
          
          <div className="h-[250px] mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis hide domain={[0, 150000]} />
                <Tooltip 
                  formatter={(value: number) => `$${value.toLocaleString()}`}
                  contentStyle={{ borderRadius: '8px' }}
                />
                <Bar dataKey="val" radius={[4, 4, 0, 0]} barSize={80}>
                  {productivityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
            Individual output dropped from <span className="font-bold text-slate-900">$137,460</span> to <span className="font-bold text-slate-900">$86,285</span>. 
            Expansion did not yield economies of scale; rather, it diluted individual productivity.
          </p>
        </div>

        {/* Ratio 2 */}
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-lg font-bold text-slate-800">Efficiency Ratio</h4>
              <p className="text-sm text-slate-500">Workforce Cost as % of Total Revenue</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-red-500">+11.9%</span>
            </div>
          </div>
          
          <div className="h-[250px] mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis hide domain={[0, 40]} />
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ borderRadius: '8px' }}
                />
                <Bar dataKey="val" radius={[4, 4, 0, 0]} barSize={80}>
                  {efficiencyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
            Labor burden has spiked to <span className="font-bold text-slate-900">30.6%</span>. 
            For every $1 earned, we now spend 30 cents on talent, compared to 19 cents in FY25.
          </p>
        </div>
      </div>

      {/* ROI Deep Dive */}
      <div className="bg-slate-900 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h4 className="text-2xl font-bold mb-4 font-serif text-blue-400">Human Capital ROI Analysis</h4>
            <p className="text-slate-300 mb-8 leading-relaxed max-w-xl">
              Our ROI calculation (Gross Profit / Workforce Cost) provides the most definitive warning. 
              In FY25, we had a healthy 1.17 return. In 1H FY26, this dropped to <span className="text-red-400 font-bold">0.86</span>.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <p className="text-xs uppercase text-slate-500 tracking-wider mb-1">FY25 Return</p>
                <p className="text-3xl font-bold">$1.17</p>
              </div>
              <div className="p-4 bg-red-950/30 rounded-xl border border-red-900/50">
                <p className="text-xs uppercase text-red-400 tracking-wider mb-1">FY26 Return</p>
                <p className="text-3xl font-bold text-red-400">$0.86</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-64 flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10">
            <div className="text-center mb-4">
              <p className="text-sm font-semibold uppercase text-slate-400">Current Yield</p>
              <h2 className="text-5xl font-black text-white">86¢</h2>
            </div>
            <p className="text-xs text-center text-slate-400">
              Generated in Gross Profit for every $1.00 invested in salaries.
            </p>
            <div className="mt-6 w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 w-[86%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
