import { ArrowRight, TrendingUp, MapPin, Home } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const ResultsSection = () => {
  const navigate = useNavigate();

  const caseStudies = [
    {
      location: "Strasbourg - Hypercentre",
      propertyType: "T2 - 45m²",
      before: "850€/mois",
      after: "1 420€/mois",
      increase: "+67%",
      duration: "2 mois",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
    },
    {
      location: "Colmar - Petite Venise",
      propertyType: "Studio - 28m²",
      before: "520€/mois",
      after: "890€/mois",
      increase: "+71%",
      duration: "1 mois",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
    },
    {
      location: "Mulhouse - Centre",
      propertyType: "T3 - 65m²",
      before: "780€/mois",
      after: "1 180€/mois",
      increase: "+51%",
      duration: "3 mois",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-primary">Résultats</span> Concrets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des transformations réelles, des revenus multipliés
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
            <div className="text-4xl font-bold text-primary mb-2">+47%</div>
            <div className="text-sm text-muted-foreground">Revenus moyens en plus</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 text-center">
            <div className="text-4xl font-bold text-accent mb-2">83%</div>
            <div className="text-sm text-muted-foreground">Taux d'occupation moyen</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
            <div className="text-4xl font-bold text-primary mb-2">2 mois</div>
            <div className="text-sm text-muted-foreground">Délai moyen pour atteindre +40%</div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.location}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    {study.location}
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-xs">
                    <Home className="w-3 h-3" />
                    {study.propertyType}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Avant</div>
                    <div className="text-lg font-bold line-through text-muted-foreground">
                      {study.before}
                    </div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Après</div>
                    <div className="text-lg font-bold text-primary">{study.after}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <div>
                    <div className="text-2xl font-bold text-accent">{study.increase}</div>
                    <div className="text-xs text-muted-foreground">d'augmentation</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">En {study.duration}</div>
                    <div className="text-xs text-muted-foreground">seulement</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => navigate("/contact")}
            className="gap-2"
          >
            Obtenir mon estimation gratuite
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Réponse sous 2h ouvrées • Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
