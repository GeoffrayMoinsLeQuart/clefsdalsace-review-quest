import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const CallButton = () => {
  const phoneNumber = "+33621471922";
  const whatsappNumber = "33621471922";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-2 lg:hidden">
      <Button
        onClick={handleCall}
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        aria-label="Appeler"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default CallButton;
