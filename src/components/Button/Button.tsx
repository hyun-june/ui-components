import { cva, type VariantProps } from "class-variance-authority";
import cn from "../../utils/cn";

const buttonVariants = cva("rounded-lg border-2 border-gray-200", {
  variants: {
    variant: {
      default: "bg-primary",
      secondary: "bg-secondary",
    },
    size: {
      default: "px-2 py-1",
      md: "px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export const Button = ({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};
