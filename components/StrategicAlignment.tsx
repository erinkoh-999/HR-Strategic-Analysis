
import React from 'react';
import { BUSINESS_UNITS } from '../constants';
import { AlertTriangle, CheckCircle, TrendingDown, Info } from 'lucide-react';

export const StrategicAlignment: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <h4 className="text-xl font-bold text-slate-800 mb-4">The "Mismatch" Analysis</h4>
        <p className="text-slate-600 leading-relaxed">
          The decline in overall ROI is driven by a stark mismatch between where we added headcount and where the business is performing. We are funding innovation in low-yield areas while neglecting the core profit engine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BUSINESS_UNITS.map((unit) => (
          <div 
            key={unit.name} 
            className={`p-6 rounded-xl border ${
              unit.status === 'critical' ? 'bg-red-50 border-red-100' :
              unit.status === 'performing' ? 'bg-emerald-50 border-emerald-100' :
              'bg-blue-50 border-blue-100'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <h5 className={`font-bold uppercase tracking-widest text-xs ${
                unit.status === 'critical' ? 'text-red-700' :
                unit.status === 'performing' ? 'text-emerald-700' :
                'text-blue-700'
              }`}>
                {unit.name} UNIT
              </h5>
              {unit.status === 'critical' ? <AlertTriangle className="text-red-500" size={18} /> :
               unit.status === 'performing' ? <CheckCircle className="text-emerald-500" size={18} /> :
               <Info className="text-blue-500" size={18} />}
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-500">Revenue</span>
                <span className="font-bold text-slate-900">${(unit.revenue * 1000).toLocaleString()}k</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Net Impact</span>
                <span className={`font-bold ${unit.profit < 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                  {unit.profit < 0 ? `-$${Math.abs(unit.profit)}M` : `+$${unit.profit}k`}
                </span>
              </div>
            </div>

            <div className={`p-4 rounded-lg bg-white/60 text-sm leading-snug border ${
              unit.status === 'critical' ? 'border-red-200' :
              unit.status === 'performing' ? 'border-emerald-200' :
              'border-blue-200'
            }`}>
              <p className="font-semibold mb-1 italic">Key Insight:</p>
              {unit.insight}
            </div>
          </div>
        ))}
      </div>

      {/* Narrative Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative">
          <div className="absolute top-0 right-0 p-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <TrendingDown size={24} />
            </div>
          </div>
          <h5 className="text-lg font-bold text-slate-800 mb-6">Cybersecurity Disconnect</h5>
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              We combined high <span className="font-bold">R&D ($564k)</span> and <span className="font-bold">ICT ($393k)</span> costs, largely to support the Cybersecurity launch.
            </p>
            <div className="flex items-center gap-4 py-4 px-6 bg-slate-900 text-white rounded-xl">
              <div className="flex-1">
                <p className="text-[10px] uppercase text-slate-400">Total Spend Impact</p>
                <p className="text-xl font-bold">~$1M Allocated</p>
              </div>
              <div className="w-px h-10 bg-slate-700"></div>
              <div className="flex-1 text-right">
                <p className="text-[10px] uppercase text-slate-400">Total Revenue Yield</p>
                <p className="text-xl font-bold text-red-400">$7,004</p>
              </div>
            </div>
            <p className="italic text-xs">This unit resulted in a net loss of $1.4 million alone for the half-year.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <h5 className="text-lg font-bold text-slate-800 mb-6">Sales Force vs. Distribution Collapse</h5>
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              We increased <span className="font-bold">IMA/Sales costs by 34%</span> aiming for market expansion. 
            </p>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    Distribution Revenue
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    44% of FY25 Levels
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                <div style={{ width: "44%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            <p>
              Despite the headcount increase, Distribution revenue collapsed from <span className="font-bold">$3.8M to $1.66M</span>. The sales force investment did not mitigate market headwinds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
