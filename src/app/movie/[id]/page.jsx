import MovieContainer from "@/src/app/containers/movie";
import { fetchSingleMovie } from "@/src/app/services/movie";
import { notFound } from "next/navigation";

export default async function MoviePage({ params, searchParams }) {
  const movieDetail = await fetchSingleMovie(params.id);

  if (movieDetail.success === false) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
  }

  return <MovieContainer movie={movieDetail} />;
}
