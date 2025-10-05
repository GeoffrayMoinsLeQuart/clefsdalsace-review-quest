import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Check, Shield, TrendingUp, Users, FileCheck, Home, Clock, Euro } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GestionLocative = () => {
  const navigate = useNavigate();
  
  const faqItems = [
    {
      question: "Quelle est la différence entre gestion locative et conciergerie ?",
      answer: "La gestion locative concerne les locations longue durée (bail 12 mois minimum) avec des locataires stables. La conciergerie gère les locations courte durée (Airbnb, Booking) avec un turn-over élevé et des tarifs variables."
    },
    {
      question: "Comment sélectionnez-vous les locataires ?",
      answer: "Nous vérifions les revenus (3x le loyer minimum), analysons les 3 dernières fiches de paie, contactons les employeurs et anciens propriétaires, et vérifions l'absence de fichage bancaire."
    },
    {
      question: "Que se passe-t-il en cas d'impayé ?",
      answer: "Nous gérons l'intégralité de la procédure : relances amiables, mise en demeure, procédure judiciaire si nécessaire, et activation de la garantie loyers impayés si souscrite."
    },
    {
      question: "Puis-je résilier le mandat à tout moment ?",
      answer: "Oui, avec un préavis de 3 mois. Cependant, si un bail est en cours, nous vous recommandons de maintenir notre mandat jusqu'à son terme pour éviter toute confusion avec le locataire."
    },
    {
      question: "Gérez-vous aussi les locations meublées longue durée ?",
      answer: "Oui, nous gérons également les baux meublés (minimum 12 mois). Les honoraires restent identiques, avec quelques spécificités liées à la réglementation des meublés."
    }
  ];
  
  const advantages = [
    {
      icon: Shield,
      title: "Sécurité Juridique",
      description: "Bail conforme, état des lieux détaillé, respect de la législation en vigueur.",
      features: ["Bail réglementaire", "EDL contradictoire", "Conformité totale"]
    },
    {
      icon: Users,
      title: "Sélection Rigoureuse",
      description: "Vérification approfondie des dossiers locataires pour minimiser les risques d'impayés.",
      features: ["Vérification revenus", "Enquête approfondie", "Garanties validées"]
    },
    {
      icon: Euro,
      title: "Gestion Financière",
      description: "Encaissement des loyers, paiement des charges, provision pour travaux, comptabilité claire.",
      features: ["Appels de loyers", "Suivi trésorerie", "Relevés mensuels"]
    },
    {
      icon: FileCheck,
      title: "Administration Complète",
      description: "Déclarations fiscales, taxe foncière, charges de copropriété, révision annuelle des loyers.",
      features: ["Déclaration revenus", "Indexation loyers", "Charges copro"]
    },
    {
      icon: Home,
      title: "Entretien & Travaux",
      description: "Suivi des réparations, relation avec les artisans, contrôle qualité des interventions.",
      features: ["Maintenance préventive", "Devis travaux", "Suivi chantiers"]
    },
    {
      icon: Clock,
      title: "Disponibilité 7j/7",
      description: "Gestion des urgences locatives, assistance téléphonique, réponse rapide aux demandes.",
      features: ["Urgences 24/7", "Plateforme en ligne", "Reporting mensuel"]
    }
  ];

  const pricing = [
    {
      name: "Gestion Standard",
      commission: "7% HT",
      description: "L'essentiel de la gestion locative",
      features: [
        "Sélection des locataires",
        "Rédaction du bail",
        "État des lieux entrée/sortie",
        "Encaissement des loyers",
        "Quittances mensuelles",
        "Révision annuelle du loyer",
        "Déclaration fiscale annuelle"
      ],
      highlighted: false
    },
    {
      name: "Gestion Premium",
      commission: "9% HT",
      description: "Notre formule tout compris",
      features: [
        "Tout Standard +",
        "Garantie loyers impayés incluse",
        "Gestion complète des travaux",
        "Visites de contrôle semestrielles",
        "Accompagnement copropriété",
        "Optimisation fiscale",
        "Conseiller dédié",
        "Assistance juridique"
      ],
      highlighted: true
    },
    {
      name: "Gestion Exclusive",
      commission: "11% HT",
      description: "Pour un accompagnement haut de gamme",
      features: [
        "Tout Premium +",
        "Suivi juridique prioritaire",
        "Visites de contrôle trimestrielles",
        "Pilotage énergétique & travaux",
        "Rapports personnalisés",
        "Conseiller senior dédié"
      ],
      highlighted: false
    }
  ];

  const process = [
    {
      step: "1",
      title: "Audit Gratuit",
      description: "Évaluation de votre bien, estimation du loyer de marché et analyse du potentiel locatif."
    },
    {
      step: "2",
      title: "Mise en Location",
      description: "Annonces optimisées, visites qualifiées et sélection rigoureuse du locataire idéal."
    },
    {
      step: "3",
      title: "Entrée en Jouissance",
      description: "Signature du bail, état des lieux, dépôt de garantie et remise des clés."
    },
    {
      step: "4",
      title: "Gestion Pérenne",
      description: "Suivi mensuel, encaissement, maintenance et reporting transparent."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
               style={{
                 backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
               }} 
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-6">
                Gestion Locative Traditionnelle
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Louez en toute <span className="text-accent">sérénité</span>
              </h1>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Confiez la gestion de votre bien locatif à des experts. 
                Zéro tracas administratif, revenus sécurisés, conformité garantie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="gap-2 text-lg px-8"
                  onClick={() => navigate('/contact')}
                >
                  Demander un devis gratuit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => navigate('/contact')}
                >
                  Estimer mon loyer
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Grid */}
        <section id="avantages" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">Nos Avantages</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Une gestion <span className="text-primary">professionnelle</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                De la recherche du locataire à la gestion quotidienne, nous prenons tout en charge
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-service hover:shadow-elegant transition-all duration-300 border border-border/50 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <advantage.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground mb-4">{advantage.description}</p>
                  
                  <ul className="space-y-2">
                    {advantage.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">Notre Processus</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                4 étapes vers la <span className="text-primary">tranquillité</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-2xl p-8 shadow-service hover:shadow-elegant transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-glow">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="tarifs" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">Tarification</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Des honoraires <span className="text-primary">transparents</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Commission calculée sur les loyers encaissés. Pas de frais cachés.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricing.map((plan, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl p-8 ${
                    plan.highlighted 
                      ? 'bg-gradient-hero text-white shadow-glow scale-105' 
                      : 'bg-card shadow-service'
                  } transition-all duration-300`}
                >
                  {plan.highlighted && (
                    <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-semibold mb-4">
                      Recommandé
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`mb-6 ${plan.highlighted ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-8">
                    <span className="text-5xl font-bold">{plan.commission}</span>
                    <span className={`ml-2 ${plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                      des loyers HT
                    </span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 ${plan.highlighted ? 'text-accent' : 'text-primary'}`} />
                        <span className={plan.highlighted ? 'text-white' : ''}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    size="lg" 
                    variant={plan.highlighted ? "secondary" : "default"}
                    className="w-full"
                    onClick={() => navigate('/contact')}
                  >
                    Choisir {plan.name}
                  </Button>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8">
              <Clock className="inline w-4 h-4 mr-2" />
              Pas de frais de mise en gestion • Mandat résiliable • Transparence totale
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Gestion Locative vs <span className="text-primary">Conciergerie</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Deux services complémentaires pour maximiser la rentabilité de votre patrimoine
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-service">
                <h3 className="text-2xl font-bold mb-4">Gestion Locative</h3>
                <p className="text-muted-foreground mb-6">
                  Bail de 3 ans minimum, locataire unique, revenus stables et prévisibles
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Revenus garantis sur le long terme</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Gestion simplifiée, peu d'interventions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Locataire sélectionné et vérifié</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>7-9% de commission HT</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-hero text-white rounded-2xl p-8 shadow-glow">
                <h3 className="text-2xl font-bold mb-4">Conciergerie Airbnb</h3>
                <p className="text-white/90 mb-6">
                  Location courte durée, gestion active, revenus potentiellement +40% supérieurs
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5" />
                    <span>Revenus maximisés (+30-50%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5" />
                    <span>Flexibilité d'usage du bien</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5" />
                    <span>Gestion complète 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5" />
                    <span>15-18% de commission</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ items={faqItems} />

        {/* Final CTA */}
        <section className="py-20 bg-gradient-cta relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
               style={{
                 backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
               }} 
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prêt à louer sans stress ?
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Obtenez une estimation de loyer gratuite et un devis personnalisé en moins de 24h
              </p>
              
              <Button 
                size="lg" 
                variant="secondary" 
                className="gap-2 text-lg px-8"
                onClick={() => navigate('/contact')}
              >
                Demander mon devis gratuit
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GestionLocative;
