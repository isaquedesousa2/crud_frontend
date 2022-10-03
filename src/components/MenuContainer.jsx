import React from "react";
import { MenuItem } from "@mui/material";
import { Stack } from "@mui/system";
import { Link, useLocation } from 'react-router-dom';


function MenuContainer() {

  const location = useLocation();


  return (
    <Stack direction='row' marginTop='40px'>
      <Link style={{color: '#000'}} to='/dashboard/minhas-imagens'><MenuItem>Minhas Imagens</MenuItem></Link>
      <Link style={{color: '#000'}} to='/dashboard/salvar-imagens'><MenuItem>Salvar Imagem</MenuItem></Link>
      <Link style={{color: '#000'}} to='/dashboard/buscar'><MenuItem>Buscar Imagem</MenuItem></Link>
      <Link style={{color: '#000'}} to='/dashboard/sair' state={{ url: location.pathname }}><MenuItem>Logout</MenuItem></Link>
    </Stack>
  );
}

export default MenuContainer;
