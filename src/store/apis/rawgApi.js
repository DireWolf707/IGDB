import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_KEY = "ece3f7fa84b04b86b2c3f66e45a34d95"

const formatDate = (d) => {
  if (d > 9) return d
  return `0${d}`
}

const getCurrDate = (lastYr) => {
  const d = new Date()
  const day = formatDate(d.getDate())
  const month = formatDate(d.getMonth())
  let year = d.getFullYear()

  if (lastYr) year = year - 1
  return `${year}-${month}-${day}`
}

export const rawgApi = createApi({
  reducerPath: "rawg",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api",
  }),
  endpoints(builder) {
    return {
      seacrhGame: builder.query({
        query: (searchTerm) => {
          return {
            url: "/games",
            method: "GET",
            params: {
              key: API_KEY,
              page_size: 20,
              search: searchTerm,
            },
          }
        },
      }),

      fetchPopularGames: builder.query({
        query: () => {
          return {
            url: "/games",
            method: "GET",
            params: {
              key: API_KEY,
              ordering: "-rating",
              page_size: 20,
              dates: `${getCurrDate(true)},${getCurrDate()}`, //
            },
          }
        },
      }),

      fetchGameDetails: builder.query({
        query: (gameId) => {
          return {
            url: `/games/${gameId}`,
            method: "GET",
            params: {
              key: API_KEY,
            },
          }
        },
      }),

      fetchGameScreenshots: builder.query({
        query: (gameId) => {
          return {
            url: `/games/${gameId}/screenshots`,
            method: "GET",
            params: {
              key: API_KEY,
              page_size: 5,
            },
          }
        },
      }),
    }
  },
})

export const { useFetchGameDetailsQuery, useFetchGameScreenshotsQuery, useFetchPopularGamesQuery, useSeacrhGameQuery } = rawgApi
