import Link from 'next/link';
import Button from 'components/Button/Button';

export default function NotFound() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-8'>
      <h1>404 - Could not find requested resource.</h1>
      <Link passHref href={'/'}>
        <Button>Go back home</Button>
      </Link>
    </div>
  );
}
