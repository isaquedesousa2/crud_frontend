import { Stack, Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function MyImageFull() {
  const location = useLocation();
  const url = location.state.url;
  return (
    <Box sx={{ background: "#000", width: '100%', maxHeight: '100vh'}}>
      <Stack
        textAlign="center"
        className="stack"
        justifyContent="center"
        alignItems="center"
        width='100%'
        height='100vh'
      >
        <img style={{maxWidth: '100%', maxHeight: '100%'}} src={url} alt="" />
      </Stack>
    </Box>
  );
}

export default MyImageFull;
