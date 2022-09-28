import React from "react";
import {
  Stack,
  Container,
  Grid,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import MenuContainer from "../components/MenuContainer";
import { useFetchGet } from "../hooks/useFetch";

function MyImagens() {
  const data = useFetchGet("http://127.0.0.1:8000/api/v1/users/1/images");

  return (
    <>
      <Container maxWidth="sm">
        <MenuContainer />
      </Container>
      <Container maxWidth="xl">
        <Stack marginTop="100px" textAlign="center" className="stack">
          <h1>Minhas Imagens</h1>
          <Grid
            container
            direction="row"
            spacing={3}
            justifyContent="center"
            alignItems="center"
            marginTop="100px"
          >
            {
              data.map(obj=> (
                <Grid item>
                  <ImageListItem
                    sx={{ width: "100%", maxWidth: "400px" }}
                    key={obj.id}
                  >
                    <img src={obj.image_user} />
                    <ImageListItemBar title={obj.name} />
                  </ImageListItem>
                </Grid>
              ))
            }
          </Grid>
        </Stack>
      </Container>
    </>
  );
}

export default MyImagens;
