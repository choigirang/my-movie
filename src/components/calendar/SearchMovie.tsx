import useInputs from "@/hook/useInputs";
import { Button, Container } from "@mui/material";
import React, {
  FormEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { styled as MuiStyled } from "@mui/material";
import SearchResults from "./SearchResults";
import useMovieData from "@/hook/useMovieData";
import { MovieDetailType } from "@/type/movie";

export default function SearchMovie() {
  const [keyword, setKeyword, setInit] = useInputs("");
  const [apiKeyword, setApiKeyword] = useState<string | number>("");
  const { data, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMovieData(apiKeyword);
  const observe = useRef<HTMLLIElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApiKeyword(keyword);
  };

  useEffect(() => {
    if (observe.current && !hasNextPage) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );
    if (observe.current) {
      observer.observe(observe.current);
    }

    return () => {
      if (observe.current) {
        observer.unobserve(observe.current);
      }
    };
  }, [observe.current, data?.pageParams]);


  const props = {keyword, apiKeyword, data, observe}

  return (
    <React.Fragment>
      <Wrapper onSubmit={(e) => handleSubmit(e)}>
        <InputWithData>
          <Input aria-label="search-movie" onChange={setKeyword} />

      <SearchResults {...props}/>
        </InputWithData>
        <Btn type="submit">검색</Btn>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = MuiStyled("form")({
  display: "grid",
  gridTemplateColumns: "80% 20%",
  gap: "16px",
  padding: "20px",
});

const InputWithData = MuiStyled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
});

const Btn = MuiStyled(Button)({});

const Input = MuiStyled("input")({
  width: "100%",
  height: 50,
  paddingLeft: 20,
  backgroundColor: "rgba(255,255,255,0.8)",
  borderRadius: 5,

  "&:focus": {
    backgroundColor: "white",
    outlinke: "none",
  },
});
