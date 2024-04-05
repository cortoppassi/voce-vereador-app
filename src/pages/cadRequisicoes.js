import react from "react";
import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function cadRequisicoes() {
  
  const [age, setAge] = React.useState('');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > :not(style)": { m: 1, width: "40ch" },
          border: "1px solid black",
          borderRadius: "8px",
          padding: "20px",
        }}
        noValidate
        autoComplete="off"
      >

     
        <Typography variant="h5">Cadastro de Requisições</Typography>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
        <InputLabel id="demo-simple-select-standard-label">Tipo de Requisição</InputLabel>
          <MenuItem value={10}>Reclamações</MenuItem>
          <MenuItem value={20}>Notificação</MenuItem>
          <MenuItem value={30}>Solicitções</MenuItem>
          <MenuItem value={40}>Denúncias</MenuItem>
        </Select>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
        <InputLabel id="demo-simple-select-standard-label">Tipo de Requisição</InputLabel>
          <MenuItem value={10}>Reclamações</MenuItem>
          <MenuItem value={20}>Notificação</MenuItem>
          <MenuItem value={30}>Solicitções</MenuItem>
          <MenuItem value={40}>Denúncias</MenuItem>
        </Select>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
        <InputLabel id="demo-simple-select-standard-label">Tipo de Requisição</InputLabel>
          <MenuItem value={10}>Reclamações</MenuItem>
          <MenuItem value={20}>Notificação</MenuItem>
          <MenuItem value={30}>Solicitções</MenuItem>
          <MenuItem value={40}>Denúncias</MenuItem>
        </Select>

        
        <TextField
          name="Assunto"
          label="Descreva o Assunto"
          variant="standard"
          required
        />
        <TextField
          id="outlined-multiline-static"
          label="Descreva Detalhadamente a Requisição"
          multiline
          rows={4}
          defaultValue=""
        />
        

        
    <div sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      >
      <FormControlLabel control={<Checkbox />} label="Baixa" />
      <FormControlLabel control={<Checkbox />} label="Média" />
      <FormControlLabel control={<Checkbox />} label="Alta" />
    </div>
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>

      </Box>
    </div>
  );
}
