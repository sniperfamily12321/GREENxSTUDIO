
import { PricingPlan, Service } from './types.ts';

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
