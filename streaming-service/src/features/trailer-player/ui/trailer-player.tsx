

export interface IVideo {
    url: string;
    name: string;
    site: 'YOUTUBE' | 'YANDEX_DISK' | 'KINOPOISK_WIDGET';
}

interface ISimpleTrailerPlayerProps {
    video: IVideo;
    width?: number;
    height?: number;
}

export const SimpleTrailerPlayer = ({ 
    video, 
    width = 500, 
    height = 500 
}: ISimpleTrailerPlayerProps) => {
    
    // const [error, setError] = useState<string | null>(null);

    const getYoutubeVideoId = (url: string): string | null => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const renderPlayer = () => {
        switch (video.site) {
            case 'YOUTUBE': {
                const videoId = getYoutubeVideoId(video.url);
                if (!videoId) return <div>Ошибка: неверная ссылка YouTube</div>;
                
                return (
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        width={width}
                        height={height}
                        allowFullScreen
                        title={video.name}
                        style={{ border: 'none' }}
                    />
                );
            }

            case 'YANDEX_DISK': {
                const embedUrl = video.url.replace('/public?', '/embed?');
                return (
                    <iframe
                        src={embedUrl}
                        width={width}
                        height={height}
                        allowFullScreen
                        title={video.name}
                        style={{ border: 'none' }}
                    />
                );
            }

            case 'KINOPOISK_WIDGET': {
                return (
                    <div>
                        <p>Трейлер доступен только на Кинопоиске</p>
                        <a 
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '10px 20px',
                                background: '#ff6b6b',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '4px'
                            }}
                        >
                            Смотреть на Кинопоиске
                        </a>
                    </div>
                );
            }

            default:
                return <div>Неподдерживаемый тип видео</div>;
        }
    };

    return (
        <div>
            {renderPlayer()}
            {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
        </div>
    );
};