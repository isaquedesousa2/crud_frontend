import React from "react";
import { MenuItem } from "@mui/material";
import { Stack } from "@mui/system";
import { Link, useLocation, useNavigate } from 'react-router-dom';


function MenuContainer() {

  const location = useLocation()
  const navigate = useNavigate()

  if (location.pathname === '/dashboard'){
    navigate('dashboard/buscar')
    console.log(1)
  }

  return (
    <Stack direction='row' marginTop='40px'>
      <MenuItem><Link style={{color: '#000'}} to='/dashboard/minhas-imagens'>Minhas Imagens</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}} to='/dashboard/salvar-imagens'>Salvar Imagem</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}} to='/dashboard/buscar'>Buscar Imagem</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}} to='/dashboard/sair'>Logout</Link></MenuItem>
    </Stack>
  );
}

export default MenuContainer;
