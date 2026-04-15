import { Fragment } from "react"
import { Skeleton } from "../../../../shared/ui/skeleton/skeleton"
import styles from "./carousel-skeleton.module.css"
import cn from "classnames"

export const CarouselSkeleton = ({itemsSkeleton}:{itemsSkeleton:number}) => {
   return (
    <div className={cn(styles.carouselSkeleton)}>
          {
              Array(itemsSkeleton).fill(null).map((_, index) => (
                <Fragment key={index}>
                <Skeleton variant="text" height={30} width={300}/>
                <Skeleton  height={300} variant="rectangular" borderRadius={8} />
                </Fragment>
            ))
          }
    </div>
   )
}