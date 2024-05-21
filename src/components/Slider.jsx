import { useEffect, useRef, useState } from "react";
import { getTrendingVideos } from "../services/GlobalAPI";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const Slider = () => {
  const [movies, setMovies] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        await getTrendingVideos.then((response) => {
          // console.log(response.data.results);
          setMovies(response.data.results);
        });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  const sliderLeft = (element) => (element.scrollLeft -= screenWidth - 110);

  const sliderRight = (element) => (element.scrollLeft += screenWidth - 110);

  return (
    <div>
      <HiChevronLeft
        className="text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer hidden md:block"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 hidden md:block"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movies.map(
          (item) =>
            item.backdrop_path && (
              <img
                key={item.id}
                src={IMAGE_BASE_URL + item.backdrop_path}
                alt={item.name}
                className="min-w-full md:h-[310px] border-[4px] border-transparent object-cover object-left-top mr-5 rounded-md hover:border-[4px] hover:border-gray-400 transition-all duration-100 ease-in-out"
              />
            )
        )}
      </div>
    </div>
  );
};

export default Slider;

// <div>
//   {movies.length > 0 && (
//     <ul>
//       {movies.map((item) => (
//         <li key={item.id}>
//           {
//             <img
//               className="min-w-full h-[310px] object-cover "
//               src={IMAGE_BASE_URL + item.backdrop_path}
//               alt={item.name}
//             />
//           }
//         </li>
//       ))}
//     </ul>
//   )}
//   {movies.length === 0 && <p>Fetching Data....</p>}
// </div>
