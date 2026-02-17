import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const splitIndex = Math.ceil(navItems.length / 2)
  const companyLinks = navItems.slice(0, splitIndex)
  const legalLinks = navItems.slice(splitIndex)

  return (
    <footer className="mt-auto border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
          <div className="md:col-span-1">
            <Link className="group inline-flex items-center" href="/">
              <Logo withWordmark className="transition-transform group-hover:scale-[1.01]" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Learn from expert coaches and accelerate your personal and professional growth.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <nav className="mt-4 flex flex-col gap-3">
              {companyLinks.map(({ link }, i) => {
                return (
                  <CMSLink
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    key={i}
                    {...link}
                  />
                )
              })}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <nav className="mt-4 flex flex-col gap-3">
              {legalLinks.map(({ link }, i) => {
                return (
                  <CMSLink
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    key={i}
                    {...link}
                  />
                )
              })}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Theme</h3>
            <div className="mt-2">
              <ThemeSelector />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 py-4">
          <p className="text-sm text-muted-foreground opacity-70">
            {`© ${new Date().getFullYear()} Pathway. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
