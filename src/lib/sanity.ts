import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Configuration Sanity - Remplacez avec vos vraies valeurs
const SANITY_PROJECT_ID = ''; // Votre projectId ici (ex: 'abc123de')
const SANITY_DATASET = 'production';

// Créer le client seulement si configuré
export const sanityClient = SANITY_PROJECT_ID ? createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
}) : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export const urlFor = (source: any) => {
  if (!builder) {
    const placeholder = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&auto=format&fit=crop";
    const resolved = typeof source === 'string' ? source : placeholder;
    return {
      width: () => ({ url: () => resolved }),
      height: () => ({ url: () => resolved }),
      url: () => resolved,
    } as any;
  }
  return builder.image(source);
};

// Query pour récupérer tous les biens
export const fetchProperties = async () => {
  if (!sanityClient) {
    throw new Error('Sanity not configured');
  }
  
  const query = `*[_type == "property"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    price,
    area,
    bedrooms,
    bathrooms,
    location,
    type,
    status,
    images,
    features,
    revenue {
      before,
      after,
      increase
    }
  }`;
  return await sanityClient.fetch(query);
};

// Query pour récupérer un bien par son slug
export const fetchPropertyBySlug = async (slug: string) => {
  if (!sanityClient) {
    throw new Error('Sanity not configured');
  }
  
  const query = `*[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    price,
    area,
    bedrooms,
    bathrooms,
    location,
    type,
    status,
    images,
    features,
    amenities,
    revenue {
      before,
      after,
      increase
    },
    details
  }`;
  return await sanityClient.fetch(query, { slug });
};

// Query pour récupérer tous les articles de blog
export const fetchBlogPosts = async () => {
  if (!sanityClient) {
    throw new Error('Sanity not configured');
  }
  
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{
      name,
      image
    },
    categories[]->{
      title,
      slug
    }
  }`;
  return await sanityClient.fetch(query);
};

// Query pour récupérer un article par son slug
export const fetchBlogPostBySlug = async (slug: string) => {
  if (!sanityClient) {
    throw new Error('Sanity not configured');
  }
  
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    body,
    publishedAt,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      title,
      slug
    }
  }`;
  return await sanityClient.fetch(query, { slug });
};
