import { Outlet } from "react-router-dom";
import styles from "./auth-layout.module.css";
import cn from 'classnames'

export const AuthLayout = () => {
    return (
        <div className={cn(styles.authLayout)}>
            <Outlet/>
            </div>
    )
}