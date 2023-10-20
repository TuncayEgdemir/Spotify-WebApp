"use client";

import qs from "query-string";

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Input from "./Input";

interface SearchInputProps {}

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncevalue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
        title : debouncevalue
    };

    const url = qs.stringifyUrl({
        url:'/search',
        query: query
    });
    router.push(url);
  }, [debouncevalue]);

  return (
    <Input  
        placeholder="What do you want to listen to?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        
    />
  )
};

export default SearchInput;
