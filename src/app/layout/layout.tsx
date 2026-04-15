import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"
import cn from "classnames"
import { Footer } from "../../widgets/footer"
import { Header } from "../../widgets/header"


export const Layout = () => {


    
    return (
        <div className={cn(styles.layout)}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}