import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex h-[100dvh] w-screen flex-col items-center justify-center gap-8'>
      <h3>Login</h3>
      <Link href='/dashboard'>dashboard</Link>
      <Link href='/'>Back home</Link>
    </div>
  );
}
