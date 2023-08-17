import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portifólio Victor Hugo',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-backgroud bg-[url('../../public/efect.svg')] bg-cover bg-no-repeat">
      <body className={inter.className}>{children}</body>
    </html>
  )
}