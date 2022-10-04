import React, { useState } from "react";
import { FormControl, Container, Stack } from "@mui/material";
import TextFieldInput from "../components/TextFieldInput";
import ButtonContainer from "../components/ButtonContainer";
import useAuth from "../hooks/useAuth";

function Register() {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  
  const { register } = useAuth();


  const handleRegister = () => {
    if (
      username === "" ||
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      password === "" ||
      password_confirm === ""
    ) {
      setError("Preencha todos os campos!");
    } else if (password !== password_confirm) {
      setError("As senhas devem ser iguais!");
    } else {
      setError("");
      register({
        username: username,
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      });
    }
  };

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
            <TextFieldInput onChange={(e) => setUsername(e.target.value)} type='name' value={username}  placeholder="Digite seu usuário" />
            <TextFieldInput onChange={(e) => setFirstName(e.target.value)} type='name' value={first_name} placeholder="Nome" />
            <TextFieldInput onChange={(e) => setLastName(e.target.value)} type='name'value={last_name} placeholder="Sobrenome" />
            <TextFieldInput onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder="Digite seu email" />
            <TextFieldInput onChange={(e) => setPassword(e.target.value)} type='password' value={password} placeholder="Digite sua senha" />
            <TextFieldInput onChange={(e) => setPasswordConfirm(e.target.value)} type='password' value={password_confirm} placeholder="Repita sua senha" />
            <ButtonContainer onClick={handleRegister} children="Cadastrar" />
          </Stack>
        </FormControl>
        {error && <span style={{ color: "red" }}>{error}</span>}
      </Stack>
    </Container>
  );
}

export default Register;
