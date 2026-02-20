function Events() {
  const events = [
    {
      title: "Inter College Football Championship",
      date: "12 Jan 2026",
      location: "DEF Stadium",
      category: "Football",
      image:
        "https://media.gettyimages.com/id/647672134/photo/football-players-playing-football.jpg?s=612x612&w=gi&k=20&c=jPQXwaf_E8dknDNI3-Q3pAJwDU0i3EXqNsZCMQVyW7U=",
    },
    {
      title: "City Cricket Premier League",
      date: "28 Feb 2025",
      location: "GHI Stadium",
      category: "Cricket",
      image:
        "https://thumbs.dreamstime.com/b/test-cricket-match-international-england-india-edgbaston-birmingham-england-uk-64683030.jpg ",
    },
    {
      title: "National Badminton Cup",
      date: "15 March 2025",
      location: "JKL Stadium",
      category: "Badminton",
      image:
        "https://thumbs.dreamstime.com/b/malaysia-open-badminton-championship-2009-7680266.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-blue-600">Previous Events</span>
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Take a look at some of the exciting sports events hosted
          through StadiumBook.
        </p>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-left text-white">
                <span className="bg-blue-600 text-xs px-3 py-1 rounded-full">
                  {event.category}
                </span>

                <h3 className="text-xl font-semibold mt-3">
                  {event.title}
                </h3>

                <p className="text-sm mt-2 opacity-90">
                  📅 {event.date}
                </p>

                <p className="text-sm opacity-90">
                  📍 {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Events;