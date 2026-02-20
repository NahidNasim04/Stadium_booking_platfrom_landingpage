function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20250110/original/pngtree-evening-cricket-stadium-panorama-with-spectacular-lighting-picture-image_15952382.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to ABC Stadium</h1>
        <p className="mb-6 text-lg">
          Cricket, Football, Badminton & More – Reserve instantly.
        </p>
        <a
          href="#booking"
          className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
