import  createImageUrlBuilder  from '@sanity/image-url';
import { createClient } from 'next-sanity';
// sanity.ts


// Configure Sanity client
export const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET, // Replace with your actual dataset name
  apiVersion: '2022-06-01', // Replace with your desired API version
  useCdn: process.env.NODE_ENV === "production", // Set to true to enable CDN caching (optional)
});

// Create image URL builder
export const imageUrlBuilder = createImageUrlBuilder(client);
