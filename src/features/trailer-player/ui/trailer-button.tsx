import React, { useState } from 'react';
import { Modal } from '../../../shared/ui/modal/modal';
import { SimpleTrailerPlayer } from './trailer-player';
import { useGetVideoTrailerQuery } from '../../../shared/api/kinopoiskApi';

interface TrailerButtonProps {
  trailerId: number;
  className?: string;
}

export const TrailerButton: React.FC<TrailerButtonProps> = ({
  trailerId,
//   filmTitle,
//   variant = 'button',
  className = ''
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

const { data: videos, isLoading, error } = useGetVideoTrailerQuery(trailerId, {
    skip: !isModalOpen, 
  });




  const handleClick = () => {
    setIsModalOpen(true);

  };

  const handleClose = () => {
    setIsModalOpen(false);
  };


    return (
      <>
        <button
          onClick={handleClick}
          className={`trailer-icon-btn ${className}`}
          aria-label="Смотреть трейлер"
          title="Смотреть трейлер"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="10,8 16,12 10,16" fill="currentColor" />
          </svg>
        </button>
        
        <Modal
          isOpen={isModalOpen}
          onClose={handleClose}
        >
          <>
            {isLoading && <div>Загрузка видео...</div>}
            {error && <div>Ошибка загрузки видео</div>}
            {videos && videos.items && videos.items.length > 0 ? (
               <SimpleTrailerPlayer video={videos.items[0]} />
            ) : (
              !isLoading && <div>Видео не найдено</div>
            )}
          </>
          
          </Modal>
      </>
    );
//   
};