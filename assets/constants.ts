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

// for about page
export type Job = {
  startDate: Date
  endDate?: Date
  name: string
  place: string
  description: string
  icon: string[]
  id: number
}

export const CollegeEducation: Job = {
  startDate: new Date(2019, 6), // July 2019
  endDate: new Date(2024, 6), // July 2024
  name: 'Dual Degree (B.Tech. + M.Tech.)',
  place: 'IIT Bombay',
  description:
    'Bachelors and Masters in Electrical Engineering from Indian Institute of Technology, Bombay',
  icon: ['fas', 'graduation-cap'],
  id: 1,
}

export const SchoolEducation: Job = {
  startDate: new Date(2013, 2), // March 2013
  endDate: new Date(2019, 2), // March 2024
  name: 'High School',
  place: 'Bhartiya Vidya Bhavan',
  description: 'Passed 12th grade with 96% in CBSE boards',
  icon: ['fas', 'school'],
  id: 0,
}

export const Education: Job[] = [SchoolEducation, CollegeEducation]

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
