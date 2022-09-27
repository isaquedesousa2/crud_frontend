import React from "react";
import { MenuItem } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from 'react-router-dom';


function MenuContainer() {
  return (
    <Stack direction='row' marginTop='40px'>
      <MenuItem><Link style={{color: '#000'}} to='minhas-imagens'>Minhas Imagens</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}} to='upload'>Upload Imagem</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}} to='buscar'>Buscar Imagem</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}} to='sair'>Logout</Link></MenuItem>
    </Stack>
  );
}

export default MenuContainer;
