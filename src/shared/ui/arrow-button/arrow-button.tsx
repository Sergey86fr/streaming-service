import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import styles from "./arrow-button.module.css"
import cn from "classnames"
import { BUTTON_DIRECTION } from "../../enums/button-direction.enums";


interface IArrowButtonProps {
    direction: BUTTON_DIRECTION;
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

export const ArrowButton = ({direction, className, onClick, disabled, ...props}: IArrowButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(styles.arrowButton, className ?? "")}
            {...props}
          >
           {direction === BUTTON_DIRECTION.NEXT ?  <IoIosArrowDropright size={24} /> : <IoIosArrowDropleft size={24} />} 
          </button>
    )
}