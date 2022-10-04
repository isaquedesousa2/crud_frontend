import {
  Grid,
  ImageListItemBar,
  ImageListItem,
  Stack,
  Container,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useApi from "../hooks/useApi";
import { useState, useEffect } from "react";

const ListImages = ({ data, user, token }) => {
  const { apiDelete, apiGet } = useApi();
  const navigate = useNavigate();
  const [newData, setNewData] = useState(data);

  const urlGet = `http://127.0.0.1:8000/api/v1/users/${user}/images/`;

  const handleDelete = async ({ id }) => {
    const url = `http://127.0.0.1:8000/api/v1/users/${user}/images/${id}/`;
    apiDelete({ url: url, token: token });

    for (let x = 0; x < data.length; x++) {
      const element = data[x];
      if (element["id"] === id) setNewData(data.splice(x));
    }
  };

  useEffect(() => {
    apiGet({ url: urlGet, token: token });
  }, [data.length]);

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
              <ImageListItem sx={{ width: "100%", maxWidth: "400px" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`/dashboard/minhas-imagens/${obj.name}`, {
                      state: { url: obj.image_user },
                    })
                  }
                  src={obj.image_user}
                  alt={obj.name}
                />
                <ImageListItemBar
                  sx={{ paddingX: "20px" }}
                  title={obj.name}
                  actionIcon={
                    <Button onClick={() => handleDelete({ id: obj.id })}>
                      <DeleteForeverIcon sx={{ color: "red" }} />
                    </Button>
                  }
                />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default ListImages;
