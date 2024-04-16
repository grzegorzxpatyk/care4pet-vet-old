import createCustomer from 'app/lib/actions';
import Button from 'components/Button/Button';

export default function CreateCustomerForm() {
  return (
    <form
      action={createCustomer}
      className='flex flex-col items-start justify-between gap-8 bg-zinc-200/30 dark:bg-zinc-800/50'
    >
      <h1 className='mb-8 text-4xl'>Create new customer</h1>
      <label htmlFor='name' className='flex select-none flex-col items-start justify-between gap-2'>
        Full Name
        <input type='text' name='name' id='name' className='rounded p-2 text-base' />
      </label>
      <label htmlFor='name' className='flex select-none flex-col items-start justify-between gap-2'>
        Email
        <input type='email' name='email' id='email' className='rounded p-2 text-base' />
      </label>
      <label htmlFor='name' className='flex select-none flex-col items-start justify-between gap-2'>
        Phone number
        <input type='tel' name='phoneNumber' id='phoneNumber' className='rounded p-2 text-base' />
      </label>
      <Button type='submit'>Save</Button>
    </form>
  );
}
