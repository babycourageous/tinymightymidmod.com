import Image from 'next/image'
import { format } from 'date-fns'

//sickening, gruesome, shocking
const movies: Array<{ title: string; date: string; movies: Array<Movie> }> = [
  { title: '', date: '10/01/24', movies: [] },
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
    title: 'Tuesday Double Feature',
    date: '10/08/24',
    movies: [
      {
        title: 'The Worst Witch',
        time: '7:30pm',
        director: 'Robert Young',
        runningTime: 70,
        year: 1986,
        tagline: 'Things never go right for Mildred Hubble…',
        description:
          'Mildred is one of the young girls at a prestigious witch academy. She can’t seem to do anything right and is picked on by classmates and teachers. The headmistress of the school, Miss Cackle, has an evil twin sister who plans to destroy the school. Can Mildred foil the plan before the Grand Wizard comes to the Academy for a Halloween celebration you’ll never forget?!!',
        videoId: 'dOZNE7IPUkc',
        poster: 'worst-witch.jpg',
      },
      {
        title: 'The Craft',
        time: '10:00pm',
        director: 'Andrew Fleming',
        runningTime: 101,
        year: 1996,
        tagline: 'Welcome to the witching hour.',
        description:
          'A Catholic school newcomer falls in with a clique of teen witches who wield their powers against all who dare to cross them – be they teachers, rivals or meddlesome parents.',
        videoId: 'SxEqB--5ToI',
        poster: 'craft.jpg',
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
    title: 'Tuesday Double Feature',
    date: '10/15/24',
    movies: [
      {
        title: 'Earnest Scared Stupid',
        time: '7:30pm',
        year: 1991,
        director: 'John Cherry',
        runningTime: 91,
        tagline: "A comedy so funny it's scary",
        description:
          'Well-intentioned, eternally bumbling Ernest P. Worrell accidentally releases an evil demon from its sacred tomb. As the demon flexes its power and goes on a ruinous rampage, good-guy Ernest tries to step in to save the town from mass destruction. Trouble is, a 200-year-old curse has scared Ernest stupid, and that means hilarity all around! So, kick back and let the laugh-ridden adventures begin.',
        videoId: 'daxX6NY1tVM',
        poster: 'earnest.jpg',
      },
      {
        title: 'Army Of Darkness',
        time: '10:00pm',
        year: 1992,
        director: 'Sam Raimi',
        runningTime: 81,
        tagline: 'Trapped in time. Surrounded by evil. Low on gas.',
        description:
          'Ash, a handsome, shotgun-toting, chainsaw-armed department store clerk, is time warped backwards into England’s Dark Ages, where he romances a beauty and faces legions of the undead.',
        videoId: 'UHZQEtG8xYo',
        poster: 'army.jpg',
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
    title: 'Tuesday Double Feature',
    date: '10/22/24',
    movies: [
      {
        title: 'Arachnophobia',
        time: '7:30pm',
        year: 1990,
        director: 'Frank Marshall',
        runningTime: 109,
        tagline: 'Eight legs, two fangs, and an attitude.',
        description:
          'A large spider from the jungles of South America is accidentally transported in a crate with a dead body to America where it mates with a local spider. Soon after, the residents of a small California town disappear as the result of spider bites from the deadly spider offspring. It’s up to a couple of doctors with the help of an insect exterminator to annihilate these eight legged freaks.',
        videoId: 'vlK_P6ppLu0',
        poster: 'arachnophobia.jpg',
      },
      {
        title: 'Buffy The Vampire Slayer',
        time: '10:00pm',
        year: 1992,
        director: 'Fran Rubel Kuzu',
        runningTime: 86,
        tagline: 'She knows a sucker when she sees one.',
        description:
          'Blonde, bouncy Buffy is your typical high school cheerleader. But all that changes when a strange man informs her she’s been chosen by fate to kill vampires.',
        videoId: 'pnZkV_aR_9w',
        poster: 'buffy.jpg',
      },
    ],
  },
  {
    title: 'Femme Frights',
    date: '10/24/24',
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
    title: 'Tuesday Double Feature',
    date: '10/29/24',
    movies: [
      {
        title: 'The Witches',
        time: '7:30pm',
        director: 'Nicolas Roeg',
        runningTime: 91,
        year: 1990,
        tagline:
          'Saving the world from witches is a tall order for a boy they’ve turned into a mouse!',
        description:
          'A young boy named Luke and his grandmother go on vacation only to discover their hotel is hosting an international witch convention, where the Grand High Witch is unveiling her master plan to turn all children into mice. Will Luke fall victim to the witches’ plot before he can stop them?',
        videoId: '7mmbKELT2VU',
        poster: 'the-witches.jpg',
      },
      {
        title: 'The Witch',
        time: '10:00pm',
        director: 'Robert Eggers',
        runningTime: 92,
        year: 2015,
        tagline: 'Evil takes many forms.',
        description:
          'In 1630, a farmer relocates his family to a remote plot of land on the edge of a forest where strange, unsettling things happen. With suspicion and paranoia mounting, each family member’s faith, loyalty and love are tested in shocking ways.',
        videoId: '97OQ7MQC5Ck',
        poster: 'the-witch.jpg',
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
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
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-10 flex-1">
              {movie.movies.map((m) => (
                <Movie movie={m} key={movie.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
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
