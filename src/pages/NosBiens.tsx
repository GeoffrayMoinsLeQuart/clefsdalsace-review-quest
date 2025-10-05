import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Filter, TrendingUp, Home, Bed, Square, ArrowRight } from "lucide-react";
import { fetchProperties, urlFor } from "@/lib/sanity";
import { Property } from "@/types/sanity";

const NosBiens = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (error) {
        console.error("Erreur lors du chargement des biens:", error);
        // Fallback data if Sanity fails
        setProperties([
          {
            _id: "1",
            title: "Tour de l'Europe - T3 90m² Vue Panoramique",
            slug: { current: "tour-europe-t3" },
            type: "conciergerie",
            area: 90,
            bedrooms: 2,
            bathrooms: 1,
            location: "Mulhouse",
            price: 2100,
            status: "available",
            description: "Appartement premium au 8ème étage avec vue imprenable. Hausse de 40% des revenus après notre prise en charge.",
            images: [],
            features: ["Vue panoramique", "Balcon", "Parking"],
            revenue: {
              before: "1500€/mois",
              after: "2100€/mois",
              increase: "+40%"
            }
          },
          {
            _id: "2",
            title: "Centre Mulhouse - T3 Cosy & Moderne",
            slug: { current: "centre-mulhouse-t3" },
            type: "conciergerie",
            area: 50,
            bedrooms: 2,
            bathrooms: 1,
            location: "Mulhouse",
            price: 1600,
            status: "available",
            description: "Optimisation complète réalisée. +30% de revenus grâce à notre stratégie de valorisation.",
            images: [],
            features: ["Centre ville", "Rénové", "Équipé"],
            revenue: {
              before: "1230€/mois",
              after: "1600€/mois",
              increase: "+30%"
            }
          },
          {
            _id: "3",
            title: "Rue Franklin - T3 Lumineux Meublé",
            slug: { current: "rue-franklin-t3" },
            type: "gestion-locative",
            area: 65,
            bedrooms: 2,
            bathrooms: 1,
            location: "Mulhouse",
            price: 820,
            status: "available",
            description: "Location longue durée valorisée. +300€ de loyer mensuel après transformation.",
            images: [],
            features: ["Lumineux", "Meublé", "Calme"],
            revenue: {
              before: "520€/mois",
              after: "820€/mois",
              increase: "+300€"
            }
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  const filteredProperties = activeFilter === "all" 
    ? properties 
    : properties.filter((p: Property) => p.type === activeFilter);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement des biens...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

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
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Nos Biens <span className="text-accent">Gérés</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Découvrez nos transformations réussies et résultats mesurables
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">{properties.length}</div>
                  <div className="text-sm text-white/80">Biens gérés</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">€2.1M</div>
                  <div className="text-sm text-white/80">Revenus générés</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">78%</div>
                  <div className="text-sm text-white/80">Taux occupation moyen</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Filtrer par :</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={activeFilter === "all" ? "default" : "outline"}
                  onClick={() => setActiveFilter("all")}
                  size="sm"
                >
                  Tous ({properties.length})
                </Button>
                <Button
                  variant={activeFilter === "conciergerie" ? "default" : "outline"}
                  onClick={() => setActiveFilter("conciergerie")}
                  size="sm"
                >
                  Conciergerie ({properties.filter((p: Property) => p.type === "conciergerie").length})
                </Button>
                <Button
                  variant={activeFilter === "gestion-locative" ? "default" : "outline"}
                  onClick={() => setActiveFilter("gestion-locative")}
                  size="sm"
                >
                  Gestion Locative ({properties.filter((p: Property) => p.type === "gestion-locative").length})
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => {
                const imageUrl = property.images && property.images.length > 0 
                  ? urlFor(property.images[0]).width(800).url()
                  : "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop";
                  
                return (
                  <div 
                    key={property._id}
                    className="group bg-card rounded-2xl overflow-hidden shadow-service hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={imageUrl} 
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {property.revenue && (
                        <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                          {property.revenue.increase}
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {property.type === "conciergerie" ? "Conciergerie" : "Gestion Locative"}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {property.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {property.description}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-border">
                        <div className="text-center">
                          <Square className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                          <div className="text-sm font-semibold">{property.area}m²</div>
                        </div>
                        <div className="text-center">
                          <Bed className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                          <div className="text-sm font-semibold">{property.bedrooms} ch.</div>
                        </div>
                        <div className="text-center">
                          <Home className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                          <div className="text-sm font-semibold">{property.location}</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Revenu mensuel :</span>
                          <span className="font-bold text-lg text-primary flex items-center gap-1">
                            {property.price}€
                            <TrendingUp className="w-4 h-4 text-accent" />
                          </span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full mt-6 group-hover:bg-primary group-hover:text-white transition-colors"
                        onClick={() => navigate(`/nos-biens/${property.slug?.current || property._id}`)}
                      >
                        Voir le détail
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-gradient-cta rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" 
                   style={{
                     backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                   }} 
              />
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">
                  Votre bien mérite les mêmes résultats
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Obtenez une estimation gratuite et découvrez votre potentiel de revenus
                </p>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="gap-2 text-lg px-8"
                  onClick={() => navigate('/contact')}
                >
                  Demander mon estimation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NosBiens;
