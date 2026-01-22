
export interface FinancialMetrics {
  revenue: number;
  workforceCost: number;
  grossProfit: number;
  headcount: number;
  revenuePerEmployee: number;
  costToRevenueRatio: number;
  humanCapitalROI: number;
}

export interface DepartmentData {
  name: string;
  cost: number;
  growth: number;
}

export interface BusinessUnitInsight {
  name: string;
  revenue: number;
  profit: number;
  status: 'critical' | 'stable' | 'performing';
  insight: string;
}

export enum ReportSection {
  EXECUTIVE_SUMMARY = 'Executive Summary',
  COST_DYNAMICS = 'Cost Dynamics',
  FINANCIAL_RATIOS = 'Financial Ratios',
  STRATEGIC_ALIGNMENT = 'Strategic Alignment',
  RECOMMENDATIONS = 'Recommendations'
}
