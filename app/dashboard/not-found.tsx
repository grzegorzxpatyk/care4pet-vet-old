import Link from 'next/link';
import Button from 'components/Button/Button';

export default function NotFound() {
  return (
    <div>
      404 - not found
      <Link passHref href='/dashboard'>
        <Button>Back to dashboard</Button>
      </Link>
    </div>
  );
}
