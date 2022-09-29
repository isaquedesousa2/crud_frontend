import React, { useEffect, useState } from "react";
import { Stack, Container } from "@mui/material";
import MenuContainer from "../components/MenuContainer";
import ListImages from "../components/ListImages";
import axios from "axios";

function MyImagens() {
  const [data, setData] = useState([]);

  const url = "http://127.0.0.1:8000/api/v1/users/1/images/";

  useEffect((url) => {
    axios({
      method: "get",
      url: url,
    }).then((response) => setData(response.data));
  },[])

  return (
    <>
      <Container maxWidth="sm">
        <MenuContainer />
      </Container>
      <Container maxWidth="xl">
        <Stack marginTop="100px" textAlign="center" className="stack">
          <h1>Minhas Imagens</h1>
          {data && <ListImages data={data} />}
        </Stack>
      </Container>
    </>
  );
}

export default MyImagens;
