import type { RequiredDataFromCollectionSlug } from 'payload'
import { richText } from './richText'

// Used for pre-seeded content so that the homepage is not empty
export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'lowImpact',
    richText: richText([
      {
        type: 'heading',
        tag: 'h1',
        text: 'Leadership Coach for Mid-Level Professionals',
      },
      {
        type: 'paragraph',
        text: 'Seed the database from /admin or /next/seed to load the full Pathway clone content.',
      },
    ]),
  },
  meta: {
    description:
      'Helping mid-level professionals step into confident leadership. Break stagnation, grow impact, and thrive.',
    title: 'Leadership Coach for Mid-Level Professionals',
  },
  title: 'Home',
  layout: [],
}
