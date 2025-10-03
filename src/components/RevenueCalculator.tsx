import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp } from "lucide-react";

const RevenueCalculator = () => {
  const [surface, setSurface] = useState(50);
  const [bedrooms, setBedrooms] = useState(1);
  const [city, setCity] = useState("Strasbourg");
  const [showResults, setShowResults] = useState(false);

  // Simplified calculation logic
  const calculateRevenue = () => {
    const basePrice = city === "Strasbourg" ? 80 : city === "Colmar" ? 70 : 60;
    const dailyRate = basePrice + (bedrooms * 20) + (surface * 0.5);
    const occupancyRate = 0.7; // 70% occupation moyenne
    const monthlyRevenue = Math.round(dailyRate * 30 * occupancyRate);
    const annualRevenue = monthlyRevenue * 12;
    
    const traditionalRent = Math.round((surface * (city === "Strasbourg" ? 15 : 13)));
    const gain = Math.round(((monthlyRevenue - traditionalRent) / traditionalRent) * 100);
    
    return {
      dailyRate,
      monthlyRevenue,
      annualRevenue,
      traditionalRent,
      gain
    };
  };

  const results = calculateRevenue();

  return (
    <div className="bg-card rounded-2xl p-8 shadow-service border border-border/50">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Calculateur de Revenus</h3>
          <p className="text-sm text-muted-foreground">Estimez vos revenus potentiels</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Surface */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Surface (m²)</Label>
            <span className="text-sm font-semibold text-primary">{surface} m²</span>
          </div>
          <Slider
            value={[surface]}
            onValueChange={(value) => setSurface(value[0])}
            min={20}
            max={150}
            step={5}
            className="w-full"
          />
        </div>

        {/* Bedrooms */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Nombre de chambres</Label>
            <span className="text-sm font-semibold text-primary">{bedrooms}</span>
          </div>
          <Slider
            value={[bedrooms]}
            onValueChange={(value) => setBedrooms(value[0])}
            min={1}
            max={5}
            step={1}
            className="w-full"
          />
        </div>

        {/* City */}
        <div className="space-y-3">
          <Label>Ville</Label>
          <div className="grid grid-cols-3 gap-2">
            {["Strasbourg", "Colmar", "Mulhouse"].map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  city === c
                    ? 'bg-primary text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <Button 
          onClick={() => setShowResults(true)} 
          className="w-full"
          size="lg"
        >
          Calculer mes revenus
        </Button>

        {/* Results */}
        {showResults && (
          <div className="mt-8 pt-8 border-t border-border space-y-4 animate-fade-in">
            <div className="bg-gradient-hero rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Revenus estimés</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-white/80">Tarif journalier</span>
                  <span className="text-2xl font-bold">{results.dailyRate}€</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-white/80">Revenus mensuels</span>
                  <span className="text-3xl font-bold">{results.monthlyRevenue}€</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-white/80">Revenus annuels</span>
                  <span className="text-2xl font-bold">{results.annualRevenue.toLocaleString()}€</span>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Gain vs location traditionnelle</p>
                <p className="text-4xl font-bold text-accent mb-1">+{results.gain}%</p>
                <p className="text-sm text-muted-foreground">
                  soit {results.monthlyRevenue - results.traditionalRent}€/mois de plus
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              * Estimation basée sur un taux d'occupation de 70% et les tarifs moyens du marché.
              Résultats non contractuels.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RevenueCalculator;
