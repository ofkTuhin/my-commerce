"use client";
import { Button, DropdownMenu } from "@radix-ui/themes";

const SortDropdown = ({
  onSortChange,
}: {
  onSortChange: (order: string) => void;
}) => {
  const handleSortChange = (order: string) => {
    onSortChange(order);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="cursor-pointer">
        <Button variant="soft" size="3">
          Sort by
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="2">
        <DropdownMenu.Item
          onClick={() => handleSortChange("asc")}
          className="cursor-pointer"
        >
          A-Z
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => handleSortChange("desc")}
          className="cursor-pointer"
        >
          Z-A
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default SortDropdown;
