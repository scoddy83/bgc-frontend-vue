import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '65ba4794',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-12-30', // use current date (YYYY-MM-DD) to target the latest API version
})
