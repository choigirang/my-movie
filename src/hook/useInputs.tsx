import { useState } from "react";

// 초깃값 없을 시 2중 에러
export default function useInputs(initialData: string | number) {
  const [keyword, setKeyword] = useState<string | number>(initialData);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setKeyword(value);
  };

  const setInit = () => {
    setKeyword("");
  };

  return [keyword, onChange, setInit] as const;
}
