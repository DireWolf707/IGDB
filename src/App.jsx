import React from "react"
import { Box, Stack } from "@mui/system"
import SeacrhBar from "./components/SeacrhBar"

const App = () => {
  return (
    <Stack sx={{ height: "100vh", width: "100vw", bgcolor: "teal" }}>
      <SeacrhBar />
    </Stack>
  )
}

export default App
