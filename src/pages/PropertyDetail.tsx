import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Bed, Bath, TrendingUp, Check, ArrowLeft } from "lucide-react";
import { fetchPropertyBySlug, urlFor } from "@/lib/sanity";
import { Property } from "@/types/sanity";

// Helper pour gérer les images Sanity ou URLs directes
const getImageUrl = (image: any, width = 800): string => {
  if (typeof image === 'string') {
    // Si c'est déjà une URL, l'utiliser directement
    return image;
  }
  // Sinon, c'est un asset Sanity
  try {
    return urlFor(image).width(width).url();
  } catch (error) {
    // Fallback si l'asset est malformé
    return "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop";
  }
};

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperty = async () => {
      if (!id) return;
      
      try {
        const data = await fetchPropertyBySlug(id);
        if (data) {
          setProperty(data);
        } else {
          // Fallback data
          setProperty({
            _id: id,
            title: "Appartement T3 - Centre Strasbourg",
            slug: { current: id },
            description: "Magnifique appartement T3 situé en plein centre de Strasbourg, idéalement placé pour la location courte durée. Entièrement rénové avec goût, il offre tout le confort moderne pour accueillir vos voyageurs dans les meilleures conditions.",
            price: 1800,
            area: 75,
            bedrooms: 2,
            bathrooms: 1,
            location: "Strasbourg Centre",
            type: "conciergerie",
            status: "available",
            images: [],
            features: [
              "Wifi haut débit",
              "Cuisine équipée",
              "Lave-linge",
              "Parking privé",
              "Balcon",
              "Proximité transports"
            ],
            amenities: [
              "Draps et serviettes fournis",
              "Produits d'accueil",
              "Netflix inclus",
              "Guide touristique"
            ],
            revenue: {
              before: "1800€/mois",
              after: "2500€/mois",
              increase: "+39%"
            },
            details: {
              floor: 3,
              parking: true,
              elevator: true,
              balcony: true,
              furnished: true
            }
          });
        }
      } catch (error) {
        console.error("Erreur lors du chargement du bien:", error);
        // Fallback local si Sanity n'est pas configuré
        setProperty({
          _id: id,
          title: "Appartement T3 - Centre Strasbourg",
          slug: { current: id },
          description: "Magnifique appartement T3 situé en plein centre de Strasbourg, idéal pour la location courte durée.",
          price: 1800,
          area: 75,
          bedrooms: 2,
          bathrooms: 1,
          location: "Strasbourg Centre",
          type: "conciergerie",
          status: "available",
          images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
          ] as any,
          features: ["Wifi haut débit", "Cuisine équipée", "Lave-linge", "Balcon"],
          amenities: ["Draps et serviettes fournis", "Produits d'accueil"],
          revenue: { before: "1800€/mois", after: "2500€/mois", increase: "+39%" },
          details: { floor: 3, parking: true, elevator: true, balcony: true, furnished: true }
        } as any);
      } finally {
        setLoading(false);
      }
    };

    loadProperty();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!property) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Bien non trouvé</h2>
            <Button onClick={() => navigate('/nos-biens')}>
              Retour à nos biens
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const mainImage = property.images && property.images.length > 0
    ? getImageUrl(property.images[0], 1200)
    : "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop";

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="bg-muted/30 py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/nos-biens")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux biens
            </Button>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <img 
                  src={mainImage} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {property.images && property.images.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {property.images.slice(1, 4).map((img, index) => (
                    <img 
                      key={index}
                      src={getImageUrl(img, 800)}
                      alt={`${property.title} ${index + 2}`}
                      className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {property.type === 'conciergerie' ? 'Conciergerie' : 'Gestion Locative'}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{property.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-muted/30 rounded-2xl">
                  <div className="text-center">
                    <Home className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{property.area}m²</div>
                    <div className="text-sm text-muted-foreground">Surface</div>
                  </div>
                  <div className="text-center">
                    <Bed className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{property.bedrooms}</div>
                    <div className="text-sm text-muted-foreground">Chambres</div>
                  </div>
                  <div className="text-center">
                    <Bath className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{property.bathrooms}</div>
                    <div className="text-sm text-muted-foreground">Salles de bain</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {property.features && property.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Caractéristiques</h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {property.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {property.amenities && property.amenities.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Équipements inclus</h3>
                    <ul className="space-y-2">
                      {property.amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-accent" />
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gradient-hero text-white p-8 rounded-2xl shadow-glow sticky top-24">
                  <h3 className="text-2xl font-bold mb-6">Performance Locative</h3>
                  
                  {property.revenue ? (
                    <>
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-white/90">Revenus actuels</span>
                          <span className="text-xl font-semibold line-through">{property.revenue.before}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white/90">Revenus estimés</span>
                          <span className="text-3xl font-bold text-accent">{property.revenue.after}</span>
                        </div>
                        <div className="pt-4 border-t border-white/20">
                          <div className="flex items-center justify-between">
                            <span className="text-white/90">Augmentation</span>
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-6 h-6 text-accent" />
                              <span className="text-2xl font-bold text-accent">{property.revenue.increase}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-white/90 mb-6">Contactez-nous pour une estimation personnalisée</p>
                  )}
                  
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => navigate('/contact')}
                  >
                    Demander une estimation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PropertyDetail;
