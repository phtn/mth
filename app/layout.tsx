import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'
import { Navbar } from './_components/navbar'

const inter = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Melbourne Talent Hub',
  description: 'Global Talent Empowerment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>

    </html>
  )
}
