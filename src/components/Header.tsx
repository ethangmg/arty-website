import React, { useState, useEffect } from 'react';

interface HeaderProps {
  className?: string;
  isProjectPage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ className = '', isProjectPage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About Us', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact Us', href: '#contact' }
  ];

  // Handle scroll detection and scroll spy
// ... existing code ...

  // Handle scroll detection and scroll spy
  useEffect(() => {
    if (isProjectPage) return; // Skip scroll detection on project pages

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById('home');
      
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsScrolled(scrollY > heroHeight * 0.8);
      }

      // Scroll spy for active section - check all sections including home
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      let currentSection = null;
      
      // Check sections in reverse order to prioritize the first one we encounter when scrolling up
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        
        // For home section, check if we're at the top or above the about section
        if (sectionId === 'home') {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            const aboutRect = aboutSection.getBoundingClientRect();
            // Check that heroSection is not null before accessing offsetHeight
            if (
              aboutRect.top > 100 ||
              (heroSection && scrollY < heroSection.offsetHeight * 0.5)
            ) {
              currentSection = 'home';
              break;
            }
          } else if (scrollY < 100) {
            currentSection = 'home';
            break;
          }
        } else {
          // For other sections, check if they're in view
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
        // Update URL when scrolling to a new section
        const newHash = `#${currentSection}`;
        if (window.location.hash !== newHash) {
          window.history.pushState(null, '', newHash);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProjectPage]);


  // Handle navigation
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // If we're on a project page, navigate to main page with hash
    if (isProjectPage) {
      window.location.href = `/${href}`;
      return;
    }
    
    // Normal navigation for main page
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Update URL without page reload
      window.history.pushState(null, '', href);
      
      // Smooth scroll to target
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile menu
    setIsMobileMenuOpen(false);
  };

  // Handle browser back/forward navigation (only for main page)
  useEffect(() => {
    if (isProjectPage) return; // Skip on project pages

    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.getElementById(hash.replace('#', ''));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isProjectPage]);

  //isScrolled || isProjectPage === true ? 'backdrop-blur-sm bg-white/50' : 'bg-transparent'
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg ${className}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/src/assets/logo/arty-studio-yellow-logo.png" 
              alt="Arty Studio Logo" 
              className="w-10 h-10"
            />
            <a 
              href={isProjectPage ? "/#home" : "#home"}
              onClick={(e) => handleNavClick(isProjectPage ? "/#home" : "#home", e)}
              className={`text-xl font-semibold transition-colors duration-300 ${
                isProjectPage ? 'text-gray-900' : (isScrolled ? 'text-gray-900' : 'text-white')
              }`}
            >
              ARTY STUDIO
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.filter(item => item.id !== 'home').map((item) => (
              <a
                key={item.id}
                href={isProjectPage ? `/${item.href}` : item.href}
                onClick={(e) => handleNavClick(isProjectPage ? `/${item.href}` : item.href, e)}
                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  isProjectPage 
                    ? 'text-gray-900 hover:text-gray-700' 
                    : (isScrolled 
                        ? 'text-gray-700 hover:text-gray-900' 
                        : 'text-white hover:text-gray-200')
                } ${
                  activeSection === item.id && !isProjectPage
                    ? (isScrolled ? 'text-gray-900' : 'text-white') 
                    : ''
                } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${
                  isProjectPage 
                    ? 'after:bg-gray-900' 
                    : (isScrolled ? 'after:bg-gray-900' : 'after:bg-white')
                }`}
              >
                {item.label}
                {activeSection === item.id && !isProjectPage && (
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-900' : 'bg-white'
                  }`} />
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isProjectPage 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : (isScrolled 
                      ? 'text-gray-700 hover:text-gray-900' 
                      : 'text-white hover:text-gray-200')
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
            {navItems.filter(item => item.id !== 'home').map((item) => (
              <a
                key={item.id}
                href={isProjectPage ? `/${item.href}` : item.href}
                onClick={(e) => {
                  handleNavClick(isProjectPage ? `/${item.href}` : item.href, e);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  activeSection === item.id && !isProjectPage
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
