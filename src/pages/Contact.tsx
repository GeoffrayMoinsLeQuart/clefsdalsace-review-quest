import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "✅ Demande envoyée !",
      description: "Nous vous rappelons dans les 2h. Vous allez recevoir un SMS de confirmation.",
    });
    
    setIsSubmitting(false);
    setFormData({
      name: "",
      phone: "",
      projectType: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Bonjour, je suis ${formData.name}. Je souhaite être contacté pour ${formData.projectType || 'une estimation'}.`);
    window.open(`https://wa.me/33621471922?text=${message}`, '_blank');
  };

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
                Parlons de votre <span className="text-accent">projet</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Réponse garantie sous 24h. Estimation gratuite et sans engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>
                  <p className="text-muted-foreground mb-8">
                    Notre équipe est à votre disposition pour répondre à toutes vos questions.
                  </p>
                </div>

                <div className="space-y-6">
                  <a 
                    href="tel:+33362147192"
                    className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-service hover:shadow-elegant transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Téléphone</div>
                      <div className="text-sm text-muted-foreground">03 36 21 47 19 22</div>
                      <div className="text-xs text-accent mt-1">Cliquez pour appeler</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:contact@clefsdalsace.fr"
                    className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-service hover:shadow-elegant transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-sm text-muted-foreground">contact@clefsdalsace.fr</div>
                      <div className="text-xs text-accent mt-1">Réponse sous 24h</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-service">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Localisation</div>
                      <div className="text-sm text-muted-foreground">
                        Mulhouse, Alsace<br />
                        France
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-service">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Horaires</div>
                      <div className="text-sm text-muted-foreground">
                        Lundi - Samedi<br />
                        9h00 - 19h00
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    Pourquoi nous choisir ?
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>Réponse garantie sous 24h</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>Estimation gratuite et sans engagement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>Expertise locale reconnue</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>+40% de revenus en moyenne</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form - SIMPLIFIÉ */}
              <div className="lg:col-span-2 space-y-6">
                {/* Quick Contact Form */}
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-elegant">
                  <h2 className="text-2xl font-bold mb-2">Demande de contact express</h2>
                  <p className="text-muted-foreground mb-6">
                    Remplissez ces 3 champs, nous vous rappelons dans les <span className="text-accent font-semibold">2h</span>
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Votre nom <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength={2}
                        maxLength={50}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Téléphone <span className="text-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="06 XX XX XX XX"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Format: 06 12 34 56 78 ou +33 6 12 34 56 78
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type de projet <span className="text-accent">*</span>
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      >
                        <option value="">Sélectionnez votre projet</option>
                        <option value="conciergerie">Conciergerie Airbnb</option>
                        <option value="gestion-locative">Gestion Locative</option>
                        <option value="estimation">Estimation gratuite</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Envoi en cours...</>
                      ) : (
                        <>
                          <Phone className="w-5 h-5" />
                          Me faire rappeler sous 2h
                        </>
                      )}
                    </Button>

                    <Button
                      type="button"
                      onClick={handleWhatsApp}
                      variant="outline"
                      size="lg"
                      className="w-full gap-2 bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Discuter sur WhatsApp maintenant
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center mt-4">
                    ✅ Réponse sous 2h ouvrées • Sans engagement
                  </p>
                </form>

                {/* Calendly Alternative */}
                <div className="bg-muted/50 rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">Préférez prendre RDV directement ?</h3>
                  <p className="text-muted-foreground mb-4">
                    Choisissez un créneau dans notre agenda partagé
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://calendly.com/votre-lien', '_blank')}
                  >
                    <Clock className="w-5 h-5 mr-2" />
                    Réserver un créneau
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

export default Contact;