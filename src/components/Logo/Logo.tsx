import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  withWordmark?: boolean
}

export const Logo = (props: Props) => {
  const {
    className,
    loading: loadingFromProps,
    priority: priorityFromProps,
    withWordmark = false,
  } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <span className={clsx('inline-flex items-center gap-2', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Pathway"
        width={32}
        height={32}
        loading={loading}
        fetchPriority={priority}
        decoding="async"
        className="size-8 rounded-md"
        src="/logo-icon.svg"
      />
      {withWordmark && <span className="text-base font-semibold tracking-tight">Pathway</span>}
    </span>
  )
}
