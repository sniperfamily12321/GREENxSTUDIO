
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  status: 'Completed' | 'Active';
}

export interface FAQ {
  question: string;
  answer: string;
}
