type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'
type LexicalNode = {
  [key: string]: unknown
  type: string
  version: number
}

type RichTextSection =
  | {
      type: 'heading'
      text: string
      tag?: HeadingTag
    }
  | {
      type: 'paragraph'
      text: string
    }

const textNode = (text: string): LexicalNode => ({
  type: 'text',
  detail: 0,
  format: 0,
  mode: 'normal' as const,
  style: '',
  text,
  version: 1,
})

const paragraphNode = (text: string): LexicalNode => ({
  type: 'paragraph' as const,
  children: [textNode(text)],
  direction: 'ltr' as const,
  format: '' as const,
  indent: 0,
  textFormat: 0,
  version: 1,
})

const headingNode = (text: string, tag: HeadingTag = 'h2'): LexicalNode => ({
  type: 'heading' as const,
  children: [textNode(text)],
  direction: 'ltr' as const,
  format: '' as const,
  indent: 0,
  tag,
  version: 1,
})

type LexicalRichText = {
  root: {
    type: 'root'
    children: LexicalNode[]
    direction: 'ltr'
    format: ''
    indent: number
    version: number
  }
}

export const richText = (sections: RichTextSection[]): LexicalRichText => ({
  root: {
    type: 'root' as const,
    children: sections.map((section) =>
      section.type === 'heading' ? headingNode(section.text, section.tag) : paragraphNode(section.text),
    ),
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
  },
})
