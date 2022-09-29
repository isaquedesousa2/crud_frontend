import { Grid, ImageListItemBar, ImageListItem, Stack, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListImages = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl">
      <Stack
        textAlign="center"
        className="stack"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
          marginTop="100px"
        >
          {data.map((obj) => (
            <Grid item key={obj.id}>
              <ImageListItem
                sx={{ width: "100%", maxWidth: "400px", cursor: "pointer" }}
                onClick={() =>
                  navigate(`/dashboard/minhas-imagens/${obj.name}`, {
                    state: { url: obj.image_user },
                  })
                }
              >
                <img src={obj.image_user} alt={obj.name}/>
                <ImageListItemBar title={obj.name} />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default ListImages;
