import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'your_project_id', // Remplacer avec votre projectId Sanity
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return builder.image(source);
};

// Query pour récupérer tous les biens
export const fetchProperties = async () => {
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
