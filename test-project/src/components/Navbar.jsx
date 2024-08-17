import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa"; // Ensure these imports are included
import { LINKS } from "../constants";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 flex w-full flex-col items-center justify-center bg-black bg-opacity-5 backdrop-blur-lg lg:bg-transparent lg:bg-opacity-0">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 bg-white bg-opacity-5 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg shadow-black">
        <img src={logo} alt="logo" width={80} height={22} />
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20" : ""} hover:opacity-50`}
              onClick={(event) => handleScroll(event, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className="block p-4 text-center text-sm hover:opacity-50 uppercase tracking-tighter"
              onClick={(event) => handleScroll(event, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
