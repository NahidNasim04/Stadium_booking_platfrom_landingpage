function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you
            24/7 with your stadium booking needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="font-semibold text-lg mb-2">📍 Our Location</h3>
              <p className="text-gray-600">
                Kolkata,West Bengal, India
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="font-semibold text-lg mb-2">📞 Call Us</h3>
              <p className="text-gray-600">+91 9008007006</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="font-semibold text-lg mb-2">📧 Email Us</h3>
              <p className="text-gray-600">support@abcstadiumb.com</p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-lg mb-2">
                Need Immediate Support?
              </h3>
              <p className="text-sm">
                Our support team is available 24/7 to assist you.
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Query
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
