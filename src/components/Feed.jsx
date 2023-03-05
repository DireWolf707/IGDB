import React from "react"
import { Stack } from "@mui/material"
import GameCard from "./GameCard"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { changeSelectedGameId } from "../store"

const Feed = ({ games, isFetching }) => {
  const dispatch = useDispatch()

  const onClickHandler = useCallback((gameId) => {
    dispatch(changeSelectedGameId(gameId))
  }, [])

  return (
    <Stack flexGrow={1} sx={{ p: "32px", overflow: "auto" }}>
      <Stack flexDirection="row" justifyContent="center" flexWrap="wrap" gap={2}>
        {isFetching ? <></> : games.map((game) => <GameCard key={game.id} game={game} onClickHandler={onClickHandler} />)}
      </Stack>
    </Stack>
  )
}

export default Feed
