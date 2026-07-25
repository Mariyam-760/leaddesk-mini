import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import LeadForm from "../components/LeadForm.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <Hero />
      <Features />
      <LeadForm />
      <Footer />
    </div>
  );
}
