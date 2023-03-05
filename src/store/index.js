import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { dataReducer, changeSearchTerm, changeSelectedGameId, resetSearchTerm, resetSelectedGameId } from "./slices/dataSlice"

import {
  rawgApi,
  useFetchGameDetailsQuery,
  useFetchGameScreenshotsQuery,
  useFetchPopularGamesQuery,
  useSeacrhGameQuery,
} from "./apis/rawgApi"

export const store = configureStore({
  reducer: {
    data: dataReducer,
    [rawgApi.reducerPath]: rawgApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rawgApi.middleware),
})

setupListeners(store.dispatch)

export {
  rawgApi,
  useFetchGameDetailsQuery,
  useFetchGameScreenshotsQuery,
  useFetchPopularGamesQuery,
  useSeacrhGameQuery,
  changeSearchTerm,
  changeSelectedGameId,
  resetSearchTerm,
  resetSelectedGameId,
}
