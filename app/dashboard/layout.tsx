import Navigation from 'components/Navigation/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='grid h-full w-full grid-cols-5 gap-4 p-8'>
      <Navigation />
      <div className='col-span-4 h-full w-full rounded bg-zinc-400 p-8 dark:bg-zinc-800'>{children}</div>
    </main>
  );
}
