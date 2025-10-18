import { createFileRoute, Link } from '@tanstack/react-router'

const files = [
  {
    source: 'october.webp',
    title: 'October',
  },
]

export const Route = createFileRoute('/movie-nights/')({
  component: MovieNightsPage,
})

function MovieNightsPage() {
  return (
    <main className="p-6">
      <section className="space-y-3">
        <h1 className="font-title text-4xl">Tiny Mighty Movie Nights</h1>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {files.map((file) => (
            <li key={file.source} className="relative">
              <Link to="/movie-nights/october">
                <div className="grid">
                  <div className="group col-span-full row-span-full block aspect-10/7 w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img
                      alt=""
                      src={`/assets/movie-nights/2024/${file.source}`}
                      className="pointer-events-none h-full w-full object-cover transition-opacity group-hover:opacity-75"
                    />
                    <button
                      type="button"
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">
                        View details for {file.title}
                      </span>
                    </button>
                  </div>
                  <p className="pointer-events-none z-10 col-span-full row-span-full mt-2 block flex flex-col items-center justify-center truncate px-3 py-2 font-medium text-gray-100 text-xl">
                    {file.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
