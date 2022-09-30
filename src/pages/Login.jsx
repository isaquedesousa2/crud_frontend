import React, { useEffect, useState } from "react";
import { FormControl, Container, Stack } from "@mui/material";
import TextFieldInput from "../components/TextFieldInput";
import "../global.css";
import ButtonContainer from "../components/ButtonContainer";
import useAuth from "../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, isAuthenticated, loginUser } = useAuth();

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
            <TextFieldInput onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" />
            <TextFieldInput onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
            <ButtonContainer onClick={() => loginUser({ email: email, password: password})} children="Entrar" />
          </Stack>
        </FormControl>
      </Stack>
    </Container>
  );
}

export default Login;
