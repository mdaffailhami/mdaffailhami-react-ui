import Link from "next/link";
import { Tooltip } from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";

export default () => {
  return (
    <div>
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
    </div>
  );
};
