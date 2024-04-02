import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Link from 'next/link';


const drawerWidth = 240;


export default function DrawerAppBar() {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  return (
    <Box sx={{ display: 'flex', color: '#fff'}}>
      <CssBaseline />
      <AppBar component="nav">
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
            <Button variant="text" color="inherit"> Prefeitura</Button>
          </Link>
          <Link href="/servicos" passHref>
            <Button color="inherit"> Serviços</Button>
          </Link>
          <Link href="/transparencia" passHref>
            <Button color="inherit"> Transparência</Button>
          </Link>
          <Link href="/login" passHref>
            <Button color="inherit"> Login</Button>
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