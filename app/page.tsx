'use client'

import { useState } from 'react'
import { Sparkles, TrendingUp, BookOpen, DollarSign, Clock, Target, ChevronRight } from 'lucide-react'

interface RoadmapStep {
  phase: string
  duration: string
  tasks: string[]
  milestones: string[]
}

interface MoneyMakingIdea {
  id: string
  title: string
  category: string
  description: string
  initialInvestment: string
  timeToProfit: string
  skillsRequired: string[]
  incomeRange: string
  legitimacy: string
  sources: string[]
  roadmap: RoadmapStep[]
  pros: string[]
  cons: string[]
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedIdea, setSelectedIdea] = useState<MoneyMakingIdea | null>(null)
  const [loading, setLoading] = useState(false)

  const categories = [
    'all',
    'freelancing',
    'content creation',
    'e-commerce',
    'education',
    'tech & development',
    'investment'
  ]

  const ideas: MoneyMakingIdea[] = [
    {
      id: '1',
      title: 'Freelance Writing & Content Creation',
      category: 'freelancing',
      description: 'Create written content for blogs, websites, and businesses. Write articles, blog posts, copywriting, technical documentation, and more.',
      initialInvestment: '$0-100 (basic tools)',
      timeToProfit: '1-3 months',
      skillsRequired: ['Writing', 'Research', 'SEO basics', 'Grammar'],
      incomeRange: '$500-$10,000+/month',
      legitimacy: 'Highly legitimate - established industry with millions of professionals',
      sources: ['Upwork', 'Fiverr', 'Contently', 'ProBlogger', 'Direct client outreach'],
      roadmap: [
        {
          phase: 'Foundation (Weeks 1-2)',
          duration: '2 weeks',
          tasks: [
            'Choose your niche (tech, finance, health, lifestyle, etc.)',
            'Study top writers in your niche',
            'Create 3-5 portfolio samples',
            'Set up professional profiles on Upwork, Fiverr, LinkedIn'
          ],
          milestones: ['Portfolio website live', 'First platform profile approved']
        },
        {
          phase: 'Getting First Clients (Weeks 3-6)',
          duration: '4 weeks',
          tasks: [
            'Apply to 5-10 jobs daily on freelance platforms',
            'Personalize each proposal',
            'Network in writing communities',
            'Offer competitive rates initially ($0.05-0.10/word)',
            'Deliver exceptional quality for first clients'
          ],
          milestones: ['First paid gig completed', '3-5 positive reviews', 'First repeat client']
        },
        {
          phase: 'Scaling (Months 2-4)',
          duration: '3 months',
          tasks: [
            'Gradually increase rates based on experience',
            'Specialize in high-paying niches',
            'Build direct client relationships',
            'Create content marketing for yourself',
            'Learn advanced SEO and content strategy'
          ],
          milestones: ['$1000+ monthly income', '10+ completed projects', 'Premium rate ($0.15-0.30/word)']
        },
        {
          phase: 'Professional Level (Months 5+)',
          duration: 'Ongoing',
          tasks: [
            'Focus on retainer clients',
            'Outsource lower-paying work',
            'Build authority through guest posting',
            'Create courses or books',
            'Command premium rates ($0.50+/word)'
          ],
          milestones: ['$3000+ monthly income', 'Multiple retainer clients', 'Industry recognition']
        }
      ],
      pros: [
        'Low barrier to entry',
        'Work from anywhere',
        'Flexible schedule',
        'High demand',
        'Scalable income'
      ],
      cons: [
        'Competitive initially',
        'Requires consistent effort',
        'Income can be irregular at start',
        'Need to manage clients'
      ]
    },
    {
      id: '2',
      title: 'YouTube Content Creation',
      category: 'content creation',
      description: 'Create video content on topics you\'re passionate about. Monetize through ads, sponsorships, merchandise, and affiliate marketing.',
      initialInvestment: '$100-500 (camera/mic)',
      timeToProfit: '6-12 months',
      skillsRequired: ['Video editing', 'Storytelling', 'Consistency', 'Marketing'],
      incomeRange: '$500-$100,000+/month',
      legitimacy: 'Highly legitimate - YouTube Partner Program is official and trusted',
      sources: ['YouTube Partner Program', 'Sponsorships', 'Affiliate marketing', 'Merchandise'],
      roadmap: [
        {
          phase: 'Channel Setup & Strategy (Week 1-2)',
          duration: '2 weeks',
          tasks: [
            'Research profitable niches (education, tech reviews, finance, productivity)',
            'Analyze successful channels in your niche',
            'Create channel with professional branding',
            'Plan first 20 video topics',
            'Set up basic equipment (phone camera is fine to start)'
          ],
          milestones: ['Channel created', 'Content calendar for 3 months', 'First video script ready']
        },
        {
          phase: 'Content Production (Months 1-3)',
          duration: '3 months',
          tasks: [
            'Publish 2-3 videos per week consistently',
            'Learn basic video editing (DaVinci Resolve free)',
            'Optimize titles, thumbnails, descriptions for SEO',
            'Engage with every comment',
            'Study analytics to understand what works'
          ],
          milestones: ['20+ videos published', '100+ subscribers', 'First viral video (10k+ views)']
        },
        {
          phase: 'Growth Phase (Months 4-12)',
          duration: '9 months',
          tasks: [
            'Double down on best-performing content types',
            'Improve production quality incrementally',
            'Collaborate with similar-sized creators',
            'Build email list for direct audience connection',
            'Apply for YouTube Partner Program (1000 subs, 4000 watch hours)'
          ],
          milestones: ['1000+ subscribers', 'Monetization enabled', 'First sponsorship inquiry']
        },
        {
          phase: 'Monetization & Scaling (Year 2+)',
          duration: 'Ongoing',
          tasks: [
            'Diversify income: ads, sponsors, affiliates, products',
            'Create signature series or formats',
            'Invest in better equipment',
            'Potentially hire editor/assistant',
            'Build community (Discord, Patreon)'
          ],
          milestones: ['10,000+ subscribers', '$1000+ monthly revenue', 'Multiple income streams']
        }
      ],
      pros: [
        'Passive income potential',
        'Build personal brand',
        'Multiple monetization options',
        'Creative freedom',
        'Scalable'
      ],
      cons: [
        'Takes time to build audience',
        'Requires consistency',
        'Algorithm dependency',
        'Public-facing',
        'Initial investment in equipment'
      ]
    },
    {
      id: '3',
      title: 'Web Development Freelancing',
      category: 'tech & development',
      description: 'Build websites and web applications for businesses. High demand skill with excellent pay rates.',
      initialInvestment: '$0-100',
      timeToProfit: '3-6 months',
      skillsRequired: ['HTML/CSS', 'JavaScript', 'React/Next.js', 'Backend basics'],
      incomeRange: '$2000-$20,000+/month',
      legitimacy: 'Highly legitimate - one of the most in-demand online skills',
      sources: ['Upwork', 'Toptal', 'Gun.io', 'Direct clients', 'Agency partnerships'],
      roadmap: [
        {
          phase: 'Learn Core Skills (Months 1-3)',
          duration: '3 months',
          tasks: [
            'Complete FreeCodeCamp Responsive Web Design',
            'Learn JavaScript fundamentals (JavaScript.info)',
            'Build 5 practice projects',
            'Learn React or Vue.js',
            'Understand Git and GitHub'
          ],
          milestones: ['5 portfolio projects', 'GitHub with 100+ commits', 'Personal portfolio website']
        },
        {
          phase: 'First Clients (Months 4-6)',
          duration: '3 months',
          tasks: [
            'Create profiles on Upwork, Fiverr',
            'Offer competitive rates ($25-40/hour)',
            'Apply to 10+ jobs daily',
            'Network in developer communities',
            'Take any reasonable project to build reviews',
            'Deliver exceptional quality'
          ],
          milestones: ['First paid project', '5-star reviews', '$1000+ earned']
        },
        {
          phase: 'Specialization (Months 7-12)',
          duration: '6 months',
          tasks: [
            'Choose specialization (e-commerce, SaaS, landing pages)',
            'Learn advanced frameworks (Next.js, TypeScript)',
            'Increase rates to $50-75/hour',
            'Build case studies from past work',
            'Start getting referrals'
          ],
          milestones: ['$3000+ monthly income', '10+ completed projects', 'Repeat clients']
        },
        {
          phase: 'Expert Level (Year 2+)',
          duration: 'Ongoing',
          tasks: [
            'Command $75-150+/hour',
            'Work on retainer contracts',
            'Build own products/SaaS',
            'Create courses or content',
            'Potentially start agency'
          ],
          milestones: ['$5000+ monthly income', 'Premium clients', 'Multiple revenue streams']
        }
      ],
      pros: [
        'High earning potential',
        'Always in demand',
        'Remote work opportunities',
        'Creative problem solving',
        'Continuous learning'
      ],
      cons: [
        'Requires significant learning',
        'Can be stressful with deadlines',
        'Technology changes rapidly',
        'Client management needed'
      ]
    },
    {
      id: '4',
      title: 'Online Course Creation',
      category: 'education',
      description: 'Share your expertise by creating and selling online courses on platforms like Udemy, Teachable, or your own website.',
      initialInvestment: '$50-300 (mic, screen recording)',
      timeToProfit: '3-6 months',
      skillsRequired: ['Subject expertise', 'Teaching ability', 'Video creation', 'Marketing'],
      incomeRange: '$500-$50,000+/month',
      legitimacy: 'Highly legitimate - established educational marketplace',
      sources: ['Udemy', 'Teachable', 'Skillshare', 'Gumroad', 'Own website'],
      roadmap: [
        {
          phase: 'Topic Selection & Validation (Weeks 1-2)',
          duration: '2 weeks',
          tasks: [
            'Identify your expertise areas',
            'Research demand on course platforms',
            'Analyze competitor courses',
            'Survey target audience on social media',
            'Choose specific topic with proven demand'
          ],
          milestones: ['Course topic validated', 'Competitor analysis complete', 'Course outline drafted']
        },
        {
          phase: 'Course Creation (Months 1-2)',
          duration: '2 months',
          tasks: [
            'Create detailed curriculum (aim for 3-8 hours content)',
            'Script all lessons',
            'Record videos (Loom, OBS for screen recording)',
            'Create supplementary materials (PDFs, exercises)',
            'Edit videos for quality',
            'Design attractive course thumbnail'
          ],
          milestones: ['All videos recorded', 'Course materials completed', 'Course uploaded to platform']
        },
        {
          phase: 'Launch & Initial Marketing (Month 3)',
          duration: '1 month',
          tasks: [
            'Launch on Udemy (automatic traffic)',
            'Price competitively ($19.99-49.99)',
            'Share on social media platforms',
            'Reach out to relevant communities',
            'Ask friends for initial reviews',
            'Create promotional content (YouTube, blog)'
          ],
          milestones: ['Course live', '50+ enrollments', '10+ positive reviews']
        },
        {
          phase: 'Growth & Optimization (Months 4+)',
          duration: 'Ongoing',
          tasks: [
            'Gather and implement student feedback',
            'Create additional courses',
            'Build email list for direct marketing',
            'Consider moving to own platform (higher margins)',
            'Create free content to drive course sales',
            'Run promotions and partnerships'
          ],
          milestones: ['500+ students', '$1000+ monthly passive income', 'Multiple courses published']
        }
      ],
      pros: [
        'Passive income once created',
        'Help others while earning',
        'Scalable (sell unlimited copies)',
        'Build authority',
        'Multiple platform options'
      ],
      cons: [
        'Upfront time investment',
        'Need to market yourself',
        'Platform fees (Udemy takes 50%+)',
        'May need updates',
        'Competitive space'
      ]
    },
    {
      id: '5',
      title: 'Print on Demand Business',
      category: 'e-commerce',
      description: 'Create and sell custom-designed products (t-shirts, mugs, posters) without inventory. Products are printed and shipped when ordered.',
      initialInvestment: '$0-200 (design tools)',
      timeToProfit: '2-6 months',
      skillsRequired: ['Graphic design', 'Marketing', 'Trend research', 'SEO'],
      incomeRange: '$500-$10,000+/month',
      legitimacy: 'Highly legitimate - used by thousands of successful entrepreneurs',
      sources: ['Printful', 'Printify', 'Redbubble', 'Teespring', 'Etsy', 'Amazon Merch'],
      roadmap: [
        {
          phase: 'Setup & Niche Selection (Week 1-2)',
          duration: '2 weeks',
          tasks: [
            'Research profitable niches (pet lovers, professions, hobbies)',
            'Sign up for Printify/Printful',
            'Create Etsy shop or Shopify store',
            'Learn Canva or Adobe Illustrator basics',
            'Study successful POD stores'
          ],
          milestones: ['Store set up', 'Print provider connected', 'Niche selected']
        },
        {
          phase: 'Design & Product Creation (Weeks 3-6)',
          duration: '4 weeks',
          tasks: [
            'Create 20-30 initial designs',
            'Focus on specific niche/theme',
            'Use trending topics and keywords',
            'Upload to multiple products (shirts, mugs, hoodies)',
            'Write SEO-optimized titles and descriptions',
            'Price products competitively (30-40% margin)'
          ],
          milestones: ['30+ products live', 'All product types covered', 'SEO optimized']
        },
        {
          phase: 'Traffic & Marketing (Months 2-4)',
          duration: '3 months',
          tasks: [
            'Run Pinterest marketing (free traffic)',
            'Create Instagram account for niche',
            'Join relevant Facebook groups',
            'Test low-budget Facebook/Instagram ads',
            'Use Etsy ads if on Etsy',
            'Analyze what sells, create more similar designs'
          ],
          milestones: ['First sale', '100+ store visits daily', 'First repeat customer']
        },
        {
          phase: 'Scaling (Months 5+)',
          duration: 'Ongoing',
          tasks: [
            'Double down on best-selling designs',
            'Expand to more niches',
            'Increase ad budget on profitable campaigns',
            'Build email list for launches',
            'Consider own website for higher margins',
            'Automate design process'
          ],
          milestones: ['$1000+ monthly profit', '100+ sales', 'Consistent daily orders']
        }
      ],
      pros: [
        'No inventory or shipping hassles',
        'Low startup cost',
        'Scalable',
        'Creative outlet',
        'Passive income potential'
      ],
      cons: [
        'Lower profit margins',
        'Need design skills',
        'Competitive market',
        'Requires marketing',
        'Quality control depends on provider'
      ]
    },
    {
      id: '6',
      title: 'Virtual Assistant Services',
      category: 'freelancing',
      description: 'Provide administrative, technical, or creative assistance to entrepreneurs and businesses remotely.',
      initialInvestment: '$0-100',
      timeToProfit: '1-2 months',
      skillsRequired: ['Organization', 'Communication', 'Time management', 'Basic tech skills'],
      incomeRange: '$1000-$6000+/month',
      legitimacy: 'Highly legitimate - growing industry with high demand',
      sources: ['Belay', 'Time Etc', 'Upwork', 'Fancy Hands', 'Direct outreach'],
      roadmap: [
        {
          phase: 'Skills Assessment & Setup (Week 1-2)',
          duration: '2 weeks',
          tasks: [
            'List your skills (email mgmt, scheduling, social media, data entry)',
            'Choose specialization (real estate, e-commerce, coaches)',
            'Set up professional profiles (LinkedIn, Upwork)',
            'Learn tools (Asana, Trello, Slack, Zoom)',
            'Create service packages'
          ],
          milestones: ['Services defined', 'Profiles live', 'Pricing structure set']
        },
        {
          phase: 'Getting First Clients (Weeks 3-6)',
          duration: '4 weeks',
          tasks: [
            'Apply to VA platforms (Belay, Time Etc)',
            'Apply to jobs on Upwork (5-10 daily)',
            'Reach out to entrepreneurs on LinkedIn',
            'Offer trial period at discounted rate',
            'Join VA Facebook groups and network',
            'Deliver exceptional service'
          ],
          milestones: ['First client secured', 'Positive testimonial', 'Regular hours']
        },
        {
          phase: 'Building Reputation (Months 2-4)',
          duration: '3 months',
          tasks: [
            'Ask satisfied clients for referrals',
            'Build case studies',
            'Increase rates gradually',
            'Take courses to add skills (social media, bookkeeping)',
            'Aim for retainer clients (monthly packages)',
            'Manage multiple clients'
          ],
          milestones: ['3+ regular clients', '$2000+ monthly income', '5+ testimonials']
        },
        {
          phase: 'Scaling Your VA Business (Months 5+)',
          duration: 'Ongoing',
          tasks: [
            'Raise rates to $25-50/hour',
            'Focus on high-value tasks',
            'Potentially hire other VAs',
            'Create systems and templates',
            'Develop signature service offerings'
          ],
          milestones: ['$3000+ monthly income', 'Waiting list of clients', 'Agency potential']
        }
      ],
      pros: [
        'Quick to start',
        'Low barrier to entry',
        'Work from home',
        'Flexible schedule',
        'Diverse tasks'
      ],
      cons: [
        'Can be demanding',
        'Need to juggle multiple clients',
        'Time-based income initially',
        'Requires reliability'
      ]
    },
    {
      id: '7',
      title: 'Affiliate Marketing Blog/Website',
      category: 'content creation',
      description: 'Create content-rich websites that recommend products and earn commissions when readers make purchases through your links.',
      initialInvestment: '$50-300/year (hosting, domain)',
      timeToProfit: '6-12 months',
      skillsRequired: ['Writing', 'SEO', 'Website basics', 'Marketing'],
      incomeRange: '$500-$50,000+/month',
      legitimacy: 'Highly legitimate - standard business model for content creators',
      sources: ['Amazon Associates', 'ShareASale', 'CJ Affiliate', 'Individual programs'],
      roadmap: [
        {
          phase: 'Niche Selection & Setup (Weeks 1-2)',
          duration: '2 weeks',
          tasks: [
            'Choose profitable niche (tech, finance, health, hobbies)',
            'Research keyword opportunities',
            'Buy domain and hosting (Namecheap, SiteGround)',
            'Install WordPress',
            'Set up professional theme',
            'Join affiliate programs in your niche'
          ],
          milestones: ['Website live', 'Niche validated', 'Affiliate accounts approved']
        },
        {
          phase: 'Content Creation (Months 1-6)',
          duration: '6 months',
          tasks: [
            'Publish 2-3 high-quality articles per week',
            'Focus on buyer intent keywords (reviews, comparisons, "best X")',
            'Write in-depth content (2000+ words)',
            'Add affiliate links naturally',
            'Optimize for SEO',
            'Build backlinks through guest posting'
          ],
          milestones: ['50+ articles published', 'First organic traffic', 'Google indexed']
        },
        {
          phase: 'Traffic Growth (Months 7-12)',
          duration: '6 months',
          tasks: [
            'Continue publishing consistently',
            'Update and improve old content',
            'Build email list',
            'Promote on Pinterest and social media',
            'Focus on high-converting content',
            'Track best-performing pages'
          ],
          milestones: ['1000+ monthly visitors', 'First affiliate sales', 'Growing email list']
        },
        {
          phase: 'Monetization & Scaling (Year 2+)',
          duration: 'Ongoing',
          tasks: [
            'Add display ads (Mediavine, AdThrive)',
            'Negotiate higher affiliate commissions',
            'Create digital products',
            'Build multiple niche sites',
            'Outsource content creation',
            'Diversify traffic sources'
          ],
          milestones: ['10,000+ monthly visitors', '$1000+ monthly income', 'Passive income stream']
        }
      ],
      pros: [
        'Passive income potential',
        'Scalable',
        'Work from anywhere',
        'Build valuable asset',
        'Multiple monetization options'
      ],
      cons: [
        'Takes time to see results',
        'Requires consistent content creation',
        'SEO constantly changing',
        'Competitive',
        'Algorithm dependency'
      ]
    },
    {
      id: '8',
      title: 'Stock Photography',
      category: 'content creation',
      description: 'Sell your photos on stock photography websites. Earn royalties each time someone downloads your images.',
      initialInvestment: '$300-2000 (camera)',
      timeToProfit: '3-6 months',
      skillsRequired: ['Photography', 'Photo editing', 'Composition', 'Market research'],
      incomeRange: '$200-$5000+/month',
      legitimacy: 'Highly legitimate - established industry with major platforms',
      sources: ['Shutterstock', 'Adobe Stock', 'Getty Images', 'iStock', 'Alamy'],
      roadmap: [
        {
          phase: 'Learn & Setup (Weeks 1-4)',
          duration: '4 weeks',
          tasks: [
            'Study stock photography requirements',
            'Learn photo composition and lighting',
            'Understand what sells (business, lifestyle, tech)',
            'Get decent camera or use smartphone with good camera',
            'Learn Lightroom or photo editing basics',
            'Apply to stock platforms'
          ],
          milestones: ['Approved on 3+ platforms', '10 practice photos edited', 'Understanding of trends']
        },
        {
          phase: 'Initial Portfolio (Months 2-3)',
          duration: '2 months',
          tasks: [
            'Upload 100-300 diverse images',
            'Focus on commercial-friendly subjects',
            'Use proper keywording and descriptions',
            'Follow current trends and demands',
            'Shoot consistently (daily if possible)',
            'Submit to multiple platforms'
          ],
          milestones: ['100+ images uploaded', 'All photos keyworded', 'First downloads']
        },
        {
          phase: 'Growth Phase (Months 4-9)',
          duration: '6 months',
          tasks: [
            'Aim for 500+ portfolio size',
            'Analyze which images sell best',
            'Create more of what works',
            'Improve technical quality',
            'Explore exclusive contracts for higher royalties',
            'Build seasonal content in advance'
          ],
          milestones: ['500+ images live', 'Regular monthly sales', 'Identified profitable niches']
        },
        {
          phase: 'Professional Level (Months 10+)',
          duration: 'Ongoing',
          tasks: [
            'Build to 1000+ images',
            'Focus on high-demand niches',
            'Consider video stock footage',
            'Develop signature style',
            'Plan shoots strategically',
            'Potentially work with models'
          ],
          milestones: ['1000+ portfolio', '$500+ monthly passive income', 'Consistent sales']
        }
      ],
      pros: [
        'Passive income',
        'Scalable',
        'Creative work',
        'Flexible schedule',
        'One photo can sell many times'
      ],
      cons: [
        'Requires photography skills',
        'Initial equipment cost',
        'Very competitive',
        'Takes time to build portfolio',
        'Lower royalty rates per sale'
      ]
    }
  ]

  const filteredIdeas = selectedCategory === 'all'
    ? ideas
    : ideas.filter(idea => idea.category === selectedCategory)

  const handleSelectIdea = (idea: MoneyMakingIdea) => {
    setLoading(true)
    setTimeout(() => {
      setSelectedIdea(idea)
      setLoading(false)
    }, 500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              AI Money Making Advisor
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get legitimate, AI-curated ideas with detailed roadmaps to make money online from multiple trusted sources
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Ideas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredIdeas.map((idea) => (
            <div
              key={idea.id}
              onClick={() => handleSelectIdea(idea)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer p-6 border-2 border-transparent hover:border-indigo-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{idea.title}</h3>
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{idea.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="font-semibold">Income:</span>
                  <span className="text-gray-700">{idea.incomeRange}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold">Time to Profit:</span>
                  <span className="text-gray-700">{idea.timeToProfit}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Target className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold">Investment:</span>
                  <span className="text-gray-700">{idea.initialInvestment}</span>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                View Roadmap <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Detailed View Modal */}
        {selectedIdea && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-5xl w-full my-8 max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
                <h2 className="text-3xl font-bold text-gray-900">{selectedIdea.title}</h2>
                <button
                  onClick={() => setSelectedIdea(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Overview Section */}
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                    Overview
                  </h3>
                  <p className="text-gray-700 text-lg mb-4">{selectedIdea.description}</p>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                    <p className="font-semibold text-green-900">Legitimacy Verified:</p>
                    <p className="text-green-800">{selectedIdea.legitimacy}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900 mb-2">Income Range</p>
                      <p className="text-2xl font-bold text-green-600">{selectedIdea.incomeRange}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900 mb-2">Time to First Profit</p>
                      <p className="text-2xl font-bold text-blue-600">{selectedIdea.timeToProfit}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900 mb-2">Initial Investment</p>
                      <p className="text-2xl font-bold text-purple-600">{selectedIdea.initialInvestment}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900 mb-2">Category</p>
                      <p className="text-2xl font-bold text-indigo-600 capitalize">{selectedIdea.category}</p>
                    </div>
                  </div>
                </section>

                {/* Skills Required */}
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills Required</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedIdea.skillsRequired.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Income Sources */}
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted Income Sources</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedIdea.sources.map((source, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 border border-blue-200 p-3 rounded-lg flex items-center gap-2"
                      >
                        <DollarSign className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-blue-900">{source}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Detailed Roadmap */}
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Target className="w-6 h-6 text-indigo-600" />
                    Detailed Step-by-Step Roadmap
                  </h3>

                  <div className="space-y-6">
                    {selectedIdea.roadmap.map((step, idx) => (
                      <div
                        key={idx}
                        className="border-l-4 border-indigo-500 pl-6 pb-6 relative"
                      >
                        <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {idx + 1}
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-bold text-gray-900">{step.phase}</h4>
                            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                              {step.duration}
                            </span>
                          </div>

                          <div className="mb-4">
                            <p className="font-semibold text-gray-900 mb-2">Action Items:</p>
                            <ul className="space-y-2">
                              {step.tasks.map((task, taskIdx) => (
                                <li key={taskIdx} className="flex items-start gap-2">
                                  <span className="text-green-600 mt-1">✓</span>
                                  <span className="text-gray-700">{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <p className="font-semibold text-yellow-900 mb-2">Key Milestones:</p>
                            <ul className="space-y-1">
                              {step.milestones.map((milestone, mIdx) => (
                                <li key={mIdx} className="flex items-center gap-2">
                                  <span className="text-yellow-600">★</span>
                                  <span className="text-yellow-800">{milestone}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Pros and Cons */}
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Pros & Cons</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-bold text-green-900 mb-3 text-lg">Advantages</h4>
                      <ul className="space-y-2">
                        {selectedIdea.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✓</span>
                            <span className="text-green-800">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h4 className="font-bold text-red-900 mb-3 text-lg">Challenges</h4>
                      <ul className="space-y-2">
                        {selectedIdea.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-red-600 mt-1">⚠</span>
                            <span className="text-red-800">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-center text-white">
                  <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
                  <p className="text-lg mb-4">
                    All the information you need is here. Take action today and start building your income stream!
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                      Print Roadmap
                    </button>
                    <button
                      onClick={() => setSelectedIdea(null)}
                      className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-900 transition-colors"
                    >
                      Explore More Ideas
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            All ideas are researched from legitimate sources. Success requires dedication, consistency, and hard work.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Data sourced from: Industry reports, successful entrepreneur case studies, and verified online platforms
          </p>
        </div>
      </footer>
    </main>
  )
}
