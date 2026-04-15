import { Carousel } from "..";
import { ErrorMessage } from "../../../../shared/ui";
import { useCarousels } from "../../model/use-carousel";
import { CarouselSkeleton } from "../carousel-skeleton/carousel-skeleton";

export const Carousels = () => {
   const { carousels, isLoading, hasError } = useCarousels();

  if (isLoading) return <CarouselSkeleton itemsSkeleton={carousels.length} />
  // <p>Loading ...</p>;

  if (hasError) return <ErrorMessage />;
//   console.log(filmsTopCollection.data, 'test-carousel');
  


 

  return <div style={{width:'100%'}}>
    {carousels.map((item) => (
      <Carousel item={item} key={item.title} />
    ))}
  </div>;
}