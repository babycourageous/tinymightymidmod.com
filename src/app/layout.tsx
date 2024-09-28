import type { Metadata } from 'next'
import { Nanum_Gothic, Ubuntu_Mono, Monoton, Rubik } from 'next/font/google'
import './globals.css'

const ubuntu = Monoton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-ubuntu',
})
const nanum = Rubik({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-nanum',
})

export const metadata: Metadata = {
  title: 'TinyMightyMidMod',
  description:
    'Reviving a Mid Century Modern home, slowly and on a budget. Expect original wood paneling and siamese cats and cocktails.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${nanum.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
