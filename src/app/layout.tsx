import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PPl practice',
  description: 'Personal website to showcase PPL(Python Programming Lab) practice & notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}