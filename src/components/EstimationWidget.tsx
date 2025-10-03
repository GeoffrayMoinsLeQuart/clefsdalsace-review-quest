import { useState } from "react";
import { Calculator, X } from "lucide-react";
import { Button } from "./ui/button";

const EstimationWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-accent hover:bg-accent/90 text-white rounded-full p-4 shadow-elegant hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Ouvrir le calculateur d'estimation"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        )}
      </button>

      {/* Widget panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-elegant border border-border p-6 z-50 animate-scale-in">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            Estimation rapide
          </h3>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Type de bien</label>
              <select className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none">
                <option>Studio</option>
                <option>T2</option>
                <option>T3</option>
                <option>T4+</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Surface (m²)</label>
              <input
                type="number"
                placeholder="Ex: 65"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Ville</label>
              <input
                type="text"
                placeholder="Ex: Mulhouse"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Téléphone</label>
              <input
                type="tel"
                placeholder="06 XX XX XX XX"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Obtenir mon estimation
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Réponse en 24h maximum • Sans engagement
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default EstimationWidget;