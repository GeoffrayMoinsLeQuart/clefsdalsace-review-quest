import { Home, Key, TrendingUp, Shield, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      icon: Key,
      title: "Conciergerie Premium",
      description: "Gestion complète de votre bien : annonces, réservations, accueil 5⭐, ménage hôtelier",
      highlights: ["Photos pro", "Tarification dynamique", "Assistance 24/7"]
    },
    {
      icon: Home,
      title: "Gestion Locative",
      description: "Location longue durée avec valorisation optimale et stabilité des revenus",
      highlights: ["Bail meublé", "Sélection locataires", "Suivi régulier"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">Nos Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Deux formules, un seul <span className="text-primary">objectif</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Maximiser vos revenus locatifs en toute sérénité
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-service hover:shadow-elegant transition-all duration-300 border border-border/50"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full group">
                Découvrir ce service
                <TrendingUp className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Shield, title: "Transparence totale", desc: "Reporting détaillé mensuel" },
            { icon: HeartHandshake, title: "Proximité locale", desc: "Expert du marché mulhousien" },
            { icon: Sparkles, title: "Excellence service", desc: "Expérience 5 étoiles garantie" }
          ].map((value, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold mb-2">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;