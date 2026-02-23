import React from 'react';
import Link from 'next/link';
import { MessageSquare, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const navLinks = ['Work', 'Expertise', 'Contact'];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-bg-secondary bg-bg-primary/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* Logo */}
        <Link 
          href="#home" 
          className="text-lg font-bold tracking-tight text-text-primary transition-colors hover:text-action"
        >
          Muhammad Bilal Rafique<span className="text-action">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Button 
          asChild 
          className="hidden md:flex bg-action hover:bg-action-hover text-white transition-all"
        >
          <Link href="#contact">
            <MessageSquare className="mr-2 h-4 w-4" />
            Let's Talk
          </Link>
        </Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6 text-text-primary" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pl-5 bg-bg-primary border-bg-secondary">
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-medium text-text-muted transition-colors hover:text-action"
                >
                  {item}
                </Link>
              ))}
              <Button 
                asChild 
                className="mt-4 w-full bg-action hover:bg-action-hover text-white"
              >
                <Link href="#contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Let's Talk
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
        
      </div>
    </header>
  );
};

export default Navbar;