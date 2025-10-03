import { TrendingUp } from "lucide-react";

const ResultsShowcase = () => {
  const results = [
    {
      title: "Tour de l'Europe - T3 90m²",
      before: "1500€/mois",
      after: "2100€/mois",
      increase: "+40%",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      type: "Conciergerie"
    },
    {
      title: "Centre Mulhouse - T3 50m²",
      before: "1230€/mois",
      after: "1600€/mois",
      increase: "+30%",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      type: "Conciergerie"
    },
    {
      title: "Rue Franklin - T3 65m²",
      before: "520€/mois",
      after: "820€/mois",
      increase: "+300€",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
      type: "Gestion Locative"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">Résultats Prouvés</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Nos dernières <span className="text-primary">transformations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des augmentations de revenus mesurables et garanties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-service hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={result.image} 
                  alt={result.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  {result.increase}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{result.title}</h3>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  {result.type}
                </span>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Avant :</span>
                    <span className="font-semibold line-through text-muted-foreground">{result.before}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Après :</span>
                    <span className="font-bold text-2xl text-primary flex items-center gap-1">
                      {result.after}
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;