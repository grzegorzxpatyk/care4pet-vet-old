import 'styles/tailwind.css';
import { GeistSans } from 'geist/font/sans';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${GeistSans.className} dark:bg-zinc-900 bg-zinc-100 h-[100dvh]`}>
        {children}
      </body>
    </html>
  );
}
