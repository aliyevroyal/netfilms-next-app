import { CategoriesLoading } from "@/src/app/components/categories";
import { FeatureMovieLoading } from "@/src/app/components/featured-movie";
import { MoviesSectionLoading } from "@/src/app/components/movies-section";

function HomeLoading() {
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default HomeLoading;
