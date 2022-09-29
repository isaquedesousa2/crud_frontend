import { React, useState } from "react";
import {
  Stack,
  Container,
  FormControl,
} from "@mui/material";
import TextFieldInput from "../components/TextFieldInput";
import ButtonContainer from "../components/ButtonContainer";
import MenuContainer from "../components/MenuContainer";
import { useNavigate } from "react-router-dom";
import ListImages from "../components/ListImages";

function SearchImage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const api = () => {
    const url = `http://127.0.0.1:8000/api/v1/users/1/images/search/${search}/`;

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setData(response));
  };

  return (
    <>
      <Container maxWidth="sm">
        <MenuContainer />
        <FormControl fullWidth>
          <Stack
            marginTop="100px"
            textAlign="center"
            className="stack"
            spacing={2}
          >
            <h1>Buscar por imagem</h1>
            <TextFieldInput
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Digite o nome da imagem"
            />
            <ButtonContainer onClick={() => api()} children="Buscar" />
          </Stack>
        </FormControl>
      </Container>
      <ListImages data={data}/>
    </>
  );
}

export default SearchImage;
