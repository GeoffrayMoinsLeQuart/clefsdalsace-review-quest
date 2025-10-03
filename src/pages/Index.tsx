import Hero from "@/components/Hero";
import ResultsShowcase from "@/components/ResultsShowcase";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import EstimationWidget from "@/components/EstimationWidget";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ResultsShowcase />
      <Services />
      <Testimonials />
      <ContactCTA />
      <EstimationWidget />
    </main>
  );
};

export default Index;
