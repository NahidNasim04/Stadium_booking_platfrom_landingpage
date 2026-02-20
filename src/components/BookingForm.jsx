import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    sport: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add validation here later
    navigate("/success");
  };

  return (
    <section
      id="booking"
      className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side - Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Book Your <span className="text-blue-600">Stadium Slot</span>
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Choose your preferred sport, select date & time,
            and confirm your booking in just a few clicks.
            Fast, secure and hassle-free.
          </p>

          {/* Trust Points */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <p className="text-gray-700 text-sm">
                Instant Booking Confirmation
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <p className="text-gray-700 text-sm">
                Secure & Encrypted Payments
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <p className="text-gray-700 text-sm">
                24/7 Customer Support
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Sport */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Sport
              </label>
              <select
                name="sport"
                value={formData.sport}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Choose a sport</option>
                <option>Cricket</option>
                <option>Football</option>
                <option>Baseball</option>
                <option>Hockey</option>
                <option>Basketball</option>
                <option>Badminton</option>
                <option>Volleyball</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Confirm Booking
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;