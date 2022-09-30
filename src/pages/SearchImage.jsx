import { React, useState } from "react";
import {
  Stack,
  Container,
  FormControl,
} from "@mui/material";
import TextFieldInput from "../components/TextFieldInput";
import ButtonContainer from "../components/ButtonContainer";
import MenuContainer from "../components/MenuContainer";
import ListImages from "../components/ListImages";
import useApi from "../hooks/useApi";


function SearchImage() {
  const [search, setSearch] = useState("");

  const { error, setError, data, apiGet } = useApi();

  const url = `http://127.0.0.1:8000/api/v1/users/1/images/search/${search}/`;

  const handleSearch = () => {
    if( search === ''){
      setError('Digite o nome da imagem!')
    }else {
      apiGet({ url: url })
      setError('')
    }
  }

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
            <ButtonContainer onClick={() => handleSearch()} children="Buscar" />
            {error && <span style={{ color: "red" }}>{error}</span>}
          </Stack>
        </FormControl>
      </Container>
      <ListImages data={data}/>
    </>
  );
}

export default SearchImage;
