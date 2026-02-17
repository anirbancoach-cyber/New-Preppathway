import type { Metadata } from 'next'

import PageTemplate, { generateMetadata as generatePageMetadata } from './[slug]/page'

const getHomeParams = () => Promise.resolve({ slug: 'home' })

export default async function HomePage() {
  return PageTemplate({ params: getHomeParams() })
}

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({ params: getHomeParams() })
}
