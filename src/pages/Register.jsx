import React from "react";
import { FormControl, Container, Stack } from "@mui/material";
import TextFieldInput from "../components/TextFieldInput";
import ButtonContainer from "../components/ButtonContainer";

function Register() {
  return (
    <Container maxWidth="sm">
      <Stack
        sx={{ height: "100vh" }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <h1>Crie sua conta</h1>
        <FormControl fullWidth>
          <Stack spacing={2}>
            <TextFieldInput placeholder="Digite seu usuário" />
            <TextFieldInput placeholder="Digite seu nome completo" />
            <TextFieldInput placeholder="Digite seu email" />
            <TextFieldInput placeholder="Digite sua senha" />
            <TextFieldInput placeholder="Repita sua senha" />
            <ButtonContainer children="Cadastrar" />
          </Stack>
        </FormControl>
      </Stack>
    </Container>
  );
}

export default Register;
