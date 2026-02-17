import type { Media } from '@/payload-types'
import type { RequiredDataFromCollectionSlug } from 'payload'

import { richText } from './richText'

type PagesArgs = {
  heroImage: Media
  contactFormID: number
  bookAChatFormID: number
}

const textColumn = ({
  title,
  body,
  size = 'oneThird',
}: {
  title: string
  body: string
  size?: 'oneThird' | 'half' | 'twoThirds' | 'full'
}) => ({
  size,
  enableLink: false,
  richText: richText([
    {
      type: 'heading',
      tag: size === 'full' ? 'h2' : 'h3',
      text: title,
    },
    {
      type: 'paragraph',
      text: body,
    },
  ]),
})

const ctaBlock = ({
  title,
  body,
  buttonLabel,
  buttonURL,
}: {
  title: string
  body: string
  buttonLabel: string
  buttonURL: string
}) => ({
  blockType: 'cta' as const,
  richText: richText([
    { type: 'heading', tag: 'h2', text: title },
    { type: 'paragraph', text: body },
  ]),
  links: [
    {
      link: {
        type: 'custom' as const,
        appearance: 'default' as const,
        label: buttonLabel,
        url: buttonURL,
      },
    },
  ],
})

export const pathwayPages = ({
  bookAChatFormID,
  contactFormID,
  heroImage,
}: PagesArgs): RequiredDataFromCollectionSlug<'pages'>[] => {
  return [
    {
      title: 'Home',
      slug: 'home',
      _status: 'published',
      meta: {
        title: 'Leadership Coach for Mid-Level Professionals',
        description:
          'Helping mid-level professionals step into confident leadership. Break stagnation, grow impact, and thrive.',
        image: heroImage.id,
      },
      hero: {
        type: 'mediumImpact',
        media: heroImage.id,
        richText: richText([
          {
            type: 'heading',
            tag: 'h1',
            text: 'Advance Your Career: From Mid-Level Stagnation to Leadership Impact',
          },
          {
            type: 'paragraph',
            text: 'Transform how you lead, how you are perceived, and how you are compensated through practical coaching for professionals.',
          },
        ]),
        links: [
          {
            link: {
              type: 'custom',
              appearance: 'default',
              label: 'Book a brainstorm chat with us',
              url: '/book-a-chat',
            },
          },
          {
            link: {
              type: 'custom',
              appearance: 'outline',
              label: 'AI Portal (Coming Soon!)',
              url: '/services#ai-portal',
            },
          },
        ],
      },
      layout: [
        {
          blockType: 'content',
          columns: [
            textColumn({
              size: 'full',
              title: 'Everything you need to succeed',
              body: 'Built from real-world experience and resilience principles to help professionals break stagnation and grow into confident leadership.',
            }),
            textColumn({
              title: 'Expert-Led Coaching',
              body: 'One-on-one and group coaching led by experienced professionals who have navigated high-pressure career transitions.',
            }),
            textColumn({
              title: 'Interview Command',
              body: 'Prepare for high-stakes interviews with structured practice, better narratives, and confidence under pressure.',
            }),
            textColumn({
              title: 'Mindset Coaching',
              body: 'Build resilience, consistency, and sustainable momentum with practical tools tailored to your situation.',
            }),
          ],
        },
        {
          blockType: 'mediaBlock',
          media: heroImage.id,
        },
        {
          blockType: 'archive',
          introContent: richText([
            {
              type: 'heading',
              tag: 'h2',
              text: 'Insights from our experts',
            },
            {
              type: 'paragraph',
              text: 'Explore practical leadership and career-growth guidance from the Pathway team.',
            },
          ]),
          populateBy: 'collection',
          relationTo: 'posts',
          limit: 3,
        },
        ctaBlock({
          title: 'Free Intro Chat',
          body: 'Talk through your current challenges and build a practical plan for your next career move.',
          buttonLabel: 'Get Started Free',
          buttonURL: '/book-a-chat',
        }),
      ],
    },
    {
      title: 'About',
      slug: 'about',
      _status: 'published',
      meta: {
        title: 'About',
        description: 'Meet the coaches behind Pathway and learn how we support leadership growth.',
        image: heroImage.id,
      },
      hero: {
        type: 'lowImpact',
        richText: richText([
          { type: 'heading', tag: 'h1', text: 'Meet Our Coaches' },
          {
            type: 'paragraph',
            text: 'Tech veterans and career coaches helping professionals transition into impactful leadership roles.',
          },
        ]),
      },
      layout: [
        {
          blockType: 'content',
          columns: [
            textColumn({
              size: 'half',
              title: 'Anirban Kundu',
              body: 'Leadership coach focused on clarity, confidence, and resilience for professionals navigating career inflection points.',
            }),
            textColumn({
              size: 'half',
              title: 'Mark Waddoups',
              body: 'Experienced coach helping teams and managers build strategic communication and consistent execution habits.',
            }),
            textColumn({
              size: 'full',
              title: 'Our Professional Journey',
              body: 'Across product, engineering, and people leadership, we have spent decades helping teams ship impactful work while developing long-term career durability.',
            }),
          ],
        },
        ctaBlock({
          title: 'Ready to work with us?',
          body: 'Book a conversation and we will map the next step in your leadership trajectory.',
          buttonLabel: 'Book a Session',
          buttonURL: '/book-a-chat',
        }),
      ],
    },
    {
      title: 'Why Work With Us',
      slug: 'why-work-with-us',
      _status: 'published',
      meta: {
        title: 'Why Work With Us',
        description: 'A practical coaching process designed for sustained growth and leadership readiness.',
        image: heroImage.id,
      },
      hero: {
        type: 'lowImpact',
        richText: richText([
          { type: 'heading', tag: 'h1', text: 'Accelerate Your Career Transition' },
          {
            type: 'paragraph',
            text: 'Our process combines strategy, accountability, and resilience to help you move forward with confidence.',
          },
        ]),
      },
      layout: [
        {
          blockType: 'content',
          columns: [
            textColumn({
              title: 'Initial Consultation',
              body: 'Understand your current stage, constraints, and opportunities.',
            }),
            textColumn({
              title: 'Personalized Roadmap',
              body: 'Define measurable milestones and practical actions for the next 90 days.',
            }),
            textColumn({
              title: 'Active Coaching',
              body: 'Build communication, visibility, and execution habits through structured sessions.',
            }),
            textColumn({
              title: 'Career Launch',
              body: 'Convert progress into outcomes: stronger positioning, interviews, and leadership momentum.',
            }),
          ],
        },
        ctaBlock({
          title: 'Get Started Today',
          body: 'Book your intro chat and begin your transition with a clear plan.',
          buttonLabel: 'Contact Us',
          buttonURL: '/contact',
        }),
      ],
    },
    {
      title: 'Contact',
      slug: 'contact',
      _status: 'published',
      meta: {
        title: 'Contact',
        description: 'Get in touch with Pathway for coaching questions and next steps.',
        image: heroImage.id,
      },
      hero: {
        type: 'lowImpact',
        richText: richText([
          { type: 'heading', tag: 'h1', text: 'Contact Us' },
          {
            type: 'paragraph',
            text: 'We would love to hear from you. Send a message and we will respond as soon as possible.',
          },
        ]),
      },
      layout: [
        {
          blockType: 'formBlock',
          enableIntro: true,
          form: contactFormID,
          introContent: richText([
            { type: 'heading', tag: 'h3', text: 'Get in touch' },
            {
              type: 'paragraph',
              text: 'Have questions about coaching or leadership growth? Fill out this form and we will follow up.',
            },
          ]),
        },
      ],
    },
    {
      title: 'Book a Chat',
      slug: 'book-a-chat',
      _status: 'published',
      meta: {
        title: 'Book a Chat',
        description: 'Request a private coaching chat and we will send available slots.',
        image: heroImage.id,
      },
      hero: {
        type: 'lowImpact',
        richText: richText([
          { type: 'heading', tag: 'h1', text: 'Book a Chat' },
          {
            type: 'paragraph',
            text: 'Schedule a private conversation to discuss your goals, blockers, and next leadership steps.',
          },
        ]),
      },
      layout: [
        {
          blockType: 'formBlock',
          enableIntro: true,
          form: bookAChatFormID,
          introContent: richText([
            { type: 'heading', tag: 'h3', text: '1:1 Coaching Request' },
            {
              type: 'paragraph',
              text: 'Share your context and preferred time, and we will follow up with available options.',
            },
          ]),
        },
      ],
    },
    {
      title: 'Careers',
      slug: 'careers',
      _status: 'published',
      meta: {
        title: 'Careers',
        description: 'Careers information for Pathway.',
        image: heroImage.id,
      },
      hero: {
        type: 'lowImpact',
        richText: richText([
          { type: 'heading', tag: 'h1', text: 'Careers' },
          {
            type: 'paragraph',
            text: 'We are not actively hiring right now, but we are always open to meeting thoughtful collaborators.',
          },
        ]),
      },
      layout: [
        {
          blockType: 'content',
          columns: [
            textColumn({
              size: 'full',
              title: 'Work with Pathway',
              body: 'If you are passionate about leadership development, coaching, and practical career growth, get in touch and introduce yourself.',
            }),
          ],
        },
      ],
    },
    {
      title: 'Privacy Policy',
      slug: 'privacy',
      _status: 'published',
      meta: {
        title: 'Privacy Policy',
        description: 'Privacy policy for Pathway.',
        image: heroImage.id,
      },
      hero: {
        type: 'lowImpact',
        richText: richText([{ type: 'heading', tag: 'h1', text: 'Privacy Policy' }]),
      },
      layout: [
        {
          blockType: 'content',
          columns: [
            textColumn({
              size: 'full',
              title: 'Data collection and usage',
              body: 'We collect information you submit through forms so we can respond to your requests and improve our services. We do not sell personal data.',
            }),
          ],
        },
      ],
    },
    {
      title: 'Terms of Service',
      slug: 'terms',
      _status: 'published',
      meta: {
        title: 'Terms of Service',
        description: 'Terms of service for Pathway.',
        image: heroImage.id,
      },
      hero: {
        type: 'lowImpact',
        richText: richText([{ type: 'heading', tag: 'h1', text: 'Terms of Service' }]),
      },
      layout: [
        {
          blockType: 'content',
          columns: [
            textColumn({
              size: 'full',
              title: 'Using this site',
              body: 'By using this site, you agree to use the information responsibly and understand that coaching outcomes vary by individual circumstances.',
            }),
          ],
        },
      ],
    },
    {
      title: 'Cookie Policy',
      slug: 'cookies',
      _status: 'published',
      meta: {
        title: 'Cookie Policy',
        description: 'Cookie policy for Pathway.',
        image: heroImage.id,
      },
      hero: {
        type: 'lowImpact',
        richText: richText([{ type: 'heading', tag: 'h1', text: 'Cookie Policy' }]),
      },
      layout: [
        {
          blockType: 'content',
          columns: [
            textColumn({
              size: 'full',
              title: 'How cookies are used',
              body: 'Cookies help us remember preferences, understand site usage, and improve user experience.',
            }),
          ],
        },
      ],
    },
    {
      title: 'Services',
      slug: 'services',
      _status: 'published',
      meta: {
        title: 'Services',
        description: 'Overview of Pathway coaching services.',
        image: heroImage.id,
      },
      hero: {
        type: 'lowImpact',
        richText: richText([
          { type: 'heading', tag: 'h1', text: 'Services' },
          {
            type: 'paragraph',
            text: 'Our AI portal experience is in progress. In the meantime, book a chat for personalized coaching support.',
          },
        ]),
      },
      layout: [
        ctaBlock({
          title: 'AI Portal (Coming Soon!)',
          body: 'We are building a practical AI-supported coaching layer for accountability and progress tracking.',
          buttonLabel: 'Book a Free chat',
          buttonURL: '/book-a-chat',
        }),
      ],
    },
  ]
}
