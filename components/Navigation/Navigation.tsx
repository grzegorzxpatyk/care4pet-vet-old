import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='flex flex-row items-center justify-between rounded-lg bg-gray-200 dark:bg-gray-800 h-[12dvh] px-8'>
      <Link href='/'>
        <h1 className='text-2xl font-extrabold'>Care4Pet - Vet</h1>
      </Link>
      <div className='flex flex-row items-center justify-between gap-3'>
        <Link href='/mission'>Mission</Link>
        <Link href='/pricing'>Pricing</Link>
        <Link href='/live-demo'>Live demo</Link>
        <Link href='/login' className='ml-6'>Sign in</Link>
      </div>
    </nav>
  );
}
