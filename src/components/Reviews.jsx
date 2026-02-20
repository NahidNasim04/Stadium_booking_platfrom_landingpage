function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Football Player",
      rating: 5,
      text: "Booking was incredibly smooth. The stadium quality was top-notch and confirmation was instant. Highly recommended!",
    },
    {
      name: "Ayesha Khan",
      role: "Badminton Coach",
      rating: 4,
      text: "Very easy to use platform. I booked for my academy students and everything was perfectly managed.",
    },
    {
      name: "Aman Verma",
      role: "Cricket Team Captain",
      rating: 5,
      text: "The best stadium booking experience I've had. Clean UI, secure payment and fast response.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          What Our <span className="text-blue-600">Users Say</span>
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Trusted by players, coaches, and teams across the city.
        </p>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4 text-yellow-400 text-lg">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="text-left">
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Reviews;
