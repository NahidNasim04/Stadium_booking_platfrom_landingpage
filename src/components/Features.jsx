
function Features() {
  const features = [
    {
      title: "Easy Online Booking",
      desc: "Book your favorite stadium in seconds with our smooth and simple interface.",
      icon: "⚡",
    },
    {
      title: "Multiple Sports Support",
      desc: "From football to badminton — choose from a wide range of sports facilities.",
      icon: "🏟️",
    },
    {
      title: "Instant Confirmation",
      desc: "Get immediate booking confirmation and secure your slot instantly.",
      icon: "✅",
    },
    {
      title: "Secure Payments",
      desc: "Safe and encrypted payment gateway for worry-free transactions.",
      icon: "🔐",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Why Choose <span className="text-blue-600">ABC Stadium?</span>
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Experience seamless stadium booking with powerful features designed
          for players, teams, and organizers.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl rounded-full bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;