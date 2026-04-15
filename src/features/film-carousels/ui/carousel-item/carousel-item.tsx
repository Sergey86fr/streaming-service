import type { CarouselItemProps } from "../../model/types";



export const CarouselItem = ({ children, style }: CarouselItemProps) => {
  return (
    <div style={{
      flex: "0 0 auto", // Не сжимается и не растягивается
      width: "200px",
      height:"300px", // Фиксированная ширина для каждого элемента
      ...style
    }}>
      {children}
    </div>
  );
};