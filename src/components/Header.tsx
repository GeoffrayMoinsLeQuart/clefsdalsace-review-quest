import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: "Accueil", href: "/" },
    {
      name: "Conciergerie",
      href: "/conciergerie",
      submenu: [
        { name: "Vue d'ensemble", href: "/conciergerie" },
        { name: "Nos services", href: "/conciergerie#services" },
        { name: "Tarifs", href: "/conciergerie#tarifs" },
        { name: "Process", href: "/conciergerie#process" },
      ]
    },
    {
      name: "Gestion Locative",
      href: "/gestion-locative",
      submenu: [
        { name: "Vue d'ensemble", href: "/gestion-locative" },
        { name: "Avantages", href: "/gestion-locative#avantages" },
        { name: "Services inclus", href: "/gestion-locative#services" },
      ]
    },
    { name: "Nos Biens", href: "/nos-biens" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Les Clés d'Alsace</div>
              <div className="text-xs text-muted-foreground">Conciergerie Premium</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary hover:bg-muted/50 transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </a>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-elegant border border-border py-2 animate-scale-in">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-muted hover:text-primary transition-colors"
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+33362147192" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>03 36 21 47 19 22</span>
            </a>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-muted hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-border space-y-3">
              <a href="tel:+33362147192" className="flex items-center justify-center gap-2 text-base font-medium text-gray-700">
                <Phone className="w-5 h-5" />
                <span>03 36 21 47 19 22</span>
              </a>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                Demander un devis
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;