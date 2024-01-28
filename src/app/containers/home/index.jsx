import { Categories } from "@/src/app/components/categories";
import { FeaturedMovie } from "@/src/app/components/featured-movie";
import { MoviesSection } from "@/src/app/components/movies-section";

export default function HomeContainer({
  popularMovies,
  topRatedMovies,
  categories,
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />
      <Categories categories={categories.slice(1, 6)} />
      {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection
        title="Your favorites"
        movies={topRatedMovies.slice(1, 7)}
      />
    </div>
  );
}
