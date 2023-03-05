import React from "react"
import { Stack, CardMedia, CardContent, Typography } from "@mui/material"

const GameCard = ({ game, onClickHandler }) => {
  return (
    <Stack
      component="a"
      onClick={() => onClickHandler(game.id)}
      flexGrow={1}
      sx={{ height: { md: "360px", lg: "initial" }, width: { md: "380px", lg: "initial" }, cursor: "pointer" }}
    >
      <CardMedia
        component="img"
        alt={game.name}
        height="260"
        image={game.background_image}
        sx={{ objectFit: "cover", borderRadius: "12px 12px 0 0", mb: "8px" }}
      />

      <CardContent sx={{ p: "10px", bgcolor: "#1E1E1E" }}>
        <Typography variant="h5" color="#fff">
          {game.name.slice(0, 50)}
        </Typography>
        <Typography variant="body2" color="gray">
          {game.released}
        </Typography>
      </CardContent>
    </Stack>
  )
}

export default GameCard
