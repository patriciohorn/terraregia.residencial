import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-colors duration-300 ease-in-out',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white shadow hover:bg-primary/90',
        outline:
          'border border-neutral-300 bg-background shadow-sm hover:bg-black hover:text-white',
        invertedOutline:
          'bg-foreground shadow-sm hover:bg-white hover:text-foreground',
        secondary:
          'bg-white text-black shadow-sm hover:bg-black hover:text-white',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        unselected: 'bg-background text-black shadow-sm border',
        selected:
          'bg-[#dceef1] text-white shadow-sm text-[#192b33] border border-[#5ca6b4]',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-8 px-4 py-2 text-sm',
        lg: 'h-16 px-6 py-4 text-2xl',
        iconsm: 'h-8 w-8',
        icon: 'h-10 w-10 sm:h-12 sm:w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
