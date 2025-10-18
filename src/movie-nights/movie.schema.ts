import * as v from 'valibot'

type Movie = v.InferOutput<typeof movieSchema>

const movieSchema = v.object({
  title: v.string(),
  time: v.string(),
  director: v.string(),
  year: v.number(),
  tagline: v.optional(v.string()),
  description: v.string(),
  videoId: v.string(),
  poster: v.string(),
  runningTime: v.number(),
})

export type { Movie }
