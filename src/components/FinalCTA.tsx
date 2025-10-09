import { Phone, Mail, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(217, 91%, 35%) 0%, hsl(351, 88%, 50%) 100%)'
        }}
      />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }} 
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à augmenter vos revenus de <span className="text-white drop-shadow-lg">+40%</span> ?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Discutons de votre projet dès aujourd'hui. Réponse garantie sous 24h.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:0336214719"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-primary rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              03 36 21 47 19
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Nous contacter
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Disponible du lundi au samedi, 9h-19h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
