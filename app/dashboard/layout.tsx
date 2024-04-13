import Navigation from 'components/dashboard/Navigation/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='grid h-full w-full grid-cols-5 p-8 gap-4'>
      <Navigation />
      <div className='col-span-4'>{children}</div>
    </main>
  );
}
