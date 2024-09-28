import Image from 'next/image'
import Link from 'next/link'

const files = [
  {
    source: 'october.webp',
    title: 'October',
  },
]
export default function MovieNightsPage() {
  return (
    <main className="p-6">
      <section className="space-y-3">
        <h1 className="text-4xl font-heading">Tiny Mighty Movie Nights</h1>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {files.map((file) => (
            <li key={file.source} className="relative">
              <Link href="movie-nights/october">
                <div className="grid">
                  <div className="group row-span-full col-span-full aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <Image
                      alt=""
                      src={`/${file.source}`}
                      className="pointer-events-none group-hover:opacity-75 transition-opacity"
                      fill
                      objectFit="cover"
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
                  <p className="z-10 flex flex-col items-center justify-center row-span-full col-span-full pointer-events-none mt-2 block truncate text-xl py-2 px-3 font-medium text-gray-100">
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
