import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          ABC Stadium
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#booking" className="hover:text-blue-600 transition">
            Book
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>

         
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">
              {isOpen ? "✖" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#booking" onClick={() => setIsOpen(false)}>Book</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

          <a
            href="#booking"
            className="block bg-blue-600 text-white px-4 py-2 rounded-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;