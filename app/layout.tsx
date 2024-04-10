import "styles/tailwind.css"
import { GeistSans } from 'geist/font/sans';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} h-screen w-full bg-gray-100 dark:bg-gray-900`}>{children}</body>
    </html>
  )
}
