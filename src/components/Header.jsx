import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About us", path: "/about" },
    { name: "Features", path: "/features" },
  ];

  const isActive = (path) => location.pathname === path;

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="relative z-40 backdrop-blur-lg">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between h-[93px]">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <img src={logo} alt="logo" className="h-8 md:h-10" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-[50px]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${
                    isActive(link.path) ? "text-[#DD24E1]" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <button className="bg-white rounded px-6 py-3 font-['Clash_Display'] font-semibold text-base leading-[18px] text-center tracking-[0.2px] text-black transition-all hover:scale-105">
                Let's Connect
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white z-50 relative"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-[#0D0B0C] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Gradient Glow */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] gradient-bg opacity-20 blur-[100px] pointer-events-none" />

          <div className="relative h-full flex flex-col p-6">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-white hover:text-[#DD24E1] transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo in Sidebar */}
            <div className="mb-12 mt-4">
              <img src={logo} alt="logo" className="h-8" />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-6 mb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-['Clash_Display'] font-medium transition-colors py-2 ${
                    isActive(link.path)
                      ? "text-[#DD24E1]"
                      : "text-white hover:text-[#DD24E1]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-white rounded-lg px-6 py-4 font-['Clash_Display'] font-semibold text-base text-black transition-all hover:scale-105 w-full"
            >
              Let's Connect
            </button>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-sm text-white/60 text-center">
                © {new Date().getFullYear()} NFTme
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
