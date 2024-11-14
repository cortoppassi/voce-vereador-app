'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function DrawerAppBar() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem("login");
    if (isLogin) setLogin(true);
  }, []);

  return (
    <Box sx={{ display: 'flex', color: '#fff' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: '#33568C' }}>
        <Toolbar>
          {/* Logo ou título da prefeitura */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.25rem' }}
          >
            Prefeitura
          </Typography>

          {/* Botões de navegação */}
          <Link href="/" passHref>
            <Button variant="text" color="inherit" sx={{ color: 'white' }}>Início</Button>
          </Link>

          {login && (
            <Link href="/registrationRequests/cadRequisicoes" passHref>
              <Button color="inherit" sx={{ color: 'white' }}>Serviços</Button>
            </Link>
          )}

          <Link href="/transparencia" passHref>
            <Button color="inherit" sx={{ color: 'white' }}>Transparência</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
