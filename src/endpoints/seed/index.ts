import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'

import { pathwayBookAChatForm, pathwayContactForm } from './pathwayForms'
import { pathwayPages } from './pathwayPages'
import { pathwayPosts } from './pathwayPosts'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
  'redirects',
  'users',
]

const globals: GlobalSlug[] = ['header', 'footer']

const pathwayCategories = ['Leadership', 'Career Growth', 'Resilience']

// Next.js revalidation errors are expected when seeding without a running app.
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding Pathway clone content...')
  payload.logger.info('— Clearing collections and globals...')

  await Promise.all(
    globals.map((globalSlug) =>
      payload.updateGlobal({
        slug: globalSlug,
        data: {
          navItems: [],
        },
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection]?.config?.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info('— Seeding media...')

  const [heroBuffer, postBufferOne, postBufferTwo] = await Promise.all([
    fetchFileByURL('https://preppathway.com/anirban.png'),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    ),
  ])

  const [heroMedia, blogImageOne, blogImageTwo] = await Promise.all([
    payload.create({
      collection: 'media',
      data: {
        alt: 'Anirban - leadership coach',
      },
      file: heroBuffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Leadership growth article visual',
      },
      file: postBufferOne,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Career resilience article visual',
      },
      file: postBufferTwo,
    }),
  ])

  payload.logger.info('— Seeding users and categories...')

  const pathwayAuthor = await payload.create({
    collection: 'users',
    data: {
      name: 'Anirban Kundu',
      email: 'anirban@preppathway.com',
      password: 'password',
    },
  })

  const categoryDocs = await Promise.all(
    pathwayCategories.map((category) =>
      payload.create({
        collection: 'categories',
        data: {
          title: category,
          slug: category.toLowerCase().replace(/\s+/g, '-'),
        },
      }),
    ),
  )

  payload.logger.info('— Seeding forms...')

  const [contactFormDoc, bookAChatFormDoc] = await Promise.all([
    payload.create({
      collection: 'forms',
      depth: 0,
      data: pathwayContactForm,
    }),
    payload.create({
      collection: 'forms',
      depth: 0,
      data: pathwayBookAChatForm,
    }),
  ])

  payload.logger.info('— Seeding blog posts...')

  const postsToCreate = pathwayPosts({
    author: pathwayAuthor,
    heroImage: blogImageOne,
    secondImage: blogImageTwo,
    categories: categoryDocs.map((category) => ({ id: Number(category.id) })),
  })

  const createdPosts = []

  for (const postData of postsToCreate) {
    const createdPost = await payload.create({
      collection: 'posts',
      depth: 0,
      context: {
        disableRevalidate: true,
      },
      data: postData,
    })

    createdPosts.push(createdPost)
  }

  if (createdPosts.length >= 2) {
    await payload.update({
      collection: 'posts',
      id: createdPosts[0].id,
      depth: 0,
      data: {
        relatedPosts: [createdPosts[1].id],
      },
      context: {
        disableRevalidate: true,
      },
    })

    await payload.update({
      collection: 'posts',
      id: createdPosts[1].id,
      depth: 0,
      data: {
        relatedPosts: [createdPosts[0].id],
      },
      context: {
        disableRevalidate: true,
      },
    })
  }

  payload.logger.info('— Seeding pages...')

  const pagesToCreate = pathwayPages({
    heroImage: heroMedia,
    contactFormID: Number(contactFormDoc.id),
    bookAChatFormID: Number(bookAChatFormDoc.id),
  })

  for (const pageData of pagesToCreate) {
    await payload.create({
      collection: 'pages',
      depth: 0,
      context: {
        disableRevalidate: true,
      },
      data: pageData,
    })
  }

  payload.logger.info('— Seeding globals...')

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Home',
              url: '/',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'About',
              url: '/about',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Why Work With Us',
              url: '/why-work-with-us',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Blog',
              url: '/blog',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Contact',
              url: '/contact',
            },
          },
        ],
      },
      context: {
        disableRevalidate: true,
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'About',
              url: '/about',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Careers',
              url: '/careers',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Contact',
              url: '/contact',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Privacy Policy',
              url: '/privacy',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Terms of Service',
              url: '/terms',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Cookie Policy',
              url: '/cookies',
            },
          },
        ],
      },
      context: {
        disableRevalidate: true,
      },
    }),
  ])

  payload.logger.info('Seeded Pathway clone content successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
