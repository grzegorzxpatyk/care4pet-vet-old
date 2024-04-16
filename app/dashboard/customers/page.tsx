import Link from 'next/link';
import Button from 'components/Button/Button';
import CustomersList from 'components/CustomersList/CustomersList';

export default function Page() {
  return (
    <div className='flex w-full flex-col items-start justify-between gap-8'>
      <div className='flex w-full flex-row items-center justify-between'>
        <h1 className='text-4xl'>Customers</h1>
        <Link href='/dashboard/customers/create' passHref>
          <Button type='button'>Create new customer</Button>
        </Link>
      </div>
      <CustomersList />
    </div>
  );
}
