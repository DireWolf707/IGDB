import React from "react"
import { Box, Stack, Typography, Button } from "@mui/material"
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment"
import WhatshotIcon from "@mui/icons-material/Whatshot"

const SeacrhBar = () => {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "140px", bgcolor: "#fff" }}>
      <Stack flexDirection="row" justifyContent="center" alignItems="center" sx={{ p: "6px" }}>
        <WhatshotIcon fontSize="large" color="error" />
        <Typography fontWeight="bold" variant="h5" color="red">
          IGDB
        </Typography>
      </Stack>
      <Stack flexShrink={5} flexDirection="row" justifyContent="center" alignItems="center" gap={1} mx="12px" mt="6px">
        <Box
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
        <Button variant="contained" color="error" size="large" endIcon={<LocalFireDepartmentIcon />} sx={{ borderRadius: 0 }}>
          Search
        </Button>
      </Stack>
    </Stack>
  )
}

export default SeacrhBar
