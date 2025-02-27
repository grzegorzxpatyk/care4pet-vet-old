import Link from 'next/link';
import Button from 'components/Button/Button';

export default function Navigation() {
  return (
    <nav className='flex h-[12dvh] flex-row items-center justify-between rounded-lg px-8'>
      <Link href='/'>
        <h1 className='text-2xl font-extrabold'>Care4Pet - Vet</h1>
      </Link>
      <div className='flex flex-row items-center justify-between gap-3'>
        <Link href='/mission'>Mission</Link>
        <Link href='/features'>Features</Link>
        <Link href='/pricing'>Pricing</Link>
        <Link href='/login' className='ml-6'>
          <Button size={'sm'}>Sign in</Button>
        </Link>
      </div>
    </nav>
  );
}
