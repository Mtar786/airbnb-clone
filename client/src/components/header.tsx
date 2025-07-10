import { useState } from "react";
import { Link } from "wouter";
import { Menu, Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <svg className="w-8 h-8 text-airbnb-red mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-2xl font-bold text-airbnb-red">airbnb</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-airbnb-dark hover:text-airbnb-red transition-colors font-medium">
              Places to stay
            </Link>
            <button className="text-airbnb-dark hover:text-airbnb-red transition-colors font-medium">
              Experiences
            </button>
            <button className="text-airbnb-dark hover:text-airbnb-red transition-colors font-medium">
              Online Experiences
            </button>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:block text-airbnb-dark hover:text-airbnb-red transition-colors font-medium">
              Become a Host
            </Button>
            <Button variant="ghost" size="icon" className="p-2 rounded-full hover:bg-airbnb-light transition-colors">
              <Globe className="w-5 h-5 text-airbnb-dark" />
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden flex items-center space-x-2 border border-gray-300 rounded-full p-2 hover:shadow-lg transition-shadow">
                  <Menu className="w-4 h-4 text-airbnb-dark" />
                  <User className="w-6 h-6 text-airbnb-gray" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <Link href="/" className="text-airbnb-dark hover:text-airbnb-red transition-colors font-medium text-lg">
                    Places to stay
                  </Link>
                  <button className="text-airbnb-dark hover:text-airbnb-red transition-colors font-medium text-lg text-left">
                    Experiences
                  </button>
                  <button className="text-airbnb-dark hover:text-airbnb-red transition-colors font-medium text-lg text-left">
                    Online Experiences
                  </button>
                  <hr className="border-gray-200" />
                  <button className="text-airbnb-dark hover:text-airbnb-red transition-colors font-medium text-lg text-left">
                    Become a Host
                  </button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop User Menu */}
            <Button variant="ghost" className="hidden md:flex items-center space-x-2 border border-gray-300 rounded-full p-2 hover:shadow-lg transition-shadow">
              <Menu className="w-4 h-4 text-airbnb-dark" />
              <User className="w-6 h-6 text-airbnb-gray" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
