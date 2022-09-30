import React, { useState } from "react";
import { Stack, Container, FormControl, TextField } from "@mui/material";
import TextFieldInput from "../components/TextFieldInput";
import ButtonContainer from "../components/ButtonContainer";
import MenuContainer from "../components/MenuContainer";
import useApi, { useAxios } from "../hooks/useApi";

function UploadImage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const url = "http://127.0.0.1:8000/api/v1/users/1/images/uploadfiles/";

  const { success, error, setError, apiPost } = useApi();


  const handleSubmit = () => {
    if(!name || !image){
      setError('Preencha todos os campos!')
    }else {
      setError('')
      const data = {
        name,
        image_user: image,
        user: 1
      }
      apiPost({ url: url, data: data})
      setName('')
    }
    
  }


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
              onChange={(e) => {
                setImage(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              type="file"
            />
            <ButtonContainer onClick={() => handleSubmit()} children="Enviar" />
            {error && <span style={{ color: "red" }}>{error}</span>}
            {success && <span style={{ color: "green" }}>{success}</span>}
          </Stack>
        </FormControl>
      </Stack>
    </Container>
  );
}

export default UploadImage;
