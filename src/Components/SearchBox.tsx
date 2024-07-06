"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";
import InputField from "./InputField";

const SearchBox = () => {
  const [searcQuery, setSearchQuery] = useState("");
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(`/search` + "?" + createQueryString("search", searcQuery));
  };
  return (
    <form onSubmit={handleSearch} className="max-w-[600px] w-full">
      <div className="relative">
        <InputField
          type="text"
          name="search"
          placeholder="Search..."
          value={searcQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
        />
        <button
          type="submit"
          className="absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
