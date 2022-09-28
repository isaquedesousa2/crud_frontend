import React, { useState } from "react";
import { Stack, Container, FormControl, TextField } from "@mui/material";
import TextFieldInput from "../components/TextFieldInput";
import ButtonContainer from "../components/ButtonContainer";
import MenuContainer from "../components/MenuContainer";
import { useFetchPost } from "../hooks/useFetch";


function UploadImage() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleChange(e) {
    const temp = {
      name,
      image,
    };
    setData([...data, temp]);

    // useFetchPost({user_id})
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
              onChange={(e) => console.log(e.target.files[0])}
              type="file"
            />
            <ButtonContainer onClick={handleChange} children="Salvar" />
            {data &&
              data.map((item, index) => (
                <div key={index}>
                  <span>{item.name}</span>
                </div>
              ))}
          </Stack>
        </FormControl>
      </Stack>
    </Container>
  );
}

export default UploadImage;
