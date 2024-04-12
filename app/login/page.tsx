import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex h-[100dvh] w-screen flex-col items-center justify-center'>
      <h3>Login</h3>
      <form action='login' className='m-8 p-4'></form>
      <Link href='/'>Back home</Link>
    </div>
  );
}
