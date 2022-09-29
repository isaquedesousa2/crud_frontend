import React, { useState } from "react";
import { Stack, Container, FormControl, TextField } from "@mui/material";
import TextFieldInput from "../components/TextFieldInput";
import ButtonContainer from "../components/ButtonContainer";
import MenuContainer from "../components/MenuContainer";
import axios from "axios";

function UploadImage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState('');
  const [status, setStatus] = useState("");
  const [erro, setErro] = useState("");

  const usePost = () => {
    axios({
      method: "post",
      headers: { "content-type": "multipart/form-data" },
      url: "http://127.0.0.1:8000/api/v1/users/1/images/uploadfiles/",
      data: {
        name: name,
        image_user: image,
        user: 1,
      },
    })
      .then((response) => {
        if (response.status === 201) {
          setStatus("Imagem salva com sucesso!");
          setErro("");
          setImage(null)
          setName("");
        }
      })
      .catch((e) => {
        setErro(e.response.data["erro"]);
        setStatus("");
      });
  };

  return (
    <Container maxWidth="sm">
      <MenuContainer />
      <Stack
        marginTop="100px"
        textAlign="center"
        className="stack"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl fullWidth>
          <Stack spacing={2}>
            <h1>Salvar Imagem</h1>
            <TextFieldInput
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Digite o nome da imagem"
            />
            <TextField
            value={''}
              onChange={(e) => {
                setImage(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              type="file"
            
            />
            <ButtonContainer onClick={usePost} children="Enviar" />
            {erro && <span style={{ color: "red" }}>{erro}</span>}
            {status && <span style={{ color: "green" }}>{status}</span>}
          </Stack>
        </FormControl>
      </Stack>
    </Container>
  );
}

export default UploadImage;
