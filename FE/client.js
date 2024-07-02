import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_ID,
  dataset: 'production',
  useCdn: true, 
  token: import.meta.VITE_SANITY_TOKEN, 
  apiVersion: '2021-08-31',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
