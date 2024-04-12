import 'styles/tailwind.css';
import { GeistSans } from 'geist/font/sans';
import Navigation from 'components/Navigation/Navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${GeistSans.className} py-[3dvh] px-8 box-content dark:bg-zinc-900 bg-zinc-100 h-full`}>
        <Navigation />
        <main className='h-[82dvh]'>{children}</main>
      </body>
    </html>
  );
}
