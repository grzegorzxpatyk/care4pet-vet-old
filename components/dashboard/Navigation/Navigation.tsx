import Link from 'next/link';

export default function Navigation() {
  return (
    <nav
      className='col-span-1 flex flex-col items-start justify-between
     rounded bg-zinc-300 p-4 dark:bg-zinc-800'
    >
      <Link href='/dashboard'>
        <h1 className='text-4xl font-bold'>
          <span className='text-blue-700'>Care</span>
          <span className='text-red-700'>4Pet</span>
        </h1>
      </Link>
      <ul className='flex w-full flex-col items-start justify-between gap-2'>
        {['patients', 'customers', 'inventory'].map((element) => (
          <Link href={`/dashboard/${element}`} key={element} className='w-full'>
            <li className='w-full rounded border-2 border-zinc-600 bg-zinc-700 px-4 py-2 capitalize transition-colors delay-[50ms] hover:bg-zinc-800'>
              {element}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
