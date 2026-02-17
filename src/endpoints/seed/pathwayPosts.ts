import type { Media, User } from '@/payload-types'
import type { RequiredDataFromCollectionSlug } from 'payload'

import { richText } from './richText'

type PathwayPostsArgs = {
  author: User
  heroImage: Media
  secondImage: Media
  categories: Array<{ id: number }>
}

export const pathwayPosts = ({
  author,
  categories,
  heroImage,
  secondImage,
}: PathwayPostsArgs): RequiredDataFromCollectionSlug<'posts'>[] => {
  const [leadershipCategory, resilienceCategory] = categories

  return [
    {
      title: '10 Essential Leadership Skills for the Modern Workplace',
      slug: 'essential-leadership-skills-modern-workplace',
      _status: 'published',
      authors: [author.id],
      categories: [leadershipCategory?.id].filter(Boolean),
      heroImage: heroImage.id,
      meta: {
        title: '10 Essential Leadership Skills for the Modern Workplace',
        description:
          'A practical guide to communication, influence, resilience, and decision-making for growing leaders.',
        image: heroImage.id,
      },
      content: richText([
        {
          type: 'heading',
          tag: 'h2',
          text: 'Leadership now is less about authority and more about clarity',
        },
        {
          type: 'paragraph',
          text: 'Modern teams perform best when leaders build trust, communicate expectations clearly, and stay consistent under pressure.',
        },
        {
          type: 'heading',
          tag: 'h3',
          text: '1. Strategic communication',
        },
        {
          type: 'paragraph',
          text: 'Strong leaders simplify complex information into clear decisions, priorities, and next actions.',
        },
        {
          type: 'heading',
          tag: 'h3',
          text: '2. Emotional regulation',
        },
        {
          type: 'paragraph',
          text: 'How you respond in stressful moments shapes team confidence more than any slide deck or process.',
        },
        {
          type: 'heading',
          tag: 'h3',
          text: '3. Decision ownership',
        },
        {
          type: 'paragraph',
          text: 'Take responsibility for outcomes, iterate quickly, and build a learning rhythm into every project cycle.',
        },
      ]),
    },
    {
      title: 'From Mid-Level Stagnation to Leadership Momentum',
      slug: 'mid-level-stagnation-to-leadership-momentum',
      _status: 'published',
      authors: [author.id],
      categories: [resilienceCategory?.id].filter(Boolean),
      heroImage: secondImage.id,
      meta: {
        title: 'From Mid-Level Stagnation to Leadership Momentum',
        description:
          'How mid-level professionals can reset their trajectory through confidence, visibility, and deliberate growth.',
        image: secondImage.id,
      },
      content: richText([
        {
          type: 'heading',
          tag: 'h2',
          text: 'Career growth often stalls when your impact is invisible',
        },
        {
          type: 'paragraph',
          text: 'Many high-performing professionals do strong work but struggle to make their strategic impact visible to decision-makers.',
        },
        {
          type: 'heading',
          tag: 'h3',
          text: 'Rebuild momentum with three moves',
        },
        {
          type: 'paragraph',
          text: 'First, define a leadership narrative for your next role. Second, align your work to business outcomes. Third, build routines that protect resilience and consistency.',
        },
        {
          type: 'paragraph',
          text: 'When strategy, communication, and mindset improve together, promotions become a result of your trajectory, not luck.',
        },
      ]),
    },
  ]
}
