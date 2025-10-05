import { Phone, MessageCircle, Calculator } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const CallButton = () => {
  const phoneNumber = "+33621471922";
  const whatsappNumber = "33621471922";
  const navigate = useNavigate();

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Bonjour, je souhaite obtenir une estimation pour mon bien.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleEstimation = () => {
    navigate("/contact");
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 lg:hidden">
      <div className="container mx-auto px-4">
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-border p-3 flex gap-2">
          <Button
            onClick={handleWhatsApp}
            className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2"
            size="lg"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </Button>
          <Button
            onClick={handleCall}
            variant="outline"
            size="lg"
            className="aspect-square p-0"
            aria-label="Appeler"
          >
            <Phone className="h-5 w-5" />
          </Button>
          <Button
            onClick={handleEstimation}
            className="flex-1 gap-2"
            size="lg"
          >
            <Calculator className="h-5 w-5" />
            Estimer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallButton;
