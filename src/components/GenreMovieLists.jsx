import { genre } from "../Helpers/GenreList";
import MovieList from "./MovieList";
const GenreMovieLists = () => {
  return (
    <div>
      {genre.map((genreItem) => (
        <div key={genreItem.id} className="p-8 px-8 md:px-16">
          <h2
            className="text-[20px] text-white 
                font-bold"
          >
            {genreItem.name}
          </h2>
          <MovieList genreId={genreItem.id} />
        </div>
      ))}
    </div>
  );
};

export default GenreMovieLists;
