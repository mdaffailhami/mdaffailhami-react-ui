import { Button } from "@base-ui-components/react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const IconButton = ({
  variant,
  icon: Icon,
  className,
  ...props
}: Button.Props & {
  variant: "filled" | "ghost";
  icon: LucideIcon;
}) => {
  return (
    <Button
      className={cn(
        "size-10 p-2.5 transition-colors",
        "cursor-pointer disabled:pointer-events-none disabled:opacity-50",
        variant === "filled" &&
          "bg-primary text-on-primary hover:outline-primary/75 hover:bg-primary/75 rounded-lg shadow-lg shadow-neutral-4 outline-2 outline-offset-2",
        variant === "ghost" && "hover:bg-neutral-3 text-primary rounded-full",
        className
      )}
      {...props}
    >
      <Icon className="size-full" />
    </Button>
  );
};
