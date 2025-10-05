import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const questionnaireSchema = z.object({
  propertyType: z.string().min(1, "Sélectionnez un type de bien"),
  location: z.string().min(2, "Entrez une ville").max(50, "Ville trop longue"),
  surface: z.string().min(1, "Entrez une surface approximative"),
  objective: z.string().min(1, "Sélectionnez un objectif"),
  name: z.string().min(2, "Nom requis").max(50, "Nom trop long"),
  email: z.string().email("Email invalide").max(100, "Email trop long"),
  phone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, "Numéro invalide"),
});

type QuestionnaireData = z.infer<typeof questionnaireSchema>;

const MultiStepQuestionnaire = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const navigate = useNavigate();
  const totalSteps = 4;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<QuestionnaireData>({
    resolver: zodResolver(questionnaireSchema),
    mode: "onChange",
  });

  const watchedFields = watch();

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(step);
    const isValid = await trigger(fieldsToValidate);
    if (isValid && step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const getFieldsForStep = (currentStep: number): (keyof QuestionnaireData)[] => {
    switch (currentStep) {
      case 1:
        return ["propertyType"];
      case 2:
        return ["location", "surface"];
      case 3:
        return ["objective"];
      case 4:
        return ["name", "email", "phone"];
      default:
        return [];
    }
  };

  const onSubmit = async (data: QuestionnaireData) => {
    console.log("Questionnaire data:", data);
    
    toast({
      title: "✅ Estimation en cours !",
      description: "Nous analysons votre bien. Redirection...",
    });

    setTimeout(() => {
      navigate("/merci", { state: { questionnaireData: data } });
    }, 1500);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 rounded-full mx-1 transition-all ${
                s <= step ? "bg-accent" : "bg-white/20"
              }`}
            />
          ))}
        </div>
        <p className="text-white/70 text-sm text-center">
          Étape {step} sur {totalSteps}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Property Type */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quel type de bien possédez-vous ?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "studio", label: "Studio" },
                { value: "t2", label: "T2" },
                { value: "t3", label: "T3 / T4" },
                { value: "maison", label: "Maison" },
              ].map((type) => (
                <label key={type.value} className="cursor-pointer">
                  <input
                    type="radio"
                    value={type.value}
                    {...register("propertyType")}
                    className="sr-only peer"
                  />
                  <div className="p-6 rounded-xl bg-white/5 border-2 border-white/20 hover:border-accent peer-checked:border-accent peer-checked:bg-accent/20 transition-all text-center">
                    <span className="text-white font-semibold">{type.label}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.propertyType && (
              <p className="text-red-300 text-sm">{errors.propertyType.message}</p>
            )}
          </div>
        )}

        {/* Step 2: Location & Surface */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Où se situe votre bien ?
            </h3>
            <div>
              <label className="block text-white mb-2 font-medium">Ville</label>
              <input
                type="text"
                {...register("location")}
                placeholder="Ex: Strasbourg, Colmar, Mulhouse..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
              />
              {errors.location && (
                <p className="text-red-300 text-sm mt-1">{errors.location.message}</p>
              )}
            </div>
            <div>
              <label className="block text-white mb-2 font-medium">Surface (m²)</label>
              <input
                type="text"
                {...register("surface")}
                placeholder="Ex: 50, 75, 100..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
              />
              {errors.surface && (
                <p className="text-red-300 text-sm mt-1">{errors.surface.message}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Objective */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quel est votre objectif ?
            </h3>
            <div className="space-y-3">
              {[
                {
                  value: "conciergerie",
                  label: "Conciergerie Airbnb",
                  desc: "Gestion complète location courte durée",
                },
                {
                  value: "gestion-locative",
                  label: "Gestion Locative",
                  desc: "Location longue durée sécurisée",
                },
                {
                  value: "estimation",
                  label: "Simple Estimation",
                  desc: "Connaître le potentiel de mon bien",
                },
              ].map((obj) => (
                <label key={obj.value} className="cursor-pointer block">
                  <input
                    type="radio"
                    value={obj.value}
                    {...register("objective")}
                    className="sr-only peer"
                  />
                  <div className="p-4 rounded-xl bg-white/5 border-2 border-white/20 hover:border-accent peer-checked:border-accent peer-checked:bg-accent/20 transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold">{obj.label}</p>
                        <p className="text-white/70 text-sm">{obj.desc}</p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-accent opacity-0 peer-checked:opacity-100" />
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.objective && (
              <p className="text-red-300 text-sm">{errors.objective.message}</p>
            )}
          </div>
        )}

        {/* Step 4: Contact Info */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Dernière étape : vos coordonnées
            </h3>
            <div>
              <label className="block text-white mb-2 font-medium">Nom complet</label>
              <input
                type="text"
                {...register("name")}
                placeholder="Jean Dupont"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
              />
              {errors.name && (
                <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block text-white mb-2 font-medium">Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="jean.dupont@email.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-white mb-2 font-medium">Téléphone</label>
              <input
                type="tel"
                {...register("phone")}
                placeholder="06 XX XX XX XX"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
              />
              {errors.phone && (
                <p className="text-red-300 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
              <p className="text-white/90 text-sm">
                ✅ Réponse sous 2h ouvrées<br />
                ✅ Estimation gratuite et sans engagement
              </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          {step > 1 && (
            <Button
              type="button"
              onClick={prevStep}
              variant="outline"
              className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          )}
          {step < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
              className="flex-1 bg-accent hover:bg-accent/90"
            >
              Continuer
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90">
              Obtenir mon estimation
              <CheckCircle className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepQuestionnaire;
