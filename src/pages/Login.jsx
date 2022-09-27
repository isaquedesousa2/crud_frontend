import React from "react";
import { FormControl, Container, Stack } from "@mui/material";
import TextFieldInput from "../components/TextFieldInput";
import "../global.css";
import ButtonContainer from "../components/ButtonContainer";

function Login() {
  return (
    <Container maxWidth="sm">
      <Stack
        sx={{ height: "100vh" }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <h1>Entre com sua conta</h1>
        <FormControl fullWidth>
          <Stack spacing={2}>
            <TextFieldInput placeholder="Digite seu email" />
            <TextFieldInput placeholder="Digite sua senha" />
            <ButtonContainer children="Entrar" />
          </Stack>
        </FormControl>
      </Stack>
    </Container>
  );
}

export default Login;
