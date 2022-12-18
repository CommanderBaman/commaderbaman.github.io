// variables used to define a route in the navbar
export type CustomNavbarRoute = {
  path: string
  name: string
  id: number
  icon: string[]
}

export const AboutRoute: CustomNavbarRoute = {
  path: '/about',
  name: 'About',
  id: 0,
  icon: ['fas', 'address-card'],
}
export const BlogRoute: CustomNavbarRoute = {
  path: '/blog',
  name: 'Blog',
  id: 1,
  icon: ['fas', 'book'],
}
export const ContactRoute: CustomNavbarRoute = {
  path: '/contact',
  name: 'Contact',
  id: 2,
  icon: ['fas', 'phone'],
}
export const HomeRoute: CustomNavbarRoute = {
  path: '/',
  name: 'Home',
  id: 3,
  icon: ['fas', 'house'],
}
export const ProjectRoute: CustomNavbarRoute = {
  path: '/projects',
  name: 'Projects',
  id: 4,
  icon: ['fas', 'code-fork'],
}

// control the order of icons in navbar from here
export const routes: CustomNavbarRoute[] = [
  HomeRoute,
  AboutRoute,
  ProjectRoute,
  BlogRoute,
  ContactRoute,
]

// for nuxt content
export const BLOG_CONTENT_ROUTE = 'blog'
export const PROJECT_CONTENT_ROUTE = 'projects'

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

// for cards
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
