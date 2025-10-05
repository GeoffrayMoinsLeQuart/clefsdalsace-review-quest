import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CGV = () => {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Conditions Générales de Vente</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Objet</h2>
              <p className="text-muted-foreground">
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Conciergerie Alsace, ci-après dénommée "le Prestataire", et toute personne physique ou morale, ci-après dénommée "le Client", souhaitant bénéficier des services de conciergerie et de gestion locative proposés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services proposés</h2>
              <h3 className="text-xl font-semibold mb-3">2.1 Conciergerie Airbnb</h3>
              <p className="text-muted-foreground mb-4">
                Le service de conciergerie comprend :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Gestion complète des annonces sur les plateformes de location courte durée</li>
                <li>Communication avec les voyageurs (réservations, questions, litiges)</li>
                <li>Check-in et check-out des voyageurs</li>
                <li>Ménage et entretien entre chaque location</li>
                <li>Fourniture du linge (selon formule)</li>
                <li>Gestion des stocks de consommables</li>
                <li>Optimisation des prix et du taux d'occupation</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Gestion Locative</h3>
              <p className="text-muted-foreground mb-4">
                Le service de gestion locative comprend :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Recherche et sélection de locataires</li>
                <li>Rédaction et signature des baux</li>
                <li>État des lieux d'entrée et de sortie</li>
                <li>Encaissement des loyers et charges</li>
                <li>Gestion des réparations et entretien</li>
                <li>Suivi des litiges et contentieux</li>
                <li>Déclarations fiscales et comptables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Tarifs et facturation</h2>
              <h3 className="text-xl font-semibold mb-3">3.1 Tarifs de la conciergerie</h3>
              <p className="text-muted-foreground mb-4">
                Les tarifs sont calculés en pourcentage des revenus locatifs générés :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Formule Essentielle</strong> : 18% HT des revenus locatifs</li>
                <li><strong>Formule Premium</strong> : 22% HT des revenus locatifs</li>
                <li><strong>Formule Exclusive</strong> : 25% HT des revenus locatifs</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Tarifs de la gestion locative</h3>
              <p className="text-muted-foreground mb-4">
                Les tarifs sont calculés en pourcentage des loyers encaissés :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Gestion Standard</strong> : 6% HT des loyers + charges</li>
                <li><strong>Gestion Premium</strong> : 8% HT des loyers + charges</li>
                <li><strong>Gestion Exclusive</strong> : 10% HT des loyers + charges</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.3 Facturation</h3>
              <p className="text-muted-foreground">
                Les factures sont émises mensuellement et payables dans un délai de 30 jours à compter de la date d'émission. Le paiement s'effectue par virement bancaire sur le compte indiqué sur la facture.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Durée et résiliation</h2>
              <h3 className="text-xl font-semibold mb-3">4.1 Durée du contrat</h3>
              <p className="text-muted-foreground mb-4">
                Le contrat est conclu pour une durée minimale de 12 mois, renouvelable par tacite reconduction.
              </p>

              <h3 className="text-xl font-semibold mb-3">4.2 Résiliation</h3>
              <p className="text-muted-foreground">
                Chaque partie peut résilier le contrat moyennant un préavis de 3 mois, notifié par lettre recommandée avec accusé de réception. Toute résiliation anticipée avant la fin de la première année entraîne le paiement d'une indemnité équivalente à 2 mois de commission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Obligations du Client</h2>
              <p className="text-muted-foreground mb-4">
                Le Client s'engage à :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Fournir un bien conforme aux normes de sécurité et d'habitabilité</li>
                <li>Maintenir une assurance propriétaire non-occupant en cours de validité</li>
                <li>Fournir tous les documents nécessaires à la mise en location</li>
                <li>Informer le Prestataire de tout changement concernant le bien</li>
                <li>Régler les factures dans les délais convenus</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Obligations du Prestataire</h2>
              <p className="text-muted-foreground mb-4">
                Le Prestataire s'engage à :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Mettre en œuvre tous les moyens nécessaires pour optimiser les revenus locatifs</li>
                <li>Assurer une gestion professionnelle et transparente</li>
                <li>Tenir une comptabilité détaillée des revenus et dépenses</li>
                <li>Informer le Client de tout événement important concernant le bien</li>
                <li>Respecter la confidentialité des informations du Client</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Responsabilité</h2>
              <p className="text-muted-foreground">
                Le Prestataire ne saurait être tenu responsable des dommages causés au bien par les locataires ou voyageurs, sauf en cas de négligence avérée de sa part. Le Client maintient l'entière responsabilité de son bien et doit souscrire les assurances nécessaires.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Protection des données</h2>
              <p className="text-muted-foreground">
                Les données personnelles collectées sont traitées conformément au RGPD. Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Litiges</h2>
              <p className="text-muted-foreground">
                En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, le litige sera soumis aux tribunaux compétents du ressort du siège social du Prestataire.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Modifications des CGV</h2>
              <p className="text-muted-foreground">
                Le Prestataire se réserve le droit de modifier les présentes CGV à tout moment. Les nouvelles conditions seront applicables dès leur mise en ligne sur le site, sauf pour les contrats en cours qui resteront régis par les conditions en vigueur lors de leur signature.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CGV;
