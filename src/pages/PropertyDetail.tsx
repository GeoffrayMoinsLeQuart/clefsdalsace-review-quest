import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Maximize2, BedDouble, TrendingUp, Calendar, Users } from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Données de propriétés (à synchroniser avec NosBiens.tsx)
  const properties = [
    {
      id: "1",
      title: "Appartement Cosy - Centre Strasbourg",
      type: "conciergerie",
      surface: 45,
      bedrooms: 1,
      city: "Strasbourg",
      revenue: 1850,
      occupancy: 89,
      increase: 42,
      description: "Appartement entièrement rénové au cœur du centre historique de Strasbourg. Parfait pour les séjours courts.",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
      ],
      amenities: ["WiFi Haut Débit", "Cuisine équipée", "Linge fourni", "Ménage inclus", "Check-in autonome"],
      address: "15 Rue du Vieux Marché aux Poissons",
      year: 2023
    },
    {
      id: "2",
      title: "Studio Moderne - Quartier Gare",
      type: "gestion-locative",
      surface: 32,
      bedrooms: 1,
      city: "Strasbourg",
      revenue: 750,
      occupancy: 100,
      increase: 18,
      description: "Studio optimisé pour la location longue durée, proche de toutes commodités.",
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
      ],
      amenities: ["Parking", "Cave", "Balcon", "Double vitrage"],
      address: "8 Boulevard de Nancy",
      year: 2022
    },
    {
      id: "3",
      title: "Maison Familiale - Petite France",
      type: "conciergerie",
      surface: 120,
      bedrooms: 3,
      city: "Strasbourg",
      revenue: 3200,
      occupancy: 85,
      increase: 55,
      description: "Maison de caractère avec vue sur l'Ill, idéale pour les familles.",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
      ],
      amenities: ["Jardin", "Terrasse", "Cheminée", "Parking privé", "WiFi", "Lave-vaisselle"],
      address: "22 Rue du Bain aux Plantes",
      year: 2023
    }
  ];

  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Bien non trouvé</h1>
          <Button onClick={() => navigate("/nos-biens")}>Retour aux biens</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Breadcrumb */}
        <section className="bg-muted/30 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <button
              onClick={() => navigate("/nos-biens")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux biens
            </button>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {property.images.slice(1, 3).map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-xl overflow-hidden">
                    <img
                      src={img}
                      alt={`${property.title} ${idx + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
                {property.images.length > 3 && (
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-black/60 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors">
                    <span className="text-white text-lg font-semibold">+{property.images.length - 3} photos</span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.type === "conciergerie"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}>
                      {property.type === "conciergerie" ? "Conciergerie" : "Gestion Locative"}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Depuis {property.year}
                    </span>
                  </div>

                  <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <MapPin className="w-5 h-5" />
                    <span>{property.address}, {property.city}</span>
                  </div>

                  <div className="flex flex-wrap gap-6 py-4 border-y border-border">
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-5 h-5 text-primary" />
                      <div>
                        <span className="text-2xl font-bold">{property.surface}</span>
                        <span className="text-sm text-muted-foreground ml-1">m²</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-5 h-5 text-primary" />
                      <div>
                        <span className="text-2xl font-bold">{property.bedrooms}</span>
                        <span className="text-sm text-muted-foreground ml-1">chambre{property.bedrooms > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      <div>
                        <span className="text-2xl font-bold text-accent">+{property.increase}%</span>
                        <span className="text-sm text-muted-foreground ml-1">de revenus</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Description</h2>
                  <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Équipements</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-2xl p-6 shadow-service border border-border/50 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">Revenus mensuels</h3>
                    <p className="text-3xl font-bold text-primary">{property.revenue}€</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">Taux d'occupation</h3>
                    <div className="flex items-end gap-2">
                      <p className="text-3xl font-bold">{property.occupancy}%</p>
                      <Users className="w-5 h-5 text-muted-foreground mb-1" />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border space-y-3">
                    <Button className="w-full" size="lg" onClick={() => navigate("/contact")}>
                      Je veux les mêmes résultats
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => navigate("/")}>
                      Faire une estimation
                    </Button>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      Un projet similaire ? Nous analysons votre bien gratuitement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-cta">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Envie des mêmes résultats pour votre bien ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Demandez une estimation gratuite et découvrez le potentiel de votre propriété.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8"
                onClick={() => navigate("/contact")}
              >
                Demander une estimation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20"
                onClick={() => navigate("/nos-biens")}
              >
                Voir plus de biens
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PropertyDetail;
