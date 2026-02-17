'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { Button } from '@/components/ui/button'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()
  const relationToPathMap = {
    pages: '',
    posts: '/blog',
  } as const

  return (
    <div className="flex items-center gap-2">
      <nav className="hidden md:flex items-center gap-1">
        {navItems.map(({ link }, i) => {
          const href =
            link?.type === 'reference' && typeof link?.reference?.value === 'object'
              ? `${relationToPathMap[link.reference.relationTo]}/${link.reference.value.slug}`
              : link?.url

          const isActive = href ? pathname === href : false

          return (
            <CMSLink
              key={i}
              {...link}
              appearance="inline"
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'text-foreground after:absolute after:inset-x-2 after:-bottom-[17px] after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-primary/50'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
            />
          )
        })}
      </nav>

      <Button asChild className="hidden sm:inline-flex">
        <Link href="/book-a-chat">Book a Free chat</Link>
      </Button>
    </div>
  )
}
