import { Flex } from "@radix-ui/themes";
import SearchBox from "./SearchBox";
import SortDropdown from "./SortDrpDown";

const FilterLayout = () => {
  return (
    <Flex justify={"between"} align={"center"} className="mb-6">
      {" "}
      <SearchBox />
      <SortDropdown />
    </Flex>
  );
};

export default FilterLayout;
