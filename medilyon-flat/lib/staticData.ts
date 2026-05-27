export const PRODUCTS = [
  { _id: '1', name: 'Clinical Chemistry Reagents', category: 'reagents', description: 'Complete panel reagents for LFT, KFT, lipid profile, and metabolic panels. Compatible with major analyzers.', certifications: ['ISO 13485', 'CE Marked', '24-month shelf'], featured: true },
  { _id: '2', name: 'Immunoassay Reagent Set', category: 'reagents', description: 'Hormone panels, tumor markers, infectious disease serology. High sensitivity and specificity.', certifications: ['CE Marked', 'ELISA compatible'], featured: false },
  { _id: '3', name: 'COVID-19 Antigen Rapid Test', category: 'rapid', description: '15-minute result, 95%+ sensitivity. Suitable for clinics, pharmacies, and screening camps.', certifications: ['ICMR Approved', 'CE Marked'], featured: true },
  { _id: '4', name: 'Malaria Antigen Combo Test', category: 'rapid', description: 'P. falciparum / P. vivax combo. WHO-listed, used in national malaria elimination program.', certifications: ['WHO Listed', 'ICMR Approved'], featured: false },
  { _id: '5', name: 'HbA1c Rapid Test', category: 'rapid', description: 'Point-of-care HbA1c for diabetes monitoring. Results in 5 minutes from whole blood.', certifications: ['POC', '5-min result'], featured: true },
  { _id: '6', name: 'PCR Master Mix Kit', category: 'molecular', description: 'High-fidelity Taq polymerase master mix for real-time PCR. 2x concentrated, 500 reactions.', certifications: ['Real-time PCR', '500 rxn'], featured: false },
  { _id: '7', name: 'Viral RNA Extraction Kit', category: 'molecular', description: 'Column-based extraction for blood, serum, swab, and urine. Compatible with QIAamp protocol.', certifications: ['50 preps', 'CE-IVD'], featured: false },
  { _id: '8', name: 'CBC 5-Part Diff Reagent Pack', category: 'hematology', description: 'Complete reagent set for 5-part differential CBC analyzers. Lyse, diluent, and rinse included.', certifications: ['5-part diff', '2000 tests'], featured: true },
  { _id: '9', name: 'ESR Analyzer Reagents', category: 'hematology', description: 'Westergren method ESR reagent set. Automated analyzer compatible.', certifications: ['Westergren', 'Automated'], featured: false },
  { _id: '10', name: 'Benchtop Centrifuge 5000 RPM', category: 'instruments', description: '12-position rotor, programmable speed & time. Ideal for serum/plasma separation.', certifications: ['5000 RPM', '12-position', 'CE'], featured: true },
  { _id: '11', name: 'Semi-Auto Biochemistry Analyzer', category: 'instruments', description: 'Photometric analyzer for clinical chemistry. 200 tests/hour, touchscreen, LIS connectivity.', certifications: ['200 t/hr', 'LIS ready', 'CE'], featured: false },
  { _id: '12', name: 'EDTA Vacutainer Tubes (100 pack)', category: 'consumables', description: '3mL and 5mL EDTA tubes for CBC collection. BD-compatible, latex-free.', certifications: ['Latex-free', '100/pack'], featured: false },
];

export const CATEGORY_LABELS: Record<string, string> = {
  reagents: 'Reagents & Kits',
  rapid: 'Rapid Tests',
  molecular: 'Molecular Diagnostics',
  hematology: 'Hematology',
  instruments: 'Lab Instruments',
  consumables: 'Consumables',
};

export const CATEGORY_ICONS: Record<string, string> = {
  reagents: '🧪', rapid: '⚡', molecular: '🔬',
  hematology: '🩸', instruments: '🔧', consumables: '🗂️',
};
