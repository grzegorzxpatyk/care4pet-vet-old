import 'styles/tailwind.css';
import { GeistSans } from 'geist/font/sans';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${GeistSans.className} h-[100dvh] bg-zinc-100 dark:bg-zinc-900`}>{children}</body>
    </html>
  );
}
