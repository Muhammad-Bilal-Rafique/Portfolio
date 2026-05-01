"use client";
import React from 'react';
import { Zap, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const navLinks = ['Results', 'What I Fix', 'Contact'];

  const hrefMap = {
    'Results': 'case-study',
    'What I Fix': 'expertise',
    'Contact': 'contact',
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-bg-secondary bg-bg-primary/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">

        {/* Logo + Tagline */}
        <button
          onClick={() => scrollTo('home')}
          className="flex flex-col leading-tight transition-colors hover:text-action group text-left"
        >
          <span className="text-base font-bold tracking-tight text-text-primary group-hover:text-action transition-colors">
            {"Muhammad Bilal Rafique"}<span className="text-action">{"."}</span>
          </span>
          <span className="text-xs font-medium text-action tracking-wide uppercase">
            {"Shopify Performance Specialist"}
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(hrefMap[item])}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary cursor-pointer"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button
          className="hidden md:flex bg-action hover:bg-action-hover text-white transition-all cursor-pointer"
          onClick={() => scrollTo('contact')}
        >
          <Zap className="mr-1 h-4 w-4" />
          {"Get Free Audit"}
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
                <button
                  key={item}
                  onClick={() => scrollTo(hrefMap[item])}
                  className="text-lg font-medium text-text-muted transition-colors hover:text-action text-left cursor-pointer"
                >
                  {item}
                </button>
              ))}
              <Button
                className="mt-4 w-full bg-action hover:bg-action-hover text-white cursor-pointer"
                onClick={() => scrollTo('contact')}
              >
                <Zap className="mr-2 h-4 w-4" />
                {"Get Free Audit"}
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
};

export default Navbar;