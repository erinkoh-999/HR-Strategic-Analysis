
import { FinancialMetrics, DepartmentData, BusinessUnitInsight } from './types';

export const FY25_DATA: FinancialMetrics = {
  revenue: 8.66,
  workforceCost: 1.625,
  grossProfit: 1.90,
  headcount: 63,
  revenuePerEmployee: 137460,
  costToRevenueRatio: 18.7,
  humanCapitalROI: 1.17
};

export const FY26_DATA: FinancialMetrics = {
  revenue: 6.04,
  workforceCost: 1.854,
  grossProfit: 1.59,
  headcount: 70,
  revenuePerEmployee: 86285,
  costToRevenueRatio: 30.6,
  humanCapitalROI: 0.86
};

export const DEPT_COSTS: DepartmentData[] = [
  { name: 'R&D', cost: 564, growth: 2 },
  { name: 'ICT', cost: 393, growth: 32 },
  { name: 'IMA (Marketing/Sales)', cost: 316, growth: 34 },
  { name: 'Other', cost: 581, growth: 0 } // Computed remaining
];

export const BUSINESS_UNITS: BusinessUnitInsight[] = [
  {
    name: 'Cybersecurity',
    revenue: 0.007,
    profit: -1.4,
    status: 'critical',
    insight: 'Significant R&D/ICT burn vs negligible revenue.'
  },
  {
    name: 'Own Brand',
    revenue: 4.37, // Estimated
    profit: 0.526,
    status: 'performing',
    insight: 'Primary revenue driver carrying the company.'
  },
  {
    name: 'Distribution',
    revenue: 1.66,
    profit: -0.2, // Estimated
    status: 'stable',
    insight: 'Revenue collapse from $3.8M in 1H FY25.'
  }
];
