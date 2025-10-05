import { Shield, Clock, TrendingUp, Award, Headphones, FileCheck } from "lucide-react";

const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Sécurité Garantie",
      description: "Assurance complète et caution solidaire pour protéger votre bien",
    },
    {
      icon: Clock,
      title: "Réponse Sous 2h",
      description: "Disponibilité 7j/7 pour vous et vos voyageurs",
    },
    {
      icon: TrendingUp,
      title: "+40% de Revenus",
      description: "Optimisation tarifaire dynamique garantie dès le 1er mois",
    },
    {
      icon: Award,
      title: "Certification Qualité",
      description: "Partenaire officiel Airbnb et Booking.com",
    },
    {
      icon: Headphones,
      title: "Support Dédié",
      description: "Un interlocuteur unique pour toute la durée du contrat",
    },
    {
      icon: FileCheck,
      title: "Sans Engagement",
      description: "Contrat résiliable à tout moment avec préavis de 30 jours",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-primary">Garanties</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un engagement qualité pour votre tranquillité d'esprit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <guarantee.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Notre Promesse : Résultats Mesurables ou Remboursé
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Si nous n'atteignons pas +30% de revenus par rapport à votre situation actuelle dans les 3 premiers mois, 
            nous vous remboursons intégralement nos honoraires. C'est notre engagement qualité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
