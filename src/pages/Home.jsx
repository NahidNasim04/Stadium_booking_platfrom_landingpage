import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import BookingForm from "../components/BookingForm";
import Events from "../components/Events";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <BookingForm />
      <Events />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
