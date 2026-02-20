function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image Section */}
        <div className="relative">
          <img
            src="https://blog.playo.co/wp-content/uploads/2021/06/Barc%CC%A7a-Football-Club-Camp-Nou-Experience-Tour-Tickets-in-Barcelona.jpeg"
            alt="Sports Stadium"
            className="rounded-2xl shadow-xl"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg hidden md:block">
            <p className="text-lg font-semibold">1500+</p>
            <p className="text-sm">Bookings Completed</p>
          </div>
        </div>

        {/* Right Content Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-blue-600">ABC Stadium</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            ABC Stadium is a modern sports stadium booking platform designed
            to make your sports experience seamless and stress-free.
            Whether you're organizing a tournament, training your team,
            or planning a friendly match — we make booking simple.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Our mission is to connect players, teams, and stadium owners
            through a secure, reliable, and easy-to-use digital platform.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-gray-100 p-6 rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600">15+</h3>
              <p className="text-sm text-gray-500">Premium Stadiums</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600">1K+</h3>
              <p className="text-sm text-gray-500">Happy Users</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600">24/7</h3>
              <p className="text-sm text-gray-500">Support</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="#booking"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Book Your Stadium Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;