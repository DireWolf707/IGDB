import React, { useRef } from "react"
import { Box, Stack, Typography, Button } from "@mui/material"
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment"
import WhatshotIcon from "@mui/icons-material/Whatshot"
import { useDispatch } from "react-redux"
import { changeSearchTerm, resetSearchTerm } from "../store"

const SeacrhBar = () => {
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()
    const searchTerm = inputRef.current.value
    if (!searchTerm) return
    dispatch(changeSearchTerm(searchTerm))
    inputRef.current.value = ""
  }

  return (
    <Stack flexShrink={0} justifyContent="center" alignItems="center" sx={{ height: "140px", bgcolor: "#fff", borderBottom:"6px solid red" }}>
      <Stack
        onClick={() => dispatch(resetSearchTerm())}
        component="a"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{ cursor: "pointer", p: "6px" }}
      >
        <WhatshotIcon fontSize="large" color="error" />
        <Typography fontWeight="bold" variant="h5" color="red">
          IGDB
        </Typography>
      </Stack>
      <Stack
        onSubmit={submitHandler}
        component="form"
        flexShrink={5}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        mx="12px"
        mt="6px"
      >
        <Box
          ref={inputRef}
          component="input"
          sx={{
            height: "40px",
            width: { xs: "100%", sm: "440px" },
            border: "2px solid red",
            px: "9px",
            color: "brown",
            fontSize: "22px",
          }}
        />
        <Button type="submit" variant="contained" color="error" size="large" endIcon={<LocalFireDepartmentIcon />} sx={{ borderRadius: 0 }}>
          Search
        </Button>
      </Stack>
    </Stack>
  )
}

export default SeacrhBar
