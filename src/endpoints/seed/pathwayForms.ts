import type { RequiredDataFromCollectionSlug } from 'payload'

import { richText } from './richText'

export const pathwayContactForm: RequiredDataFromCollectionSlug<'forms'> = {
  title: 'Contact Form',
  submitButtonLabel: 'Send Message',
  confirmationType: 'message',
  confirmationMessage: richText([
    {
      type: 'heading',
      tag: 'h3',
      text: 'Thanks for contacting us.',
    },
    {
      type: 'paragraph',
      text: 'We have received your message and will get back to you shortly.',
    },
  ]),
  emails: [],
  fields: [
    {
      name: 'first-name',
      blockType: 'text',
      label: 'First Name',
      required: true,
      width: 50,
    },
    {
      name: 'last-name',
      blockType: 'text',
      label: 'Last Name',
      required: true,
      width: 50,
    },
    {
      name: 'email',
      blockType: 'email',
      label: 'Email',
      required: true,
      width: 100,
    },
    {
      name: 'message',
      blockType: 'textarea',
      label: 'Message',
      required: true,
      width: 100,
    },
  ],
}

export const pathwayBookAChatForm: RequiredDataFromCollectionSlug<'forms'> = {
  title: 'Book a Chat Form',
  submitButtonLabel: 'Request Booking',
  confirmationType: 'message',
  confirmationMessage: richText([
    {
      type: 'heading',
      tag: 'h3',
      text: 'Booking request received.',
    },
    {
      type: 'paragraph',
      text: 'Thank you for booking a chat. We will follow up with available times.',
    },
  ]),
  emails: [],
  fields: [
    {
      name: 'full-name',
      blockType: 'text',
      label: 'Full Name',
      required: true,
      width: 100,
    },
    {
      name: 'email',
      blockType: 'email',
      label: 'Email',
      required: true,
      width: 100,
    },
    {
      name: 'current-role',
      blockType: 'text',
      label: 'Current Role',
      required: false,
      width: 100,
    },
    {
      name: 'goal',
      blockType: 'textarea',
      label: 'What do you want to work on?',
      required: true,
      width: 100,
    },
    {
      name: 'preferred-time',
      blockType: 'text',
      label: 'Preferred Date / Time',
      required: false,
      width: 100,
    },
  ],
}
