import { Link } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./carousel.module.css";
import cn from "classnames"
import { CarouselItem } from "../carousel-item/carousel-item";
import { MoviePoster } from "../../../../entities/film";
import { ArrowButton } from "../../../../shared/ui/arrow-button/arrow-button";
import { BUTTON_DIRECTION } from "../../../../shared/enums/button-direction.enums";
import type { ICarouselObj } from "../../model/types";
import { AddToFavoritesButton } from "../../../add-to-favorites/ui/add-to-favorites-button/add-to-favorites-button";


export interface ICarouselProps {
  item: ICarouselObj;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}


export const Carousel = ({
  item,
  autoPlay = false,
  autoPlayInterval = 2000,
}: ICarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsToShow = 7;

  // Проверяем наличие данных
  if (!item.data || item.data.length === 0) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const nextSlide = useCallback(() => {
    if (currentIndex + itemsToShow < item.data!.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Если достигли конца - возвращаемся к началу
      setCurrentIndex(0);
    }
  }, [currentIndex, item.data, itemsToShow]);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      // Если в начале - переходим к концу
      setCurrentIndex(Math.max(0, item.data!.length - itemsToShow));
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    // Очистка интервала при размонтировании
    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, isPaused, autoPlayInterval, nextSlide]); // Зависимости

  const handleMouseEnter = () => {
    if (autoPlay) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      setIsPaused(false);
    }
  };

  const visibleItems = item.data.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  return (
    // <div>
    //     <Link to={item.url}><h3>{item.title}</h3></Link>
    //     <div style={{display:"flex", alignItems:"center"}}>
    //         <IoIosArrowDropleft />
    //         {
    //            !!item.data?.map((film) => (
    //             <CarouselItem style={{overflow:"hidden", width:"100%"}} key={film.kinopoiskId}>
    //                 <MovieCard film={film} />
    //             </CarouselItem>
    //            ))
    //         }
    //         <IoIosArrowDropright />
    //     </div>
    // </div>

    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.carouselContainer}
    >
      <div className={cn(styles.carouselHeader)}>
        <Link to={item.url}>
          <h3 className={styles.carouselTitle}>{item.title}</h3>
        </Link>
        <div className={styles.carouselNavigation}>
          <ArrowButton onClick={prevSlide} disabled={currentIndex === 0} direction={BUTTON_DIRECTION.PREV}/>
          <ArrowButton onClick={nextSlide} disabled={currentIndex + itemsToShow >= item.data.length} direction={BUTTON_DIRECTION.NEXT}/>
          {/* <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={styles.carouselButton}
          >
            <IoIosArrowDropleft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + itemsToShow >= item.data.length}
            className={styles.carouselButton}
          >
            <IoIosArrowDropright size={24} />
          </button> */}
        </div>
      </div>

      <div className={styles.carouselTrack} ref={carouselRef}>
        {visibleItems.map((film) => (
          <CarouselItem key={film.kinopoiskId} style={{position:'relative'}}>
          <Link to={`/movie/${film.kinopoiskId}`}>
            <MoviePoster film={film} />
          </Link>
          <AddToFavoritesButton film={film} style={{position:'absolute', bottom:0, right:0}} />
          </CarouselItem>
        ))}
      </div>

      {/* Индикатор прогресса */}
      {/* <div className={styles.carouselProgress}>
        {Array.from(
          { length: Math.ceil(item.data.length / itemsToShow) },
          (_, i) => (
            <div
              key={i}
             className={cn(styles.progressDot, {
          [styles.active]: i === Math.floor(currentIndex / itemsToShow),
        })}
              onClick={() => setCurrentIndex(i * itemsToShow)}
            />
          )
        )}
      </div> */}
    </div>
  );
};