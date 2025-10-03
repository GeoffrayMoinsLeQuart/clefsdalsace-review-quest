import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Linkedin, Twitter } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Articles (synchronisés avec Blog.tsx)
  const articles = [
    {
      id: "1",
      slug: "maximiser-rentabilite-airbnb-strasbourg",
      title: "5 Astuces pour Maximiser votre Rentabilité Airbnb à Strasbourg",
      excerpt: "Découvrez nos conseils d'experts pour optimiser vos revenus locatifs en location courte durée.",
      category: "Conciergerie",
      date: "15 Mars 2024",
      readTime: "5 min",
      author: "Marie Dupont",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
      content: `
        <h2>Introduction</h2>
        <p>La location courte durée à Strasbourg représente une opportunité exceptionnelle pour les propriétaires. Avec plus de 4 millions de visiteurs par an, la capitale alsacienne offre un marché dynamique et rentable.</p>

        <h2>1. Optimisez vos Photos</h2>
        <p>Les photos sont le premier contact avec vos futurs locataires. Investissez dans un photographe professionnel ou suivez ces règles :</p>
        <ul>
          <li>Privilégiez la lumière naturelle</li>
          <li>Désencombrez complètement l'espace</li>
          <li>Utilisez un grand angle pour maximiser l'espace</li>
          <li>Mettez en valeur les points forts (vue, équipements, décoration)</li>
        </ul>

        <h2>2. Fixez un Prix Dynamique</h2>
        <p>Le pricing est crucial pour maximiser vos revenus. Utilisez un système de tarification dynamique qui prend en compte :</p>
        <ul>
          <li>Les événements locaux (Marché de Noël, Parlementaires européens)</li>
          <li>La saisonnalité</li>
          <li>Les week-ends vs semaine</li>
          <li>La concurrence locale</li>
        </ul>

        <h2>3. Soignez l'Accueil</h2>
        <p>Un accueil chaleureux et professionnel fait toute la différence. Proposez :</p>
        <ul>
          <li>Un guide local personnalisé</li>
          <li>Des recommandations de restaurants</li>
          <li>Un panier d'accueil avec produits locaux</li>
          <li>Des instructions claires et disponibles en plusieurs langues</li>
        </ul>

        <h2>4. Automatisez la Gestion</h2>
        <p>Le temps, c'est de l'argent. Automatisez au maximum :</p>
        <ul>
          <li>Serrure connectée pour check-in autonome</li>
          <li>Messages automatiques de bienvenue</li>
          <li>Synchronisation multi-plateformes</li>
          <li>Système de paiement en ligne</li>
        </ul>

        <h2>5. Récoltez des Avis 5 Étoiles</h2>
        <p>Les avis sont le nerf de la guerre sur Airbnb. Pour obtenir des avis excellents :</p>
        <ul>
          <li>Surpassez les attentes (petites attentions)</li>
          <li>Répondez rapidement aux messages</li>
          <li>Assurez une propreté irréprochable</li>
          <li>Sollicitez poliment un avis après le départ</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Avec ces 5 astuces, vous pouvez augmenter vos revenus Airbnb de 30 à 50%. Chez MadeIn Immo, nous appliquons ces stratégies au quotidien pour maximiser la rentabilité de nos propriétaires.</p>

        <p><strong>Besoin d'aide pour optimiser votre bien ?</strong> Contactez-nous pour une estimation gratuite.</p>
      `
    },
    {
      id: "2",
      slug: "reglementation-location-courte-duree-2024",
      title: "Réglementation Location Courte Durée 2024 : Ce qu'il Faut Savoir",
      excerpt: "Tour d'horizon complet des obligations légales pour louer en courte durée en Alsace.",
      category: "Juridique",
      date: "8 Mars 2024",
      readTime: "7 min",
      author: "Jean Martin",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200",
      content: `
        <h2>Cadre Réglementaire 2024</h2>
        <p>La location courte durée en France est encadrée par plusieurs textes de loi. En 2024, de nouvelles règles sont entrées en vigueur.</p>

        <h2>Déclaration Obligatoire</h2>
        <p>Depuis 2024, toute mise en location d'un bien en courte durée doit faire l'objet d'une déclaration en mairie.</p>

        <h2>Limitations</h2>
        <ul>
          <li>Résidence principale : 120 jours maximum par an</li>
          <li>Résidence secondaire : autorisation de changement d'usage requise</li>
          <li>Numéro d'enregistrement obligatoire sur les annonces</li>
        </ul>

        <h2>Fiscalité</h2>
        <p>Les revenus locatifs sont imposables selon deux régimes possibles : micro-BIC ou régime réel.</p>

        <h2>Assurance</h2>
        <p>Une assurance spécifique location courte durée est obligatoire.</p>
      `
    }
  ];

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <Button onClick={() => navigate("/blog")}>Retour au blog</Button>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Breadcrumb */}
        <section className="bg-muted/30 py-4">
          <div className="max-w-4xl mx-auto px-4">
            <button
              onClick={() => navigate("/blog")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </button>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative h-[400px] bg-black">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 -mt-32 relative z-10">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-service">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {article.readTime} de lecture
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 pb-8 mb-8 border-b border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">{article.author}</p>
                <p className="text-sm text-muted-foreground">Expert MadeIn Immo</p>
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-ul:space-y-2
                prose-li:text-muted-foreground
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="font-semibold flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Partager cet article
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${article.title}`, '_blank')}
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-20 mt-16 bg-gradient-cta">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Besoin d'un accompagnement personnalisé ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Notre équipe d'experts est là pour vous aider à maximiser vos revenus locatifs.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8"
              onClick={() => navigate("/contact")}
            >
              Demander un devis gratuit
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
