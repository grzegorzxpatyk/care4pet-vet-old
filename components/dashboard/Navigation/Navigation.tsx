import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='col-span-1 flex flex-col items-start justify-start rounded bg-zinc-300 p-4 dark:bg-zinc-800'>
      <Link href='/dashboard' className='mb-4'>
        <h1 className='text-2xl font-bold'>
          <span className='text-blue-700'>Care</span>
          <span className='text-red-700'>4Pet</span>
        </h1>
      </Link>
      <Link href={'/dashboard/patients'}>Patients</Link>
      <Link href={'/dashboard/clients'}>Clients</Link>
      <Link href={'/dashboard/medicine-inventory'}>Medicine Inventory</Link>
    </nav>
  );
}
