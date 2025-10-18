import { createFileRoute } from '@tanstack/react-router'
import { format } from 'date-fns'

import { MovieCard } from '~/movie-nights/components/movie'
import { movies } from '~/movie-nights/data'

export const Route = createFileRoute('/movie-nights/october')({
  component: OctoberPage,
})

function OctoberPage() {
  return (
    <main className="space-y-7 px-3 py-2">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2">
        {movies.map((movie) => (
          <div key={movie.title} className="flex flex-col">
            {movie.movies.length ? (
              <>
                <h2 className="text-2xl">
                  {format(movie.date, 'EEEE MMM dd')}
                </h2>
                <p>{movie.title}</p>
              </>
            ) : null}
            <div className="grid flex-1 grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-10">
              {movie.movies.map((m) => (
                <MovieCard movie={m} key={movie.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
