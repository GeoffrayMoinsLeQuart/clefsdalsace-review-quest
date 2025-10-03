import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
             }} 
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm mb-8">
                <Search className="w-16 h-16 text-white" />
              </div>
              
              <h1 className="text-8xl md:text-9xl font-bold text-white mb-4">404</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Page introuvable
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="gap-2 text-lg px-8"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5" />
                Retour
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.location.href = '/'}
              >
                <Home className="w-5 h-5" />
                Accueil
              </Button>
            </div>
            
            <div className="mt-16 pt-16 border-t border-white/20">
              <p className="text-white/80 mb-4">Pages populaires :</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/conciergerie" className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors">
                  Conciergerie
                </a>
                <a href="/gestion-locative" className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors">
                  Gestion Locative
                </a>
                <a href="/nos-biens" className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors">
                  Nos Biens
                </a>
                <a href="/contact" className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
