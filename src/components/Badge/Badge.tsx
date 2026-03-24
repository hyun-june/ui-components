import { cva, type VariantProps } from "class-variance-authority";
import cn from "../../utils/cn";

const badgeVariants = cva(
  "rounded-lg  inline-flex items-center px-2 py-1 gap-1",
  {
    variants: {
      variant: {
        recruit: "bg-[#b0f8b0]",
        closed: "bg-slate-300",
        auto: "bg-blue-100",
        approve: "bg-[#f8f0b0]",
        tag: "bg-[#f5f5f5]",
        deadline: "bg-slate-100",
      },
      size: {
        default: "text-md",
        sm: "text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

export const Badge = ({ variant, size, className, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
};
