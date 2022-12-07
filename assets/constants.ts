export const routes = [
  {
    path: '/',
    name: 'Home',
    id: 4,
    icon: ['fas', 'house'],
  },
  {
    path: '/about',
    name: 'About',
    id: 0,
    icon: ['fas', 'address-card'],
  },
  {
    path: '/projects',
    name: 'Projects',
    id: 1,
    icon: ['fas', 'code-fork'],
  },
  {
    path: '/blog',
    name: 'Blog',
    id: 2,
    icon: ['fas', 'book'],
  },
  {
    path: '/contact',
    name: 'Contact',
    id: 3,
    icon: ['fas', 'phone'],
  },
]

// for nuxt content
export const BLOG_CONTENT_ROUTE = 'blog'
export const PROJECT_CONTENT_ROUTE = 'project'

export const BLOG_CONTENT_TITLES = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  COVER_IMAGE: 'cover-image',
  DATE_ADDED: 'date-added',
}
export const PROJECT_CONTENT_TITLES = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  COVER_IMAGE: 'cover-image',
}
