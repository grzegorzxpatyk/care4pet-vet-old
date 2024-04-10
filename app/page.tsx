import { Metadata } from 'next'
import { Button } from 'components/Button/Button'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Care4Pet - Vet',
  description: 'Veterinary clinic management application.',
}

export default function Page() {
  return (
    <>
      <main className='m-5'>
        <section className='rounded-lg bg-gray-200 p-8 dark:bg-gray-800'>
          <h1 className='text-2xl font-extrabold'>Care4Pet - Vet</h1>
        </section>
        <section className='flex h-[50vh] min-h-96 flex-row items-end justify-evenly p-8'>
          <div className='w-[50%]'>
            <h1 className='text-6xl font-extrabold mb-4'>Care4Pet - Vet</h1>
            <p className='text-base text-justify mb-8'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ducimus dolorum sapiente earum dolor enim
              qui adipisci accusamus vero, maiores sint sequi dolorem magni, sunt est laudantium molestias perferendis
              fugit!
            </p>
          <div className='flex flex-row items-center justify-start gap-2'>
            <Button href='/'>Sign up</Button>
            <Button href='/' intent={'secondary'}>
              Sign in
            </Button>
          </div>
          </div>
          <Image src={''} alt='Dog promotional picture' height={300} width={250} placeholder='empty' className='border-2 border-zinc-500' />
        </section>
      </main>
    </>
  )
}
