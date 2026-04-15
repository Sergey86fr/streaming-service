import { Skeleton } from "../skeleton/skeleton"


export const MovieListSkeleton = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:20}}>
          {
              Array(20).fill(null).map((_, index) => (
                <Skeleton key={index} width={300} height={500} variant="rectangular" borderRadius={8} />
            ))
          }
        </div>
    )
}