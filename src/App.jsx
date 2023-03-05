import React from "react"
import { Stack } from "@mui/system"
import SeacrhBar from "./components/SeacrhBar"
import GameSearchList from "./components/GameSearchList"
import GamePopularList from "./components/GamePopularList"
import GameDetail from "./components/GameDetail"
import { useSelector } from "react-redux"

const App = () => {
  const { searchTerm, selectedGameId } = useSelector((store) => store.data)

  return (
    <Stack sx={{ height: "100vh", width: "100vw", bgcolor: "#000" }}>
      <SeacrhBar />
      {searchTerm ? <GameSearchList searchTerm={searchTerm} /> : <GamePopularList />}
      {selectedGameId && <GameDetail gameId={selectedGameId} />}
    </Stack>
  )
}

export default App
