import Navigation from 'components/Navigation/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full p-8'>
      <Navigation />
      <main className='h-[82dvh]'>{children}</main>
    </div>
  );
}
