"use client";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const SortDropdown = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" size="3" className="cursor-pointer">
          Sort by
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="2">
        <DropdownMenu.Item
          onClick={() =>
            push(pathname + "?" + createQueryString("order", "asc"))
          }
          className="cursor-pointer"
        >
          A-Z
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() =>
            push(pathname + "?" + createQueryString("order", "desc"))
          }
          className="cursor-pointer"
        >
          Z-A
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default SortDropdown;
