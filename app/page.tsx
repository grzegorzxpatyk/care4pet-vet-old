import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from 'components/Button/Button';
import DogPic from './assets/dog-landing.jpg';

export const metadata: Metadata = {
  title: 'Care4Pet - Vet',
  description: 'Veterinary clinic management application.',
};

export default function Page() {
  return (
    <>
      <section className='flex h-full flex-row items-center justify-evenly p-8'>
        <div className='w-[50%]'>
          <h1 className='mb-4 text-6xl font-extrabold'>
            Welcome to <span className='text-sky-700'>Care</span>
            <span className='text-red-700'>4Pet</span> Vet
          </h1>
          <h2 className='mb-8 text-2xl font-semibold'>Streamlining Veterinary Care</h2>
          <p className='mb-8 text-justify text-base'>
            Manage your veterinary clinic with ease and efficiency using Care4Pet Vet, the all-in-one web application
            designed to revolutionize the way you care for your furry patients.
          </p>
          <div className='flex flex-row items-center justify-start gap-2'>
            <Button href='/'>Read more</Button>
            <Button href='/' intent={'secondary'}>
              Sign up
            </Button>
          </div>
        </div>
        <Image
          src={DogPic}
          alt='Dog promotional picture'
          width={300}
          placeholder='blur'
          className='rounded-lg shadow-2xl dark:shadow-blue-300'
        />
      </section>
    </>
  );
}
