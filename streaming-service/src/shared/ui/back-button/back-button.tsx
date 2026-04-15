import { IoIosArrowDropleft } from "react-icons/io"
import  cn from "classnames";
import styles from "./back-button.module.css"
import { useNavigate } from "react-router-dom"

export const BackButton = () => {
      const navigate = useNavigate()
    return (
        <button className={cn(styles.buttonBack)} onClick={() => navigate(-1)}>
        <IoIosArrowDropleft size={24} />
      </button>
    )
}