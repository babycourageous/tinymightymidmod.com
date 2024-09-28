import { format } from 'date-fns'
import Image from 'next/image'

//sickening, gruesome, shocking
const movies: Array<{ title: string; date: string; movies: Array<Movie> }> = [
  {
    title: 'Spiritual Scares',
    date: '10/03/24',
    movies: [
      {
        title: 'Ouija: Origin of Evil',
        time: '7:30pm',
        director: 'Mike Flanagan',
        runningTime: 99,
        year: 2016,
        tagline:
          'When you talk to the other side, you never know who will be listening.',
        description:
          'In 1967 Los Angeles, a widowed mother and her two daughters add a new stunt to bolster their séance scam business and unwittingly invite authentic evil into their home. When the youngest daughter is overtaken by the merciless spirit, this small family confronts unthinkable fears to save her and send her possessor back to the other side.',
        videoId: 'uVXGLbhozK8',
        poster: 'ouija.jpg',
      },
      {
        title: 'Host',
        time: '10:00pm',
        year: 2020,
        director: 'Rob Savage',
        runningTime: 57,
        tagline: 'Someone new has joined the meeting.',
        description:
          'Six friends hire a medium to hold a séance via Zoom during lockdown — but they get far more than they bargained for as things quickly go wrong. When an evil spirit starts invading their homes, they begin to realise they might not survive the night.',
        videoId: 'SNlKbqHqGcY',
        poster: 'host.jpg',
      },
    ],
  },
  {
    title: 'Zombie Outbreaks',
    date: '10/10/24',
    movies: [
      {
        title: 'Train To Busan',
        time: '7:30pm',
        year: 2016,
        director: 'Yeon Sang-ho',
        runningTime: 118,
        tagline: 'Life-or-death survival begins.',
        description:
          'When a zombie virus pushes Korea into a state of emergency, those trapped on an express train to Busan must fight for their own survival.',
        videoId: '0_sV9luPnMk',
        poster: 'train.jpg',
      },
      {
        title: 'Rec',
        time: '10:00pm',
        year: 2007,
        director: 'Jaume Balagueró, Paco Plaza',
        runningTime: 78,
        tagline: 'One witness. One camera.',
        description:
          'A television reporter and cameraman follow emergency workers into a dark apartment building and are quickly locked inside with something terrifying.',
        videoId: 'oPvHTzqY2fM',
        poster: 'rec.jpg',
      },
    ],
  },
  {
    title: 'Bloody Slashers',
    date: '10/17/24',
    movies: [
      {
        title: 'In A Violent Nature',
        time: '7:30pm',
        year: 2024,
        director: 'Chris Nash',
        runningTime: 94,
        tagline: 'Nature is unforgiving.',
        description:
          'The enigmatic resurrection, rampage, and retribution of an undead monster in a remote wilderness unleashes an iconic new killer after a locket is removed from a collapsed fire tower that entombed its rotting corpse.',
        videoId: '5D8La4KMVzc',
        poster: 'in-a-violent-nature.jpg',
      },
      {
        title: 'Tucker and Dale vs Evil',
        time: '10:00pm',
        year: 2010,
        director: 'Eli Craig',
        runningTime: 89,
        tagline: 'Evil just messed with the wrong hillbillies.',
        description:
          'Two hillbillies are suspected of being killers by a group of paranoid college kids camping near the duo’s West Virginian cabin. As the body count climbs, so does the fear and confusion as the college kids try to seek revenge against the pair.',
        videoId: 'NdNpFoWrBDQ',
        poster: 'tucker-dale.jpg',
      },
    ],
  },
  {
    title: 'Female Frights',
    date: '10/024/24',
    movies: [
      {
        title: 'Raw',
        time: '7:30pm',
        year: 2016,
        director: 'Julia Ducournau',
        runningTime: 99,
        tagline: 'What are you hungry for?',
        description:
          'In Justine’s family everyone is a vet and a vegetarian. At 16, she’s a gifted teen ready to take on her first year in vet school, where her older sister also studies. There, she gets no time to settle: hazing starts right away. Justine is forced to eat raw meat for the first time in her life. Unexpected consequences emerge as her true self begins to form.',
        videoId: 'cdDZpQGsM5U',
        poster: 'raw.jpg',
      },
      {
        title: 'Titane',
        time: '10:00pm',
        year: 2021,
        director: 'Julia Ducournau',
        runningTime: 108,
        description:
          'A woman with a metal plate in her head from a childhood car accident embarks on a bizarre journey, bringing her into contact with a firefighter who’s reunited with his missing son after 10 years.',
        videoId: '_DmFHh7KsWc',
        poster: 'titane.jpg',
      },
    ],
  },
  {
    title: 'Halloween Horror',
    date: '10/31/24',
    movies: [
      {
        title: 'Halloween (1977)',
        time: '7:30pm',
        year: 1978,
        director: 'John Carpenter',
        runningTime: 91,
        tagline: 'The Night He Came Home!',
        description:
          'Fifteen years after murdering his sister on Halloween Night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
        videoId: '3JsrH8eUVOo',
        poster: 'halloween-1978.jpg',
      },
      {
        title: 'Halloween (2018)',
        time: '10:00pm',
        year: 2018,
        director: 'David Gordon Green',
        runningTime: 108,
        tagline: 'Face Your Fate.',
        description:
          'Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.',
        videoId: 'x_-x4Dwz-rU',
        poster: 'halloween-2018.jpg',
      },
    ],
  },
]
export default function OctoberPage() {
  return (
    <main className="px-3 py-2 space-y-7">
      {movies.map((movie) => (
        <div key={movie.title}>
          <h2 className="text-2xl">{format(movie.date, 'MMM dd')}</h2>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-2 lg:gap-x-8">
            {movie.movies.map((m) => (
              <Movie movie={m} key={movie.title} />
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}

type Movie = {
  title: string
  time: string
  director: string
  year: number
  tagline?: string
  description: string
  videoId: string
  poster: string
  runningTime: number
}
type Props = { movie: Movie }
function Movie({ movie }: Props) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-zinc-600 bg-zinc-900">
      {/* <div className="flex gap-x-3"> */}
      <div className="grid">
        <div className="aspect-h-3 row-span-full col-span-full relative aspect-w-2 bg-gray-200 group-hover:opacity-75 sm:h-96">
          <Image alt="poster" src={`/${movie.poster}`} fill />
        </div>
        <span className="z-10 bg-zinc-800/60 mb-3 p-4 self-end justify-self-start text-zinc-200 row-span-full col-span-full">
          {movie.time}
        </span>
      </div>
      <div className="flex flex-col gap-y-2 p-4 flex-1">
        <p>Directed by: {movie.director}</p>
        <p>Running Time: {movie.runningTime} mins</p>
        <p className="uppercase text-sm text-gray-400">{movie.tagline}</p>
        <p>{movie.description}</p>
      </div>

      {/* </div> */}
      {/* <div className="aspect-w-4 aspect-h-3">
        <YouTubeEmbed videoid={movie.videoId} />
      </div> */}
    </div>
  )
}

/*
<div className="hidden md:block flex-shrink-0 [flex-basis:15rem] bg-blue-300">
          <div className="relative aspect-w-2 aspect-h-3 bg-red-400">
            <Image
              src={`/${movie.poster}`}
              alt="poster"
              fill
              // objectFit="cover"
            />
          </div>
        </div>
        */
