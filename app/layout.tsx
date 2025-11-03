import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trendy Zone - Urban Winter Fashion for Bangladesh',
  description: 'Your curated winter wardrobe for the modern Bangladeshi youth. Hoodies, jackets, and shoes designed for our climate.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}