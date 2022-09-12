import Image from 'next/image';
import { useModalStore } from '../store/modal';
import { Movie } from '../typing';

interface Props {
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  const { openModal, setCurrentMovie } = useModalStore((state) => state);

  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      onClick={() => {
        openModal();
        setCurrentMovie(movie);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}

export default Thumbnail;
