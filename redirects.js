const redirects = async () => {
  const internetExplorerRedirect = {
    destination: '/ie-incompatible.html',
    has: [
      {
        type: 'header',
        key: 'user-agent',
        value: '(.*Trident.*)', // all ie browsers
      },
    ],
    permanent: false,
    source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
  }

  const postsToBlogRedirects = [
    {
      source: '/posts',
      destination: '/blog',
      permanent: true,
    },
    {
      source: '/posts/page/:pageNumber',
      destination: '/blog/page/:pageNumber',
      permanent: true,
    },
    {
      source: '/posts/:slug',
      destination: '/blog/:slug',
      permanent: true,
    },
  ]

  const redirects = [internetExplorerRedirect, ...postsToBlogRedirects]

  return redirects
}

export default redirects
