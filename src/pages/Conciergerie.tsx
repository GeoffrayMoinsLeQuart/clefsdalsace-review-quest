import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Check, Star, TrendingUp, Shield, Users, Sparkles, Clock, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Conciergerie = () => {
  const navigate = useNavigate();
  
  const faqItems = [
    {
      question: "Comment fonctionne le calcul de votre commission ?",
      answer: "Notre commission est calculée uniquement sur les revenus générés. Si vous gagnez 0€, nous gagnons 0€. C'est notre engagement : nous sommes rémunérés au résultat."
    },
    {
      question: "Quelle est la durée d'engagement minimum ?",
      answer: "Aucun engagement de durée n'est requis. Vous pouvez résilier à tout moment avec un préavis de 30 jours. Notre objectif est de vous satisfaire, pas de vous retenir."
    },
    {
      question: "Combien de temps faut-il pour commencer à recevoir des réservations ?",
      answer: "Généralement, les premières réservations arrivent dans les 7 à 15 jours suivant la mise en ligne de votre annonce. Nous optimisons votre référencement dès le départ pour des résultats rapides."
    },
    {
      question: "Qui s'occupe du ménage entre chaque location ?",
      answer: "Nous avons un réseau de professionnels du ménage formés et certifiés. Chaque prestation est contrôlée pour garantir un niveau de qualité constant."
    },
    {
      question: "Comment gérez-vous les problèmes ou dégradations ?",
      answer: "Nous effectuons un état des lieux systématique après chaque séjour. En cas de dégradation, nous gérons l'ensemble du processus : constat, déclaration, réparations et remboursement via les cautions ou assurances."
    },
    {
      question: "Puis-je utiliser mon logement personnellement pendant la gestion ?",
      answer: "Absolument ! Vous gardez un contrôle total sur votre calendrier via notre plateforme. Vous pouvez bloquer les dates souhaitées à tout moment pour votre usage personnel."
    },
    {
      question: "Que comprend le linge dans les formules Premium et Exclusive ?",
      answer: "Le linge inclut draps, taies, serviettes de bain et de toilette. Dans la formule Exclusive, nous fournissons du linge haut de gamme et gérons l'intégralité du lavage et du remplacement."
    },
    {
      question: "Comment puis-je suivre mes revenus et réservations ?",
      answer: "Vous avez accès 24/7 à votre espace propriétaire en ligne avec un tableau de bord détaillé : réservations, revenus, dépenses, avis clients, et rapports mensuels complets."
    }
  ];
  
  const services = [
    {
      icon: Home,
      title: "Gestion des Annonces",
      description: "Création et optimisation de vos annonces avec photos professionnelles, descriptions SEO et tarification dynamique.",
      features: ["Photos HD pro", "Descriptions optimisées", "Multi-plateformes"]
    },
    {
      icon: Users,
      title: "Gestion des Réservations",
      description: "Sélection rigoureuse des voyageurs, gestion du calendrier et optimisation des prix selon la saisonnalité.",
      features: ["Tarification dynamique", "Calendrier synchronisé", "Sélection voyageurs"]
    },
    {
      icon: Star,
      title: "Accueil & Conciergerie",
      description: "Accueil personnalisé 5⭐, remise des clés, assistance 24/7 et réponse instantanée aux demandes.",
      features: ["Check-in/out flexible", "Assistance 24/7", "Expérience premium"]
    },
    {
      icon: Sparkles,
      title: "Entretien du Bien",
      description: "Ménage hôtelier professionnel, linge de maison premium, maintenance préventive et réparations rapides.",
      features: ["Ménage professionnel", "Linge inclus", "Maintenance rapide"]
    },
    {
      icon: TrendingUp,
      title: "Optimisation Continue",
      description: "Analyse des performances, ajustement des tarifs, amélioration du taux d'occupation et maximisation des revenus.",
      features: ["Reporting mensuel", "Analyse concurrence", "Optimisation prix"]
    },
    {
      icon: Shield,
      title: "Gestion Administrative",
      description: "Déclarations fiscales, assurances, contrats et respect de la réglementation locale.",
      features: ["Conformité légale", "Déclarations", "Assurances"]
    }
  ];

  const pricing = [
    {
      name: "Essentiel",
      commission: "18%",
      description: "Pour débuter en toute sérénité",
      features: [
        "Gestion des annonces",
        "Photos professionnelles",
        "Tarification dynamique",
        "Accueil voyageurs",
        "Ménage professionnel",
        "Assistance 7j/7"
      ],
      highlighted: false
    },
    {
      name: "Premium",
      commission: "20%",
      description: "Notre formule la plus populaire",
      features: [
        "Tout Essentiel +",
        "Reporting détaillé mensuel",
        "Maintenance préventive",
        "Assistance 24/7",
        "Conseiller dédié"
      ],
      highlighted: true
    },
    {
      name: "Exclusive",
      commission: "24%",
      description: "Le service premium absolu",
      features: [
        "Tout Premium +",
        "Linge de maison inclus (linge premium)",
        "Décoration & aménagement",
        "Conciergerie personnalisée",
        "Photographe dédié"
      ],
      highlighted: false
    }
  ];

  const process = [
    {
      step: "1",
      title: "Audit Gratuit",
      description: "Visite de votre bien, analyse du potentiel locatif et estimation précise des revenus."
    },
    {
      step: "2",
      title: "Optimisation",
      description: "Photos professionnelles, aménagements conseillés et création des annonces optimisées."
    },
    {
      step: "3",
      title: "Lancement",
      description: "Publication sur toutes les plateformes et début de la gestion complète."
    },
    {
      step: "4",
      title: "Gestion Active",
      description: "Réservations, accueils, entretien et optimisation continue de vos revenus."
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
                Conciergerie Airbnb Premium
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Augmentez vos revenus de <span className="text-accent">+40%</span>
              </h1>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Gestion complète de votre bien en location courte durée. 
                Zéro stress, revenus maximisés, expérience 5 étoiles garantie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="gap-2 text-lg px-8"
                  onClick={() => navigate('/contact')}
                >
                  Demander une estimation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => navigate('/nos-biens')}
                >
                  Voir nos biens
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">Nos Prestations</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Un service <span className="text-primary">tout-en-un</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                De la création de l'annonce à l'entretien quotidien, nous gérons tout pour vous
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-service hover:shadow-elegant transition-all duration-300 border border-border/50 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
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
                4 étapes vers le <span className="text-primary">succès</span>
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
                Une tarification <span className="text-primary">simple & transparente</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Commission uniquement sur les revenus générés. Pas de frais cachés.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                      de commission
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
              Pas de frais d'installation • Pas d'engagement de durée • Résiliation à tout moment
            </p>
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
                Prêt à maximiser vos revenus ?
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Obtenez une estimation gratuite et personnalisée en moins de 24h
              </p>
              
              <Button 
                size="lg" 
                variant="secondary" 
                className="gap-2 text-lg px-8"
                onClick={() => navigate('/contact')}
              >
                Demander mon estimation gratuite
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Conciergerie;