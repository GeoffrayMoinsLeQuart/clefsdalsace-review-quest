import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Mentions Légales</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
              <p className="text-muted-foreground">
                Le site www.conciergerie-alsace.fr est édité par :<br />
                <strong>Conciergerie Alsace</strong><br />
                Société à responsabilité limitée (SARL)<br />
                Capital social : [MONTANT] €<br />
                Siège social : [ADRESSE COMPLETE]<br />
                RCS : [VILLE] [NUMERO]<br />
                SIRET : [NUMERO SIRET]<br />
                TVA intracommunautaire : [NUMERO TVA]<br />
                Email : contact@conciergerie-alsace.fr<br />
                Téléphone : [NUMERO]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Directeur de la publication</h2>
              <p className="text-muted-foreground">
                Le directeur de la publication est [NOM PRENOM], en qualité de [FONCTION].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Hébergement</h2>
              <p className="text-muted-foreground">
                Le site est hébergé par :<br />
                <strong>Lovable</strong><br />
                [ADRESSE HEBERGEUR]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Propriété intellectuelle</h2>
              <p className="text-muted-foreground">
                L'ensemble des contenus présents sur le site www.conciergerie-alsace.fr (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive de Conciergerie Alsace, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
              </p>
              <p className="text-muted-foreground">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Conciergerie Alsace.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Données personnelles</h2>
              <p className="text-muted-foreground">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-muted-foreground">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@conciergerie-alsace.fr
              </p>
              <p className="text-muted-foreground">
                Pour plus d'informations sur la gestion de vos données personnelles, consultez notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
              <p className="text-muted-foreground">
                Le site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites. Pour en savoir plus, consultez notre <a href="/cookies" className="text-primary hover:underline">Politique de Cookies</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Limitation de responsabilité</h2>
              <p className="text-muted-foreground">
                Conciergerie Alsace s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Conciergerie Alsace ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="text-muted-foreground">
                En conséquence, Conciergerie Alsace décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Loi applicable</h2>
              <p className="text-muted-foreground">
                Les présentes mentions légales sont régies par la loi française. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MentionsLegales;
