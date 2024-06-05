import { Pathnames } from 'next-intl/navigation'

export const port = process.env.PORT || 3000
export const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${port}`

export const defaultLocale = 'en' as const
export const locales = ['en', 'th'] as const

export const pathnames = {
    '/': '/',
    '/dashboard': '/dashboard',
    '/about': '/about',
    '/summary': '/summary'
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

