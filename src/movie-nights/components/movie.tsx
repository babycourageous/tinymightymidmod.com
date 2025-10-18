import type { Movie } from '../movie.schema'

type Props = { movie: Movie }

function MovieCard({ movie }: Props) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-zinc-600 bg-zinc-900">
      <div className="grid">
        <div className="relative col-span-full row-span-full bg-gray-200 group-hover:opacity-75 sm:h-96">
          <img
            alt="poster"
            src={`/assets/movie-nights/2024/october/${movie.poster}`}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="z-10 col-span-full row-span-full mb-3 self-end justify-self-start bg-zinc-800/60 p-4 text-zinc-200">
          {movie.time}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-y-2 p-4">
        <p>Directed by: {movie.director}</p>
        <p>Running Time: {movie.runningTime} mins</p>
        <p className="text-gray-400 text-sm uppercase">{movie.tagline}</p>
        <p>{movie.description}</p>
      </div>
    </div>
  )
}

export { MovieCard }
