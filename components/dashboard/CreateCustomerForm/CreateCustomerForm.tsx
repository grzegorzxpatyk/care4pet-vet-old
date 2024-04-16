import Button from 'components/Button/Button';

export default function CreateCustomerForm() {
  return (
    <form className='flex flex-col items-start justify-between gap-8 bg-zinc-200/30 dark:bg-zinc-800/50'>
      <h1 className='mb-8 text-4xl'>Create new customer</h1>
      <label htmlFor='name' className='flex flex-col items-start justify-between gap-2'>
        Full Name
        <input type='text' name='name' id='name' />
      </label>
      <Button type='submit'>Save</Button>
    </form>
  );
}
