import React from "react"
import { useSeacrhGameQuery } from "../store"
import Feed from "./Feed"

const GameSearchList = ({ searchTerm }) => {
  const { data, isFetching } = useSeacrhGameQuery(searchTerm)

  return <Feed games={data?.results} isFetching={isFetching} />
}

export default GameSearchList
