
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { CostDynamics } from './components/CostDynamics';
import { FinancialRatios } from './components/FinancialRatios';
import { StrategicAlignment } from './components/StrategicAlignment';
import { Recommendations } from './components/Recommendations';
import { ReportSection } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ReportSection>(ReportSection.EXECUTIVE_SUMMARY);

  const renderContent = () => {
    switch (activeSection) {
      case ReportSection.EXECUTIVE_SUMMARY:
        return <ExecutiveSummary />;
      case ReportSection.COST_DYNAMICS:
        return <CostDynamics />;
      case ReportSection.FINANCIAL_RATIOS:
        return <FinancialRatios />;
      case ReportSection.STRATEGIC_ALIGNMENT:
        return <StrategicAlignment />;
      case ReportSection.RECOMMENDATIONS:
        return <Recommendations />;
      default:
        return <ExecutiveSummary />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header activeSection={activeSection} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
          <div className="max-w-7xl mx-auto pb-12">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
