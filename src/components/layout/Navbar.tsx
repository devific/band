import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.svg";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "MUSIC", path: "/music" },
  { name: "CONTACT", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2",
          isScrolled
            ? "bg-bg-base border-border py-4"
            : "bg-transparent border-transparent py-6",
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="peXAppeal Logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "font-body font-bold text-lg tracking-widest transition-colors",
                    isActive
                      ? "text-accent"
                      : "text-text-main hover:text-accent",
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link to="/contact" className="brutal-btn px-6 py-2 text-lg">
              BOOK US
            </Link>
          </div>

          <button
            className="md:hidden text-text-main"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-base flex flex-col justify-center items-center px-5 pt-20">
          <div className="flex flex-col gap-8 text-center w-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-display text-6xl",
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-text-main",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="brutal-btn px-8 py-4 text-2xl mt-8 w-full"
            >
              BOOK US NOW
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
