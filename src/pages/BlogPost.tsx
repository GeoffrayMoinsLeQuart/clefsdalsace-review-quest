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
    // Articles existants
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
      content: `<p>Contenu détaillé à venir. Découvrez nos meilleures pratiques pour booster votre rentabilité.</p>`
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
      content: `<p>Cadre réglementaire, déclaration obligatoire, limitations et fiscalité : l'essentiel en un article.</p>`
    },
    // Articles du Blog.tsx
    {
      id: "3",
      slug: "guide-location-courte-duree-alsace-2025",
      title: "Guide Complet 2025 : Tout savoir sur la Location Courte Durée en Alsace",
      excerpt: "Réglementation, fiscalité, autorisations : tout ce qu'il faut savoir pour louer en meublé touristique.",
      category: "Réglementation",
      date: "15 Mars 2025",
      readTime: "12 min",
      author: "Rédaction MadeIn Immo",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      content: `<p>Le guide complet pour louer sereinement en Alsace en 2025.</p>`
    },
    {
      id: "4",
      slug: "optimiser-revenus-airbnb",
      title: "Optimiser ses revenus Airbnb : 10 astuces de pros",
      excerpt: "Stratégies pour maximiser le taux d'occupation et les revenus locatifs.",
      category: "Conciergerie",
      date: "10 Mars 2025",
      readTime: "8 min",
      author: "Rédaction MadeIn Immo",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
      content: `<p>10 astuces concrètes pour augmenter vos revenus Airbnb.</p>`
    },
    {
      id: "5",
      slug: "choisir-bon-locataire",
      title: "Gestion Locative : Comment choisir le bon locataire ?",
      excerpt: "Les critères essentiels pour sélectionner un locataire fiable.",
      category: "Gestion Locative",
      date: "5 Mars 2025",
      readTime: "6 min",
      author: "Rédaction MadeIn Immo",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      content: `<p>Notre méthode de sélection rigoureuse des locataires.</p>`
    },
    {
      id: "6",
      slug: "fiscalite-lmnp-lmp",
      title: "Fiscalité Location Meublée : LMNP ou LMP ?",
      excerpt: "Comparatif complet pour optimiser votre fiscalité.",
      category: "Fiscalité",
      date: "28 Février 2025",
      readTime: "10 min",
      author: "Rédaction MadeIn Immo",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      content: `<p>Avantages et inconvénients des statuts LMNP et LMP.</p>`
    },
    {
      id: "7",
      slug: "investir-strasbourg-2025",
      title: "Investir dans l'immobilier locatif à Strasbourg en 2025",
      excerpt: "Analyse du marché et quartiers prometteurs.",
      category: "Investissement",
      date: "20 Février 2025",
      readTime: "9 min",
      author: "Rédaction MadeIn Immo",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
      content: `<p>Où investir à Strasbourg en 2025.</p>`
    },
    {
      id: "8",
      slug: "decoration-airbnb-tendances",
      title: "Décoration Airbnb : Les tendances qui font réserver",
      excerpt: "Décorer pour séduire et obtenir d'excellents avis.",
      category: "Conciergerie",
      date: "12 Février 2025",
      readTime: "7 min",
      author: "Rédaction MadeIn Immo",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      content: `<p>Les tendances déco qui convertissent en réservations.</p>`
    },
    {
      id: "9",
      slug: "assurance-location-courte-duree",
      title: "Assurance Habitation : Bien se protéger en location courte durée",
      excerpt: "Garanties indispensables et pièges à éviter.",
      category: "Assurance",
      date: "5 Février 2025",
      readTime: "8 min",
      author: "Rédaction MadeIn Immo",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
      content: `<p>Les assurances essentielles pour votre activité.</p>`
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
