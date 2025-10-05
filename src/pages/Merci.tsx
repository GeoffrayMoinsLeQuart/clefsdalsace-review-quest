import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Merci = () => {
  const location = useLocation();
  const questionnaireData = location.state?.questionnaireData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="flex justify-center">
            <CheckCircle2 className="w-20 h-20 text-green-500" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Merci pour votre demande !
            </h1>
            <p className="text-xl text-muted-foreground">
              Nous avons bien reçu vos informations et nous vous recontacterons dans les plus brefs délais.
            </p>
          </div>

          {questionnaireData && (
            <div className="bg-muted/50 rounded-lg p-6 text-left space-y-3">
              <h2 className="font-semibold text-lg mb-4">Récapitulatif de votre demande</h2>
              {questionnaireData.propertyType && (
                <p><span className="font-medium">Type de bien :</span> {questionnaireData.propertyType}</p>
              )}
              {questionnaireData.location && (
                <p><span className="font-medium">Localisation :</span> {questionnaireData.location}</p>
              )}
              {questionnaireData.surface && (
                <p><span className="font-medium">Surface :</span> {questionnaireData.surface}</p>
              )}
              {questionnaireData.objective && (
                <p><span className="font-medium">Objectif :</span> {questionnaireData.objective}</p>
              )}
              {questionnaireData.name && (
                <p><span className="font-medium">Nom :</span> {questionnaireData.name}</p>
              )}
              {questionnaireData.email && (
                <p><span className="font-medium">Email :</span> {questionnaireData.email}</p>
              )}
              {questionnaireData.phone && (
                <p><span className="font-medium">Téléphone :</span> {questionnaireData.phone}</p>
              )}
            </div>
          )}

          <div className="space-y-4 pt-8">
            <p className="text-lg font-medium">
              Un expert vous contactera sous 24h pour une estimation personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/">Retour à l'accueil</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/nos-biens">Découvrir nos biens</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Merci;
