import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import MultiStepQuestionnaire from "./MultiStepQuestionnaire";

interface QuestionnaireDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuestionnaireDialog = ({ open, onOpenChange }: QuestionnaireDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-hero border-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Estimation gratuite en 4 étapes
          </DialogTitle>
        </DialogHeader>
        <MultiStepQuestionnaire />
      </DialogContent>
    </Dialog>
  );
};

export default QuestionnaireDialog;
