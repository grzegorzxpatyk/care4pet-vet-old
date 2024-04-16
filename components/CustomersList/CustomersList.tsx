import Link from 'next/link';
import { fetchCustomers } from 'app/lib/data';
import Button from 'components/Button/Button';

export default async function CustomersList() {
  const customers = await fetchCustomers();
  console.log(customers);

  return (
    <div className='flex w-full flex-col items-start justify-start gap-8'>
      <table className='w-full table-auto'>
        <thead className='bg-blue-800/30'>
          <tr>
            <td className='rounded-s p-2'>Name</td>
            <td>Email</td>
            <td>Phone number</td>
            <td className='w-20 rounded-e'></td>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phonenumber}</td>
              <td>
                <Link href={`/dashboard/customers/${customer.id}`} passHref>
                  <Button variant={'ghost'} size={'sm'}>
                    edit
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
