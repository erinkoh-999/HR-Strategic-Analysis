
import React from 'react';
import { ShieldCheck, UserX, Search, MessageSquareCode } from 'lucide-react';

export const Recommendations: React.FC = () => {
  const actions = [
    {
      title: "Freeze Non-Critical Hires",
      desc: "With Net Loss widening to -$775k, all headcount expansion must pause immediately to preserve cash flow.",
      icon: <UserX className="text-red-500" />,
      tag: "Immediate"
    },
    {
      title: "Cybersecurity Workforce Audit",
      desc: "Review the $1M combined R&D/ICT allocation. Evaluate if this is a viable long-term R&D play or an unsustainable resource drain.",
      icon: <Search className="text-blue-500" />,
      tag: "Next 30 Days"
    },
    {
      title: "IMA/Sales Performance Review",
      desc: "Align sales quotas and commission structures with actual revenue recovery. Review the 55% spike in Product costs against zero ROI.",
      icon: <ShieldCheck className="text-emerald-500" />,
      tag: "Quarterly"
    },
    {
      title: "Productivity Optimization",
      desc: "Pivot from 'Acquisition' to 'Optimization'. Focus on maximizing the output of the current 70 employees.",
      icon: <MessageSquareCode className="text-indigo-500" />,
      tag: "Strategic"
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="bg-red-900 text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 border-b-8 border-red-700">
        <div className="flex-1">
          <h4 className="text-2xl font-bold mb-4 font-serif">Strategic Conclusion</h4>
          <p className="text-red-100 leading-relaxed">
            The current workforce strategy is <span className="font-bold text-white uppercase underline">Heavy</span> relative to our current revenue reality. We have over-indexed on capacity in anticipation of growth that has not materialized. 
            <br /><br />
            Our priority must shift from <span className="font-semibold">hiring for tomorrow</span> to <span className="font-semibold">performing for today</span>.
          </p>
        </div>
        <div className="p-6 bg-red-800 rounded-xl border border-red-700 text-center min-w-[200px]">
          <p className="text-[10px] uppercase tracking-widest text-red-300 font-bold mb-1">Status</p>
          <p className="text-2xl font-black">ACTION REQUIRED</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-6 items-start transition-all hover:shadow-md hover:border-slate-300">
            <div className="p-3 bg-slate-50 rounded-lg shrink-0">
              {action.icon}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h5 className="font-bold text-slate-900">{action.title}</h5>
                <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full font-bold uppercase tracking-tighter text-slate-500">{action.tag}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{action.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center p-12 border-2 border-dashed border-slate-200 rounded-3xl">
        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-4 italic">Sign-off</p>
        <h4 className="text-3xl font-serif text-slate-800 font-bold mb-2">Erin Koh</h4>
        <p className="text-slate-500 text-sm">Corporate HR | FLEXXON</p>
      </div>
    </div>
  );
};
