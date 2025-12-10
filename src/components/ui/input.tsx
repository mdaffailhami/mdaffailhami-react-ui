import { Input as BaseInput } from "@base-ui-components/react";
import { cn } from "@/lib/utils";

export const Input = ({ className, ...props }: BaseInput.Props) => {
  return (
    <BaseInput
      className={cn(
        "border border-neutral-4 bg-neutral-2 h-10 w-full rounded-lg px-3 text-sm shadow-sm transition-colors",
        "placeholder:text-on-neutral-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-neutral-1 focus:outline-primary/75 outline-2",
        className
      )}
      {...props}
    />
  );
};
