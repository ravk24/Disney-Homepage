import disneyI from "../assets/images/disney.png";
import marvelI from "../assets/images/marvel.png";
import nationalGI from "../assets/images/nationalG.png";
import pixarI from "../assets/images/pixar.png";
import starwarI from "../assets/images/starwar.png";
import disneyV from "../assets/videos/disney.mp4";
import marvelV from "../assets/videos/marvel.mp4";
import nationalGV from "../assets/videos/national-geographic.mp4";
import pixarV from "../assets/videos/pixar.mp4";
import starWarsV from "../assets/videos/star-wars.mp4";

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disneyI,
      video: disneyV,
    },
    {
      id: 2,
      image: pixarI,
      video: pixarV,
    },
    {
      id: 3,
      image: marvelI,
      video: marvelV,
    },
    {
      id: 4,
      image: starwarI,
      video: starWarsV,
    },
    {
      id: 5,
      image: nationalGI,
      video: nationalGV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
          />
          <img
            src={item.image}
            alt={item.id}
            className="className='w-full z-[1] opacity-100'"
          ></img>
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
