import { ReactQueryProvider } from '@/src/app'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import './globals.css'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '200', '300', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'United Deals',
  description: 'Welcome to worldwide Megamart!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ReactQueryProvider>
          <main id="main">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
