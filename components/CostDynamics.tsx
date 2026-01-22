
import React from 'react';
import { DEPT_COSTS } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const COLORS = ['#1e293b', '#3b82f6', '#60a5fa', '#94a3b8'];

export const CostDynamics: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cost Distribution Chart */}
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="text-lg font-bold text-slate-800 mb-6 uppercase tracking-wider text-sm">FY26 Cost Allocation by Function</h4>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={DEPT_COSTS}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="cost"
                  nameKey="name"
                >
                  {DEPT_COSTS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                   formatter={(value: number) => `$${value}k`}
                   contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500 italic">R&D continues to represent 30.4% of total human capital spend.</p>
          </div>
        </div>

        {/* Growth by Department */}
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="text-lg font-bold text-slate-800 mb-6 uppercase tracking-wider text-sm">Cost Variance Analysis (%)</h4>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DEPT_COSTS.filter(d => d.growth > 0)} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={150} />
                <Tooltip 
                  formatter={(value: number) => `+${value}%`}
                  cursor={{ fill: '#f8fafc' }}
                />
                <Bar dataKey="growth" name="Cost Increase %" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4 mt-4">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-semibold text-blue-800 uppercase">IMA Product Spike</span>
              <span className="text-lg font-bold text-blue-600">+55%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-semibold text-blue-800 uppercase">ICT Infrastructure</span>
              <span className="text-lg font-bold text-blue-600">+32%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Insights */}
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <h4 className="text-lg font-bold text-slate-800 mb-6">Critical Drivers & Variance Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l-4 border-slate-800 pl-4">
            <h5 className="font-bold text-sm text-slate-500 mb-2 uppercase">ICT Surge</h5>
            <p className="text-sm text-slate-700">Costs rose to <span className="font-bold">$393k</span> (+32%). We prioritized technical backbone upgrades expecting these to support new Cybersecurity initiatives.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-sm text-slate-500 mb-2 uppercase">IMA/Sales Investment</h5>
            <p className="text-sm text-slate-700">Aggressive commercial funding (<span className="font-bold">+34%</span>). Product department costs alone spiked 55%, aimed at rejuvenating market traction.</p>
          </div>
          <div className="border-l-4 border-slate-300 pl-4">
            <h5 className="font-bold text-sm text-slate-500 mb-2 uppercase">R&D Stability</h5>
            <p className="text-sm text-slate-700">Remains the largest center at <span className="font-bold">$564k</span>. Despite high spend, revenue from technical innovations remains the current bottle-neck.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
