import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Money Making Advisor - Legitimate Online Income Ideas',
  description: 'Get AI-powered roadmaps for legitimate ways to make money online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
