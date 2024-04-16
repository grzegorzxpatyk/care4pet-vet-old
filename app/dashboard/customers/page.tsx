import Link from 'next/link';
import Button from 'components/Button/Button';
import CustomersList from 'components/dashboard/CustomersList/CustomersList';

export default function Page() {
  return (
    <div className='flex flex-col items-start justify-between'>
      <CustomersList />
      <Link href='/dashboard/customers/create' passHref>
        <Button type='button'>Create new customer</Button>
      </Link>
    </div>
  );
}
