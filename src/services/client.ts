import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '65ba4794',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-12-30', // use current date (YYYY-MM-DD) to target the latest API version
  //skMbScyTMxZemwpV8YYsHWQUJVoVabWXNbKxZT6P8ZNSzTxhJc7nc6z09EypHg6bixjgicOTVkJq4mA2TgKBE64j293BDcdgw05XBNHnnVrUoFl4Bw0szQfFZIhROZimSDFXyGIK8jKqYwrUd6pgupAo9NlVdZuwz0HugXrLnW4FvXNKaGe0
})
