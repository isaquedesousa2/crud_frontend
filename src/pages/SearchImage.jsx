import React from "react";
import { Stack, Container, FormControl } from "@mui/material";
import TextFieldInput from "../components/TextFieldInput";
import ButtonContainer from "../components/ButtonContainer";
import MenuContainer from "../components/MenuContainer";



function SearchImage() {
  return (
    <Container maxWidth="sm">
      <MenuContainer />
      <Stack
        marginTop='100px'
        textAlign='center'
        className="stack"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl fullWidth>
          <Stack spacing={2}>
          <h1>Buscar por imagem</h1>
            <TextFieldInput placeholder="Digite o nome da imagem" />
            <ButtonContainer children="Buscar" />
          </Stack>
        </FormControl>
      </Stack>
    </Container>
  );
}

export default SearchImage;
