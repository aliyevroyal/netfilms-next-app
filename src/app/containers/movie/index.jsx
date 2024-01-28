import { FeaturedMovie } from "@/src/app/components/featured-movie";

export default function MovieContainer({ movie }) {
  return <FeaturedMovie movie={movie} isCompact={false} />;
}
