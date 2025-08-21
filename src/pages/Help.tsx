import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Video, 
  Download,
  ChevronDown,
  ChevronRight,
  BarChart3,
  Shield,
  CreditCard,
  Settings,
  Users,
  MessageCircle
} from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const categories = [
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description: "Understanding charts, reports, and data visualization",
      badge: "Popular"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Account security, data protection, and privacy settings"
    },
    {
      icon: CreditCard,
      title: "Credit Analysis",
      description: "Credit scores, ratings, and issuer evaluations"
    },
    {
      icon: Settings,
      title: "Account Settings",
      description: "Profile management, preferences, and configurations"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Adding users, permissions, and collaboration features"
    },
    {
      icon: MessageCircle,
      title: "Support & Billing",
      description: "Getting help, subscription plans, and billing questions"
    }
  ];

  const faqItems = [
    {
      id: "getting-started",
      question: "How do I get started with Cred Intel Ultimate?",
      answer: "Getting started is easy! First, create your account by clicking the Sign Up button. Once registered, you'll be guided through our onboarding process where you can connect your financial data sources and customize your dashboard. Our setup wizard will help you configure your preferences and start analyzing your financial data immediately."
    },
    {
      id: "credit-scores",
      question: "How are credit scores calculated on the platform?",
      answer: "Our credit scoring system uses a proprietary algorithm that analyzes multiple factors including payment history, credit utilization, length of credit history, types of credit accounts, and recent credit inquiries. We pull data from major credit bureaus and combine it with real-time market data to provide the most accurate and up-to-date scores."
    },
    {
      id: "data-security",
      question: "How secure is my financial data?",
      answer: "We take data security extremely seriously. All data is encrypted using bank-grade AES-256 encryption both in transit and at rest. We're SOC 2 Type II certified and comply with all major financial data protection regulations including PCI DSS. Our systems undergo regular security audits and penetration testing."
    },
    {
      id: "real-time-updates",
      question: "How often is the data updated?",
      answer: "Most financial data is updated in real-time or within minutes of market changes. Credit scores are typically updated daily, while market data, stock prices, and financial news are updated continuously during market hours. Some institutional data may have a slight delay depending on the source."
    },
    {
      id: "export-reports",
      question: "Can I export reports and data?",
      answer: "Yes! You can export reports in multiple formats including PDF, Excel, and CSV. Premium users have access to automated report generation and can schedule regular exports. All charts and graphs can be exported as high-resolution images for presentations."
    },
    {
      id: "api-access",
      question: "Do you offer API access?",
      answer: "We offer comprehensive REST APIs for enterprise customers. Our API provides access to credit scores, financial data, and analytics. API documentation includes code examples in multiple programming languages. Contact our enterprise team for API key access and pricing."
    }
  ];

  const resources = [
    {
      title: "Quick Start Guide",
      description: "Get up and running in 5 minutes",
      type: "Guide",
      icon: BookOpen
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video walkthroughs",
      type: "Video",
      icon: Video
    },
    {
      title: "API Documentation",
      description: "Complete developer reference",
      type: "Documentation",
      icon: BookOpen
    },
    {
      title: "Best Practices Guide",
      description: "Tips for optimal platform usage",
      type: "Guide",
      icon: Download
    }
  ];

  const filteredFAQs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Help Center
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers to your questions and learn how to make the most of Cred Intel Ultimate
          </p>
          
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search for help articles, guides, or FAQs..."
              className="pl-10 py-3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </div>
                  {category.badge && (
                    <Badge variant="secondary">{category.badge}</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Resources */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Popular Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((resource, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <resource.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <Badge variant="outline">{resource.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="mr-2 h-5 w-5" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <Collapsible key={item.id} open={openItems.includes(item.id)}>
                  <CollapsibleTrigger 
                    className="flex items-center justify-between w-full p-4 text-left bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => toggleItem(item.id)}
                  >
                    <span className="font-semibold">{item.question}</span>
                    {openItems.includes(item.id) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 py-3">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
            
            {filteredFAQs.length === 0 && searchQuery && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Try searching with different keywords or contact our support team
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Support */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Still need help?</h3>
          <p className="text-muted-foreground mb-4">
            Our support team is here to help you succeed with Cred Intel Ultimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4 text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Live Chat</h4>
                <p className="text-sm text-muted-foreground">Get instant help</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4 text-center">
                <BookOpen className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold">Knowledge Base</h4>
                <p className="text-sm text-muted-foreground">Detailed articles</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;