import { Container, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonContainer from "../components/ButtonContainer";
import useAuth from '../hooks/useAuth'

const Logout = () => {
    const { logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Stack
        sx={{ height: "100vh" }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <Stack spacing={2} textAlign="center">
          <h1>Deseja realmente sair?</h1>
          <ButtonContainer onClick={() => navigate(`${location.state['url']}`)} children="Voltar" />
          <ButtonContainer onClick={() => logout()} children="Sair" />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Logout;
