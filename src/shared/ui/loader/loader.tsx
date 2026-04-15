import styles from "./loader.module.css"
import cn from "classnames"

export const Loader = () => {
    return (
        <div className={cn(styles.loader)}></div>
    )
}