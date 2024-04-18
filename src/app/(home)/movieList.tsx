import axios from "axios";

async function getMovie() {
  return await axios.get("movie/popular");
}

export default function MovieList() {
  return <div>movieList</div>;
}
