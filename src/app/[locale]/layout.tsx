import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ChakraProvider } from '@chakra-ui/react'
import { fonts } from '../fonts'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages()

    return (
        <html lang={locale} className={fonts.rubik.variable}>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    <ChakraProvider>{children}</ChakraProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
