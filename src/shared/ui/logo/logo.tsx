import { Lineicons } from "@lineiconshq/react-lineicons";
import { NetflixOutlined } from "@lineiconshq/free-icons";
import { Link } from "react-router-dom";
import cn from "classnames"
import styles from "./logo.module.css"

export function Logo() {
  return (
    <Link className={cn(styles.logoLink)}  to={"/"}>
    <Lineicons className={cn(styles.logo)}  icon={NetflixOutlined} size={150} />
    </Link>
  );
}

