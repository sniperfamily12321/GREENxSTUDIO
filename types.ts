
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
