import type { CarouselItemProps } from "../../model/types";
import styles from'./cariusel-item.module.css'
import cn from "classnames"



export const CarouselItem = ({ children, style }: CarouselItemProps) => {
  return (
    <div className={cn(styles.item)} style={{

      ...style
    }}>
      {children}
    </div>
  );
};