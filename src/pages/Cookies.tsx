import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Politique de Cookies</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-muted-foreground">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Qu'est-ce qu'un cookie ?</h2>
              <p className="text-muted-foreground">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web. Les cookies permettent au site de reconnaître votre terminal lors de vos visites ultérieures et de mémoriser certaines informations vous concernant.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Types de cookies utilisés</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Cookies strictement nécessaires</h3>
              <p className="text-muted-foreground mb-4">
                Ces cookies sont indispensables au fonctionnement du site. Ils vous permettent de naviguer sur le site et d'utiliser ses fonctionnalités essentielles (compte utilisateur, panier, sécurité). Ils ne peuvent pas être désactivés.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>cookie-consent</strong> : mémorise votre choix concernant les cookies (durée : 12 mois)</li>
                <li><strong>session</strong> : gère votre session de navigation (durée : session)</li>
                <li><strong>csrf_token</strong> : protège contre les attaques CSRF (durée : session)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Cookies de performance</h3>
              <p className="text-muted-foreground mb-4">
                Ces cookies collectent des informations anonymes sur la façon dont les visiteurs utilisent notre site (pages visitées, durée de visite, etc.). Ils nous aident à améliorer le fonctionnement du site.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>Google Analytics</strong> : analyse du trafic et du comportement des utilisateurs (durée : 24 mois)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.3 Cookies de fonctionnalité</h3>
              <p className="text-muted-foreground mb-4">
                Ces cookies permettent au site de mémoriser vos préférences (langue, région, etc.) et d'offrir des fonctionnalités améliorées et personnalisées.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>language</strong> : mémorise votre préférence de langue (durée : 12 mois)</li>
                <li><strong>theme</strong> : mémorise votre préférence d'affichage (durée : 12 mois)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.4 Cookies de ciblage/publicitaires</h3>
              <p className="text-muted-foreground mb-4">
                Ces cookies sont utilisés pour afficher des publicités pertinentes et suivre l'efficacité des campagnes publicitaires. Ils permettent de limiter le nombre de fois où vous voyez une publicité et de mesurer son efficacité.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Google Ads</strong> : publicités personnalisées (durée : 13 mois)</li>
                <li><strong>Facebook Pixel</strong> : remarketing et suivi des conversions (durée : 13 mois)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Durée de conservation</h2>
              <p className="text-muted-foreground">
                La durée de conservation des cookies varie selon leur type et leur finalité :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Cookies de session</strong> : supprimés à la fermeture du navigateur</li>
                <li><strong>Cookies persistants</strong> : conservés entre 12 et 24 mois maximum</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Conformément aux recommandations de la CNIL, les cookies (hors cookies strictement nécessaires) ne sont pas conservés au-delà de 13 mois.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Votre consentement</h2>
              <p className="text-muted-foreground">
                Conformément à la réglementation, votre consentement est requis avant le dépôt de cookies non essentiels. Lors de votre première visite, une bannière vous informe de l'utilisation des cookies et vous permet :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>D'accepter tous les cookies</li>
                <li>De refuser les cookies non essentiels</li>
                <li>De personnaliser vos choix</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Vous pouvez modifier vos préférences à tout moment en cliquant sur le lien "Gérer les cookies" en bas de page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Comment gérer les cookies ?</h2>
              
              <h3 className="text-xl font-semibold mb-3">5.1 Via notre outil de gestion</h3>
              <p className="text-muted-foreground mb-4">
                Vous pouvez gérer vos préférences de cookies directement sur notre site via la bannière de consentement ou en cliquant sur le lien "Gérer les cookies" présent en bas de chaque page.
              </p>

              <h3 className="text-xl font-semibold mb-3">5.2 Via votre navigateur</h3>
              <p className="text-muted-foreground mb-4">
                Vous pouvez également configurer votre navigateur pour accepter ou refuser les cookies :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Chrome</strong> : Menu &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                <li><strong>Firefox</strong> : Menu &gt; Options &gt; Vie privée et sécurité &gt; Cookies</li>
                <li><strong>Safari</strong> : Préférences &gt; Confidentialité &gt; Cookies</li>
                <li><strong>Edge</strong> : Menu &gt; Paramètres &gt; Confidentialité &gt; Cookies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">5.3 Outils tiers</h3>
              <p className="text-muted-foreground mb-4">
                Pour gérer les cookies publicitaires, vous pouvez également utiliser :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Votre choix de pub</strong> : <a href="https://www.youronlinechoices.com/fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.youronlinechoices.com/fr/</a></li>
                <li><strong>Google Ads Settings</strong> : <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">adssettings.google.com</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Conséquences du refus des cookies</h2>
              <p className="text-muted-foreground">
                Le refus des cookies non essentiels n'empêche pas la navigation sur le site, mais peut limiter certaines fonctionnalités :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Impossibilité de mémoriser vos préférences</li>
                <li>Impossibilité de personnaliser votre expérience</li>
                <li>Affichage de publicités moins pertinentes</li>
                <li>Limitation des statistiques de visite</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Les cookies strictement nécessaires ne peuvent pas être refusés car ils sont indispensables au fonctionnement du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Cookies tiers</h2>
              <p className="text-muted-foreground mb-4">
                Certaines fonctionnalités de notre site font appel à des services proposés par des sites tiers. Ces sites déposent leurs propres cookies que nous ne contrôlons pas. Nous vous invitons à consulter leur politique de confidentialité :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Google Analytics</strong> : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/privacy</a></li>
                <li><strong>Google Ads</strong> : <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/technologies/ads</a></li>
                <li><strong>Facebook</strong> : <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">facebook.com/privacy/explanation</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Protection de la vie privée</h2>
              <p className="text-muted-foreground">
                Les informations collectées par les cookies sont traitées conformément à notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a> et au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Modifications</h2>
              <p className="text-muted-foreground">
                Nous nous réservons le droit de modifier cette politique de cookies à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant l'utilisation des cookies sur notre site, vous pouvez nous contacter :
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

export default Cookies;
