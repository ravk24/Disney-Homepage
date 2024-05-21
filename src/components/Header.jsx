import userAvatar from "../assets/images/user-avatar.svg";
import disneyLogo from "../assets/images/disneyLogo.png";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { useEffect, useState } from "react";
import HeaderItem from "./HeaderItem";
import { getTrendingVideos } from "../services/GlobalAPI";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const dotClickHandler = () => {
    setToggle((pv) => !pv);
  };

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-between p-5  ">
      <div className="flex items-center gap-8">
        <img src={disneyLogo} className="w-[80px] md:w-[115px] object-cover" />
        {/* md although means medium but it is large screen */}
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} key={item.name} />
          ))}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem Icon={item.icon} key={item.name} />
          )}
          <div className="md:hidden" onClick={dotClickHandler}>
            <HeaderItem Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#FFFFFF] border-[1px] border-gray-700 p-4 px-3 py-4">
                {menu.map(
                  (item, index) =>
                    index >= 3 && (
                      <HeaderItem
                        Icon={item.icon}
                        name={item.name}
                        key={item.name}
                      />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <img src={userAvatar} className="w-[40px] rounded-full" />
    </div>
  );
};

export default Header;
