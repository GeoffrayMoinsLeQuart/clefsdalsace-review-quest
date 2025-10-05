import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Politique de Confidentialité</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-muted-foreground">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                Conciergerie Alsace accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Responsable du traitement</h2>
              <p className="text-muted-foreground">
                Le responsable du traitement des données est :<br />
                <strong>Conciergerie Alsace</strong><br />
                [ADRESSE COMPLETE]<br />
                Email : contact@conciergerie-alsace.fr<br />
                Téléphone : [NUMERO]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Données collectées</h2>
              <h3 className="text-xl font-semibold mb-3">3.1 Données d'identification</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Nom et prénom</li>
                <li>Adresse postale</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Date de naissance (si nécessaire)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Données relatives au bien immobilier</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Adresse du bien</li>
                <li>Caractéristiques du bien (surface, nombre de pièces, etc.)</li>
                <li>Documents relatifs au bien (titre de propriété, diagnostics, etc.)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.3 Données de navigation</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Adresse IP</li>
                <li>Pages visitées</li>
                <li>Durée de navigation</li>
                <li>Type de navigateur et appareil utilisé</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.4 Données financières</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Coordonnées bancaires (IBAN)</li>
                <li>Informations de facturation</li>
                <li>Historique des transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Finalités du traitement</h2>
              <p className="text-muted-foreground mb-4">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Gestion de votre compte client et de nos relations contractuelles</li>
                <li>Fourniture des services de conciergerie et gestion locative</li>
                <li>Traitement de vos demandes et réclamations</li>
                <li>Gestion de la facturation et des paiements</li>
                <li>Envoi de communications marketing (avec votre consentement)</li>
                <li>Amélioration de nos services et de notre site web</li>
                <li>Respect de nos obligations légales et réglementaires</li>
                <li>Prévention de la fraude et sécurisation de nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Base légale du traitement</h2>
              <p className="text-muted-foreground mb-4">
                Le traitement de vos données personnelles repose sur les bases légales suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Exécution du contrat</strong> : traitement nécessaire à l'exécution de nos services</li>
                <li><strong>Obligation légale</strong> : respect de nos obligations comptables, fiscales et réglementaires</li>
                <li><strong>Intérêt légitime</strong> : amélioration de nos services, sécurité, prévention de la fraude</li>
                <li><strong>Consentement</strong> : communications marketing et cookies non essentiels</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Durée de conservation</h2>
              <p className="text-muted-foreground mb-4">
                Vos données personnelles sont conservées pendant les durées suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Données clients actifs</strong> : durée de la relation contractuelle + 5 ans</li>
                <li><strong>Données prospects</strong> : 3 ans à compter du dernier contact</li>
                <li><strong>Données de facturation</strong> : 10 ans (obligation légale comptable)</li>
                <li><strong>Cookies</strong> : 13 mois maximum</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Destinataires des données</h2>
              <p className="text-muted-foreground mb-4">
                Vos données personnelles peuvent être partagées avec :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Les membres autorisés de notre équipe</li>
                <li>Nos prestataires de services (hébergement, comptabilité, maintenance)</li>
                <li>Les plateformes de réservation (Airbnb, Booking.com, etc.)</li>
                <li>Les autorités compétentes sur demande légale</li>
                <li>Nos partenaires d'assurance (avec votre accord)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Nous nous assurons que tous nos partenaires respectent le RGPD et offrent des garanties suffisantes de protection des données.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Transferts de données hors UE</h2>
              <p className="text-muted-foreground">
                Certains de nos prestataires peuvent être situés hors de l'Union Européenne. Dans ce cas, nous veillons à ce que des garanties appropriées soient mises en place (clauses contractuelles types de la Commission Européenne, certification Privacy Shield, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Sécurité des données</h2>
              <p className="text-muted-foreground mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>L'accès non autorisé</li>
                <li>La divulgation</li>
                <li>La modification</li>
                <li>La destruction accidentelle ou illicite</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Ces mesures incluent notamment le chiffrement des données sensibles, la sécurisation de l'accès à nos systèmes, et la formation de notre personnel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Vos droits</h2>
              <p className="text-muted-foreground mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification</strong> : corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données (« droit à l'oubli »)</li>
                <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                <li><strong>Droit de retirer votre consentement</strong> : à tout moment</li>
                <li><strong>Droit de définir des directives post-mortem</strong> : concernant le sort de vos données</li>
              </ul>
              <p className="text-muted-foreground">
                Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@conciergerie-alsace.fr" className="text-primary hover:underline">contact@conciergerie-alsace.fr</a>
              </p>
              <p className="text-muted-foreground mt-4">
                Nous vous répondrons dans un délai d'un mois. Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (www.cnil.fr).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Cookies et technologies similaires</h2>
              <p className="text-muted-foreground">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Pour en savoir plus sur l'utilisation des cookies et gérer vos préférences, consultez notre <a href="/cookies" className="text-primary hover:underline">Politique de Cookies</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Modifications de la politique</h2>
              <p className="text-muted-foreground">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Par email :</strong> contact@conciergerie-alsace.fr<br />
                <strong>Par courrier :</strong> Conciergerie Alsace, [ADRESSE COMPLETE]<br />
                <strong>Par téléphone :</strong> [NUMERO]
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;
