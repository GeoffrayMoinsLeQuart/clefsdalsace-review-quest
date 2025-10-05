import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { fetchBlogPosts, urlFor } from "@/lib/sanity";
import { BlogPost } from "@/types/sanity";
import { useQuery } from "@tanstack/react-query";

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous les articles");

  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
    staleTime: 5 * 60 * 1000,
  });

  const fallbackArticles = [
    {
      _id: "1",
      title: "Guide Complet 2025 : Tout savoir sur la Location Courte Durée en Alsace",
      slug: { current: "guide-location-courte-duree-alsace-2025" },
      excerpt: "Réglementation, fiscalité, autorisations : découvrez tout ce qu'il faut savoir pour louer votre bien en meublé touristique dans les règles.",
      mainImage: { _type: "image" as const, asset: { _ref: "", _type: "reference" as const } },
      publishedAt: "2025-03-15",
      author: { name: "MadeIn Immo" },
      categories: [{ title: "Réglementation", slug: { current: "reglementation" } }],
    },
    {
      _id: "2",
      title: "Optimiser ses revenus Airbnb : 10 astuces de pros",
      slug: { current: "optimiser-revenus-airbnb" },
      excerpt: "Découvrez les stratégies utilisées par les meilleurs hôtes pour maximiser leur taux d'occupation et leurs revenus locatifs.",
      mainImage: { _type: "image" as const, asset: { _ref: "", _type: "reference" as const } },
      publishedAt: "2025-03-10",
      author: { name: "MadeIn Immo" },
      categories: [{ title: "Conciergerie", slug: { current: "conciergerie" } }],
    },
  ];

  const articlesToDisplay = blogPosts.length > 0 ? blogPosts : fallbackArticles;
  const featuredArticle = articlesToDisplay[0];

  const categories = ["Tous les articles", "Conciergerie", "Gestion Locative", "Fiscalité", "Réglementation", "Investissement"];

  const otherArticles = articlesToDisplay.slice(1);

  const filteredArticles = otherArticles.filter(article => {
    const articleCategory = article.categories?.[0]?.title || "";
    const matchesCategory = activeCategory === "Tous les articles" || articleCategory === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const getImageUrl = (image: any) => {
    if (!image) return "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80";
    try {
      return urlFor(image).width(800).url();
    } catch {
      return "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80";
    }
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-muted-foreground">Chargement des articles...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
               style={{
                 backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
               }} 
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Notre <span className="text-accent">Blog</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Conseils, actualités et guides pratiques pour optimiser votre investissement immobilier
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-white/95 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div 
                  className="group cursor-pointer"
                  onClick={() => navigate(`/blog/${featuredArticle.slug.current}`)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-service hover:shadow-elegant transition-all duration-300">
                    <div className="relative h-80 lg:h-auto overflow-hidden">
                      <img 
                        src={getImageUrl(featuredArticle.mainImage)} 
                        alt={featuredArticle.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold">
                          Article vedette
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 w-fit">
                        {featuredArticle.categories?.[0]?.title || "Article"}
                      </span>
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {featuredArticle.title}
                      </h2>
                      
                      <p className="text-muted-foreground text-lg mb-6">
                        {featuredArticle.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(featuredArticle.publishedAt)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>8 min de lecture</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-fit group/btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/blog/${featuredArticle.slug.current}`);
                        }}
                      >
                        Lire l'article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {filteredArticles.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">
                    Aucun article ne correspond à votre recherche
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article) => (
                    <div 
                      key={article._id}
                      className="group bg-card rounded-2xl overflow-hidden shadow-service hover:shadow-elegant transition-all duration-300 cursor-pointer"
                      onClick={() => navigate(`/blog/${article.slug.current}`)}
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img 
                          src={getImageUrl(article.mainImage)} 
                          alt={article.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                            {article.categories?.[0]?.title || "Article"}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(article.publishedAt)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>8 min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-cta relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
               style={{
                 backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
               }} 
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Restez informé
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Recevez nos meilleurs conseils directement dans votre boîte mail
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  className="h-12 bg-white/95 backdrop-blur-sm flex-1"
                />
                <Button size="lg" variant="secondary" className="whitespace-nowrap">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
