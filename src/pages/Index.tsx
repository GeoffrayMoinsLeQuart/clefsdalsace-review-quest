import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ResultsShowcase from "@/components/ResultsShowcase";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import EstimationWidget from "@/components/EstimationWidget";
import RevenueCalculator from "@/components/RevenueCalculator";
import FAQ from "@/components/FAQ";
import GuaranteesSection from "@/components/GuaranteesSection";
import ResultsSection from "@/components/ResultsSection";
import { Helmet } from "react-helmet";

const Index = () => {
  const faqItems = [
    { question: "Comment fonctionne la conciergerie ?", answer: "Nous gérons tout : annonces, réservations, ménage, accueil et optimisation des revenus." },
    { question: "Puis-je utiliser mon bien quand je veux ?", answer: "Oui, vous gardez la main sur le calendrier et pouvez bloquer des dates à tout moment." },
    { question: "Quel gain moyen espérer ?", answer: "Entre +30% et +50% vs. location classique selon le bien et la saison." },
  ];
  return (
    <>
      <Helmet>
        <title>MadeIn Immo - Conciergerie Airbnb & Gestion Locative en Alsace</title>
        <meta name="description" content="Maximisez vos revenus locatifs avec MadeIn Immo. Conciergerie Airbnb premium et gestion locative professionnelle à Strasbourg, Colmar et Mulhouse. +40% de revenus dès le 1er mois." />
        <meta name="keywords" content="conciergerie airbnb, gestion locative, location courte durée, strasbourg, colmar, mulhouse, alsace, revenus locatifs" />
        <link rel="canonical" href="https://madein-immo.fr" />
        <meta property="og:title" content="MadeIn Immo - Conciergerie Airbnb & Gestion Locative" />
        <meta property="og:description" content="Maximisez vos revenus locatifs avec notre expertise en conciergerie Airbnb et gestion locative en Alsace." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://madein-immo.fr" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <ResultsShowcase />
        <ResultsSection />
        <Services />
        <GuaranteesSection />
        <FAQ items={faqItems} title="Questions fréquentes" subtitle="Tout ce qu'il faut savoir pour démarrer" />
        <section id="revenue-calculator" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Calculez vos <span className="text-primary">revenus potentiels</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Découvrez en quelques secondes combien vous pourriez gagner avec votre bien
                </p>
              </div>
              <RevenueCalculator />
            </div>
          </div>
        </section>
        <Testimonials />
        <ContactCTA />
        <EstimationWidget />
      </main>
      <Footer />
    </>
  );
};

export default Index;
