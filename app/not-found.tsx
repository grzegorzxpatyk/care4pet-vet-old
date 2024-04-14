import Link from 'next/link';
import Button from 'components/Button/Button';

export default function NotFound() {
  return (
    <div className='flex flex-col gap-8 h-full w-full items-center justify-center'>
      <h1>404 - Could not find requested resource.</h1>
      <Link passHref href={'/'}>
        <Button>Go back home</Button>
      </Link>
    </div>
  );
}
