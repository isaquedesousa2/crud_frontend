import React, { useEffect } from "react";
import { Stack, Container } from "@mui/material";
import MenuContainer from "../components/MenuContainer";
import ListImages from "../components/ListImages";
import useApi from "../hooks/useApi";

function MyImages() {
  const url = "http://127.0.0.1:8000/api/v1/users/1/images/";

  const { success, error, data, apiGet } = useApi();

  useEffect(() => {
    apiGet({ url: url });
  }, []);

  return (
    <>
      <Container maxWidth="sm">
        <MenuContainer />
      </Container>
      <Container maxWidth="xl">
        <Stack marginTop="100px" textAlign="center" className="stack">
          <h1>Minhas Imagens</h1>
          {data && <ListImages data={data} />}
          {error && <span style={{ color: "red" }}>{error}</span>}
          {success && <span style={{ color: "green" }}>{success}</span>}
        </Stack>
      </Container>
    </>
  );
}

export default MyImages;
