import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Propriétaire T2 Mulhouse",
      content: "Depuis que j'ai confié mon appartement aux Clés d'Alsace, mes revenus ont augmenté de 30% et je n'ai plus aucun souci à me faire. Leur équipe est réactive et professionnelle.",
      rating: 5,
      initials: "SM",
      color: "bg-primary"
    },
    {
      name: "Thomas Dubois",
      role: "Propriétaire Studio Colmar",
      content: "Service impeccable ! La gestion de mon bien est entre de bonnes mains. Les voyageurs sont ravis de l'accueil et mon appartement est toujours parfaitement entretenu.",
      rating: 5,
      initials: "TD",
      color: "bg-accent"
    },
    {
      name: "Marie Klein",
      role: "Propriétaire 2 biens Strasbourg",
      content: "Je recommande vivement Les Clés d'Alsace pour leur professionnalisme et leur connaissance du marché local. Mes deux appartements affichent un taux d'occupation exceptionnel.",
      rating: 5,
      initials: "MK",
      color: "bg-secondary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">Témoignages</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Ce que disent nos <span className="text-primary">clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des propriétaires satisfaits qui nous font confiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-testimonial hover:shadow-elegant transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`w-16 h-16 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-xl`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;