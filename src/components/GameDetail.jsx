import React from "react"
import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useDispatch } from "react-redux"
import { useFetchGameScreenshotsQuery, useFetchGameDetailsQuery, resetSelectedGameId } from "../store"
import { Stack, Typography, Box, Rating, Chip, Divider } from "@mui/material"
import { platforms } from "./utils/constants"

const GameDetail = ({ gameId }) => {
  const dispatch = useDispatch()
  const { data, isFetching } = useFetchGameDetailsQuery(gameId)
  const { data: ssData, isFetching: isSsDataFetching } = useFetchGameScreenshotsQuery(gameId)

  const handleClose = () => {
    dispatch(resetSelectedGameId())
  }

  return (
    <Dialog open={true} onClose={handleClose} scroll="paper" maxWidth="lg" fullWidth>
      {isFetching || isSsDataFetching ? (
        <></>
      ) : (
        <>
          <DialogTitle>
            <Typography variant="h4" fontWeight="bold" color="brown">
              {data?.name}
            </Typography>
          </DialogTitle>

          <DialogContent dividers={true}>
            <Stack gap={1.5}>
              <Stack>
                <Typography variant="subtitle1" fontWeight="bold">
                  Rating : {data.rating}
                </Typography>
                <Rating value={data.rating} precision={0.5} size="large" readOnly />
              </Stack>

              <Stack>
                <Typography variant="subtitle1" fontWeight="bold">
                  Platforms
                </Typography>
                <Stack flexDirection="row" divider={<Divider orientation="vertical" flexItem />} gap={1.2}>
                  {data.platforms.map(
                    ({ platform }) =>
                      platforms[platform.slug] && <Box component="img" key={platform.id} height="32px" src={platforms[platform.slug]} />
                  )}
                </Stack>
              </Stack>

              <Stack>
                <Typography variant="subtitle1" fontWeight="bold">
                  Tags
                </Typography>
                <Stack flexDirection="row" flexWrap="wrap" gap={0.8}>
                  {data.tags.map((tag) => (
                    <Chip key={tag.id} label={tag.name} />
                  ))}
                </Stack>
              </Stack>

              <Box
                component="img"
                height="360px"
                src={data.background_image}
                sx={{ width: { xs: "100%", sm: "80%", md: "50%" }, m: "auto", borderRadius: "8px" }}
              />

              <Typography variant="h4">Description</Typography>

              <Typography variant="body1">{data.description_raw}</Typography>

              <Typography variant="h4">Images</Typography>

              {ssData.results.map((image) => (
                <Box
                  key={image.id}
                  component="img"
                  height="360px"
                  src={image.image}
                  sx={{ width: { xs: "100%", sm: "80%", md: "50%" }, m: "auto", borderRadius: "8px" }}
                />
              ))}
            </Stack>
          </DialogContent>
        </>
      )}
    </Dialog>
  )
}

export default GameDetail
