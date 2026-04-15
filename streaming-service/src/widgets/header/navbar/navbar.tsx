import styles from "./navbar.module.css";
import cn from "classnames";

export const Navbar = () => {
  return (
    <>
      <div className={cn(styles.navbar)}>
        <div style={{position:'absolute', zIndex:1}}>
        <img style={{objectFit:'cover', width:"100%", height:'100%', objectPosition:'center'}} src="./image-bg.jpg" alt="bg" />

        </div>
        <div className={cn(styles.background)}></div>
        <div className={cn(styles.background2)}></div>
        <h2 className={cn(styles.logo)}>NETFLIX</h2>
        
        <div
          style={{
            overflowX: "hidden",
            position: "relative",
            top:400,
            height: 100,
            zIndex: 1,
          }}
        >
          <div>
            <div>
              <div className={cn(styles.line)}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
