import { fetchCustomers } from 'app/lib/data';

export default async function CustomersList() {
    const customers = await fetchCustomers();
    console.log(customers);
    
    return (
        <div className='flex flex-col justify-start items-start gap-8'>
            <h1 className='text-4xl'>Customers</h1>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {customer.name} {customer.email} {customer.phonenumber}
                    </li>
                ))}
            </ul>
        </div>
    );
}