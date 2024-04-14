import { cva, type VariantProps } from 'class-variance-authority';

import { twMerge } from 'tailwind-merge';

const button = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'rounded',
    'text-center',
    'border',
    'border-zinc-700',
    'transition-all',
    'delay-50',
    'active:scale-95',
    'font-semibold'
  ],
  {
    variants: {
      variant: {
        primary: ['bg-zinc-900', 'text-zinc-200', 'hover:enabled:bg-zinc-800'],
        secondary: ['bg-zinc-300', 'text-zinc-900', 'hover:enabled:bg-zinc-800', 'hover:enabled:text-zinc-200'],
      },
      size: {
        sm: ['min-w-20', 'h-fit', 'min-h-10', 'text-sm', 'py-1.5', 'px-4'],
        base: ['min-w-24', 'h-fit', 'min-h-10', 'text-base', 'py-2', 'px-4'],
        lg: ['min-w-32', 'h-fit', 'min-h-12', 'text-lg', 'py-2.5', 'px-6'],
      },
      underline: { true: ['underline'], false: [] },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  underline?: boolean;
}

export default function Button({ className, variant: intent, size, underline, ...props }: ButtonProps) {
  return (
    <button className={twMerge(button({ variant: intent, size, className, underline }))} {...props}>
      {props.children}
    </button>
  );
}
