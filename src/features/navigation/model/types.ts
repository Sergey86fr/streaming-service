import { BsStars, BsFillHeartFill } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";
import { FaSortAmountDown } from "react-icons/fa";
import { GiVampireCape } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { GiRaiseZombie, GiMushroomCloud } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { TbMoodKidFilled } from "react-icons/tb";

export const iconComponents = {
  BsStars,
  RiStarSFill,
  FaSortAmountDown,
  GiVampireCape,
  FaBookOpen,
  MdFamilyRestroom,
  BsFillHeartFill,
  GiRaiseZombie,
  GiMushroomCloud,
  BiCameraMovie,
  MdLiveTv,
  TbMoodKidFilled,
} as const;


export type IconName = keyof typeof iconComponents;

export interface ISidebarItem {
  title: string;
  icon: IconName;
  url: string;
  type: string;
}
