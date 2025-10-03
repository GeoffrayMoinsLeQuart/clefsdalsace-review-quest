import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Afficher après 2 secondes
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const refuseCookies = () => {
    localStorage.setItem("cookie-consent", "refused");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-in-bottom">
      <div className="max-w-6xl mx-auto bg-card border border-border rounded-2xl shadow-service p-6 md:p-8">
        <button
          onClick={refuseCookies}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">🍪 Nous utilisons des cookies</h3>
            <p className="text-sm text-muted-foreground">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et personnaliser le contenu. 
              En cliquant sur "Accepter", vous consentez à l'utilisation de tous les cookies.{" "}
              <a href="/mentions-legales" className="text-primary hover:underline">
                En savoir plus
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              onClick={refuseCookies}
              className="w-full sm:w-auto"
            >
              Refuser
            </Button>
            <Button
              onClick={acceptCookies}
              className="w-full sm:w-auto"
            >
              Accepter tous les cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
