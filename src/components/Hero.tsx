import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MultiStepQuestionnaire from "./MultiStepQuestionnaire";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Background avec gradient alsacien */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
           }} 
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in">
            <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-elegant flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-semibold text-sm">Réponse sous 2h</span>
            </div>
            <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-elegant flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="font-semibold text-sm">+50 propriétaires clients</span>
            </div>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Transformez votre bien<br/>
            en <span className="text-accent">machine à revenus</span>
          </h1>
          
          {/* Subheadline avec chiffres impactants */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium animate-fade-in">
            <span className="text-accent font-bold">+40% de revenus</span> dès le 1er mois | 
            Mulhouse & Alsace | 
            <span className="text-accent font-bold"> €2.1M</span> générés pour nos clients
          </p>
          
          {/* Questionnaire multi-étapes */}
          <div className="mb-8 animate-scale-in">
            <MultiStepQuestionnaire />
          </div>
          
          {/* Social proof */}
          <div className="flex items-center gap-6 text-white/80 animate-fade-in">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white backdrop-blur-sm" />
              ))}
            </div>
            <p className="text-sm">
              <span className="font-bold text-white">+50 propriétaires</span> nous font confiance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;