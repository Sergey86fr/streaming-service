import { Lineicons } from "@lineiconshq/react-lineicons";
import { NetflixOutlined } from "@lineiconshq/free-icons";
import { Link } from "react-router-dom";
import cn from "classnames"
import styles from "./logo.module.css"

interface ILogoProps {
  className?: string;
}

export function Logo({className} : ILogoProps) {
  return (
    <Link className={cn(styles.logoLink, className || '')}  to={"/"}>
    <Lineicons className={cn(styles.logo)}  icon={NetflixOutlined} size={150}/>
    </Link>
  );
}

