'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [login, setLogin] = useState(true)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  useEffect(() => {
    const isLogin = localStorage.getItem("login")
    console.log(isLogin)
    if (isLogin) setLogin(true)
  }, [])

  return (
    <Box sx={{ display: 'flex', color: '#fff'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{background: '#33568C'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src="https://colaboracao.salvador.ba.gov.br/assets/images/logo.png" alt="mui logo" style={{ width: '50px' }} />   
          </Typography>
          
          <Link href="/" passHref>
            <Button variant="text" color="inherit" sx={{ color: 'white' }}> Prefeitura</Button>
          </Link>
          {login && (
            <Link href="/registrationRequests/cadRequisicoes" passHref>
              <Button color="inherit" sx={{ color: 'white' }}> Serviços</Button>
            </Link>
          )}
          <Link href="/transparencia" passHref>
            <Button color="inherit" sx={{ color: 'white' }}> Transparência</Button>
          </Link>
          <Link href="/login/login" passHref>
            <Button color="inherit" sx={{ color: 'white' }}> Login</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
     
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          
        </Typography>
      </Box>
    </Box>
  );
}