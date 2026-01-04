
// Removed .ts extension from local import to resolve potential TypeScript/Vite import issues
import { PricingPlan, Service, Project, FAQ } from './types';

export const PROFILE = {
  name: 'GREENxSTUDIO',
  profession: 'Discord Server & Bot Developer',
  whatsappNumber: '7814224780',
  discordLink: 'https://discord.gg/sykxh7RUn5',
};

export const SERVICES: Service[] = [
  {
    id: 'setup',
    title: 'Discord server setup and structuring',
    description: 'Complete server architecture from scratch, ensuring logical flow and user-friendly design.'
  },
  {
    id: 'roles',
    title: 'Role and permission management',
    description: 'Meticulous setup of role hierarchies and channel-specific permissions to ensure server security.'
  },
  {
    id: 'bots',
    title: 'Custom Discord bot development',
    description: 'Tailor-made automation scripts and bot features designed specifically for your community needs.'
  },
  {
    id: 'automod',
    title: 'Auto-moderation systems',
    description: 'Implementation of advanced filters and automated systems to keep your community clean and safe 24/7.'
  },
  {
    id: 'tickets',
    title: 'Ticket and support systems',
    description: 'Professional support infrastructures with private channel generation and logs for staff oversight.'
  },
  {
    id: 'optimization',
    title: 'Server optimization and performance',
    description: 'Streamlining bot usage and channel density to minimize lag and maximize user engagement.'
  },
  {
    id: 'management',
    title: 'Monthly Discord server management',
    description: 'Ongoing technical support, regular permission audits, and routine maintenance for high-growth servers.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'micro',
    name: 'MICRO PACK',
    price: 299,
    features: [
      'Unlimited channels',
      '6 roles (Owner, Admin, Mod, Helper, Verified, Member)',
      'Clean category structure',
      'Proper permissions setup',
      'Rules and information channels',
      'Welcome message',
      'Basic moderation bot setup'
    ]
  },
  {
    id: 'starter',
    name: 'STARTER PLUS',
    price: 599,
    features: [
      'Unlimited channels',
      '6–7 roles',
      'Advanced category structure',
      'Full permission security',
      'Welcome and goodbye messages',
      'Auto-moderation for spam and bad words',
      'Logs system'
    ]
  },
  {
    id: 'growth',
    name: 'GROWTH MAX',
    price: 999,
    features: [
      'Unlimited channels',
      '7–8 roles',
      'Reaction roles',
      'Ticket system',
      'Advanced auto-moderation',
      'Logs and reports',
      'Server performance optimization'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Elite Gaming Community',
    category: 'Gaming',
    description: 'A massive 10k+ member gaming hub with automated matchmaking systems.',
    features: ['Custom Economy Bot', 'Ranked Matchmaking', 'Tournament System'],
    status: 'Completed'
  },
  {
    id: '2',
    title: 'CryptoWhale NFT Hub',
    category: 'Crypto',
    description: 'High-security server for NFT holders with wallet verification integration.',
    features: ['Holder Verification', 'Floor Price Tracking', 'Secure Trading Rooms'],
    status: 'Completed'
  },
  {
    id: '3',
    title: 'Zenith RP Server',
    category: 'Roleplay',
    description: 'Advanced GTA V roleplay community backend and bot management.',
    features: ['Whitelisting Bot', 'Staff Management', 'IC/OOC Logs'],
    status: 'Completed'
  }
];

export const FAQS: FAQ[] = [
  {
    question: "How long does a server setup take?",
    answer: "Most setups are completed within 24-48 hours depending on the complexity of the plan chosen."
  },
  {
    question: "Do I get lifetime support?",
    answer: "We provide 30 days of complimentary technical support for all packs. Extended management plans are available for long-term needs."
  },
  {
    question: "Can you customize existing servers?",
    answer: "Yes, we can overhaul and optimize your current server without losing your existing member base."
  },
  {
    question: "Are custom bots included?",
    answer: "Custom bot development is included in the Growth Max plan. For Micro and Starter, we configure industry-leading public bots."
  }
];