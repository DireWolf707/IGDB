import React from "react"
import { useFetchPopularGamesQuery } from "../store"
import Feed from "./Feed"

const GamePopularList = () => {
  const { data, isFetching } = useFetchPopularGamesQuery()

  return <Feed games={data?.results} isFetching={isFetching} />
}

export default GamePopularList
