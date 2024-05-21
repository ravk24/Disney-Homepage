import { useEffect, useRef, useState } from "react";
import { getMovieByGenreId } from "../services/GlobalAPI";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import MoviesCard from "./MoviesCard";

const MovieList = ({ genreId }) => {
  const [moviesList, setMoviesList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        await getMovieByGenreId(genreId).then((response) => {
          //   console.log(response.data.results);
          setMoviesList(response.data.results);
        });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className="text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            mt-[130px]"
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8
     scrollbar-none scroll-smooth pt-4 px-3 pb-4"
      >
        {moviesList &&
          moviesList.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className="text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0 
            absolute right-0 
            mt-[130px]"
      />
    </div>
  );
};

export default MovieList;
