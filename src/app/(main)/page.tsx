import Link from "next/link";
import { Tooltip } from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { IconButton } from "@/components/ui/icon-button";
import { HomeIcon } from "lucide-react";

export default () => {
  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto items-start bg-neutral-2 border-2 border-neutral-4 rounded-lg p-5 mt-5">
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <Link
              href="https://mdaffailhami.my.id"
              target="_blank"
              className="hover:text-primary"
            >
              <h1>MDaffaIlhami React UI</h1>
            </Link>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner>
              <Tooltip.Popup>MDaffaIlhami React UI</Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Skeleton className="size-20" />
      <Input id="input-text" placeholder="Enter text here.." />
      <Checkbox id="input-is-married" />
      <div className="flex gap-2">
        <IconButton variant="filled" icon={HomeIcon} />
        <IconButton variant="ghost" icon={HomeIcon} />
      </div>
    </div>
  );
};
