function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            StadiumBook
          </h2>
          <p className="text-sm leading-6">
            Book premium sports stadiums easily and securely.
            Play your favorite sport without hassle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#booking" className="hover:text-white transition">Book Now</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Sports */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Supported Sports
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Football</li>
            <li>Cricket</li>
            <li>Baseball</li>
            <li>Hockey</li>
            <li>Basketball</li>
            <li>Badminton</li>
            <li>Volleyball</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>
          <p className="text-sm">📍 Kolkata, West Bengal</p>
          <p className="text-sm">📧 support@abcstadium.com</p>
          <p className="text-sm">📞 +91 9008007006</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} StadiumBook. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;