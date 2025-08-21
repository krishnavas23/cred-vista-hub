import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Home, 
  User, 
  LogIn, 
  Info, 
  HelpCircle, 
  Menu, 
  X,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/profile', label: 'Business Profile', icon: User },
    { href: '/about', label: 'About', icon: Info },
    { href: '/help', label: 'Help', icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/50 backdrop-blur-lg border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cred Intel Ultimate
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            <Link to="/login">
              <Button variant="outline" size="sm" className="ml-4">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors",
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" size="sm" className="mt-4">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;