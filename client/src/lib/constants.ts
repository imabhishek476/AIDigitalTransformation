import { 
  Bot, 
  Search, 
  BarChart, 
  Code, 
  LineChart, 
  Users,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

export const SERVICES = [
  {
    icon: Bot,
    iconColor: 'text-primary',
    title: 'AI Integration',
    description: 'We implement intelligent AI solutions tailored to your business needs, from chatbots to predictive analytics and automated workflows.',
    features: [
      'Custom AI strategy development',
      'Smart automation implementation',
      'AI-powered customer insights'
    ],
    learnMoreColor: 'text-primary'
  },
  {
    icon: Search,
    iconColor: 'text-secondary',
    title: 'SEO Optimization',
    description: 'Boost your online visibility with our data-driven SEO strategies that drive organic traffic and improve search engine rankings.',
    features: [
      'Comprehensive SEO audits',
      'Content optimization strategy',
      'Technical SEO implementation'
    ],
    learnMoreColor: 'text-secondary'
  },
  {
    icon: BarChart,
    iconColor: 'text-accent',
    title: 'Digital Marketing',
    description: 'Create impactful digital marketing campaigns that connect with your target audience and drive measurable business growth.',
    features: [
      'Multi-channel marketing strategies',
      'Content marketing & social media',
      'Analytics & performance tracking'
    ],
    learnMoreColor: 'text-accent'
  },
  {
    icon: Code,
    iconColor: 'text-primary',
    title: 'Website Development',
    description: 'Custom, responsive, and high-performing websites that provide exceptional user experiences and drive conversions.',
    features: [
      'Responsive design & development',
      'E-commerce solutions',
      'CMS implementation & training'
    ],
    learnMoreColor: 'text-primary'
  },
  {
    icon: LineChart,
    iconColor: 'text-secondary',
    title: 'Data Analytics',
    description: 'Transform your business data into actionable insights with our comprehensive analytics and reporting solutions.',
    features: [
      'Custom dashboard development',
      'Performance tracking & KPIs',
      'Data-driven strategy recommendations'
    ],
    learnMoreColor: 'text-secondary'
  },
  {
    icon: Users,
    iconColor: 'text-accent',
    title: 'Digital Strategy Consulting',
    description: 'Expert guidance to help you navigate the digital landscape and develop comprehensive transformation strategies.',
    features: [
      'Digital maturity assessment',
      'Technology roadmap development',
      'Change management guidance'
    ],
    learnMoreColor: 'text-accent'
  }
];

export const CASE_STUDIES = [
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500',
    industry: 'E-commerce',
    industryColor: 'text-primary bg-primary/10',
    title: 'RetailPlus Transformation',
    description: 'Helped a regional retailer increase online sales by 215% through AI-powered personalization and SEO optimization.',
    resultValue: '+215% Sales',
    linkColor: 'text-primary'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500',
    industry: 'SaaS',
    industryColor: 'text-secondary bg-secondary/10',
    title: 'TechSolutions Growth',
    description: 'Implemented comprehensive SEO and content strategy for a B2B SaaS company, resulting in 4x lead generation.',
    resultValue: '+400% Leads',
    linkColor: 'text-secondary'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500',
    industry: 'Healthcare',
    industryColor: 'text-accent bg-accent/10',
    title: 'MedCore Modernization',
    description: 'Transformed patient engagement for a healthcare provider through AI chatbots and digital marketing automation.',
    resultValue: '+65% Satisfaction',
    linkColor: 'text-accent'
  }
];

export const TESTIMONIALS = [
  {
    quote: '"Nexus Digital completely transformed our online presence. Their AI integration strategies helped us automate customer service and increase satisfaction by 78%. The ROI has been incredible."',
    authorInitials: 'JM',
    authorName: 'Jennifer Miller',
    authorTitle: 'CEO, RetailPlus',
    authorColor: 'text-primary'
  },
  {
    quote: '"Their SEO expertise is unmatched. Within six months, we saw our organic traffic increase by 320% and our conversion rate double. They truly understand how to drive growth through digital channels."',
    authorInitials: 'DP',
    authorName: 'David Parker',
    authorTitle: 'Marketing Director, TechSolutions',
    authorColor: 'text-secondary'
  },
  {
    quote: '"Working with Nexus Digital has been a game-changer for our patient engagement. Their comprehensive digital strategy helped us modernize our approach and connect with patients in meaningful ways."',
    authorInitials: 'SJ',
    authorName: 'Dr. Sarah Johnson',
    authorTitle: 'COO, MedCore Healthcare',
    authorColor: 'text-accent'
  }
];

export const TEAM_MEMBERS = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    name: 'Michael Thompson',
    title: 'CEO & Founder',
    titleColor: 'text-primary',
    description: '15+ years experience in digital strategy and business transformation.',
    socials: [
      {
        type: 'linkedin',
        url: '#'
      },
      {
        type: 'twitter',
        url: '#'
      }
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    name: 'Emma Chen',
    title: 'CTO',
    titleColor: 'text-secondary',
    description: 'AI specialist with a background in machine learning and software development.',
    socials: [
      {
        type: 'linkedin',
        url: '#'
      },
      {
        type: 'github',
        url: '#'
      }
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    name: 'Marcus Johnson',
    title: 'Marketing Director',
    titleColor: 'text-accent',
    description: 'Digital marketing strategist with expertise in SEO and content marketing.',
    socials: [
      {
        type: 'linkedin',
        url: '#'
      },
      {
        type: 'twitter',
        url: '#'
      }
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    name: 'Sophia Martinez',
    title: 'Head of Analytics',
    titleColor: 'text-primary',
    description: 'Data scientist specializing in business intelligence and performance analytics.',
    socials: [
      {
        type: 'linkedin',
        url: '#'
      },
      {
        type: 'twitter',
        url: '#'
      }
    ]
  }
];
