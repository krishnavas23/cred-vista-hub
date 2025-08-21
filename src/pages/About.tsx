import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  HeadphonesIcon,
  Shield,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const About = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };

  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security with 99.9% uptime guarantee for your financial data."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of financial analysts and data scientists work around the clock."
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Recognized as the leading platform for credit intelligence and analysis."
    },
    {
      icon: TrendingUp,
      title: "Real-time Data",
      description: "Get instant access to real-time financial data and market insights."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-accent/20 to-background py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Cred Intel Ultimate
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're revolutionizing financial intelligence with cutting-edge technology 
              and comprehensive credit analysis tools for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Support</h3>
                      <p className="text-muted-foreground">support@credintelultimate.com</p>
                      <p className="text-sm text-muted-foreground">We typically respond within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/20 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone Support</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for premium users</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-financial-success/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-financial-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-muted-foreground">123 Financial District</p>
                      <p className="text-muted-foreground">New York, NY 10004</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-financial-warning/20 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-financial-warning" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                      <p className="text-muted-foreground">Weekend: Emergency support only</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Support Options */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HeadphonesIcon className="mr-2 h-5 w-5" />
                  Need Immediate Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" className="justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Priority Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;