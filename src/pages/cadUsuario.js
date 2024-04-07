import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

export default function CadUsuario() {
  const [age, setAge] = React.useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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
    const login = formData.get("login");
    const cpf = formData.get("cpf");
    const email = formData.get("email");
    const telefone = formData.get("telefone");

    // Salvar login e senha no localStorage como JSON
    localStorage.setItem("user", JSON.stringify({ login, password, cpf, email, telefone }));
  
    // Redirecionar para a página de login
    window.location.href = "/login";
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
        <Typography variant="h5">Cadastro de Usuário</Typography>
        <TextField name="login" label="Login" variant="standard" required />
        <TextField name="cpf" label="CPF" variant="standard" required />
        <TextField name="email" label="E-mail" variant="standard" required />

        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-standard-label"> Prefeitura-Bairro</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Age"
          >
          <MenuItem value=""></MenuItem>
          <MenuItem value={10}>Prefeitura-Bairro Centro/Brotas</MenuItem>
          <MenuItem value={20}>Prefeitura-Bairro Subúrbio/Ilhas</MenuItem>
          <MenuItem value={30}>Prefeitura-Bairro Cajazeiras</MenuItem>
          <MenuItem value={40}>Prefeitura-Bairro Itapuã</MenuItem>
          <MenuItem value={50}>Prefeitura-Bairro Cidade Baixa</MenuItem>
          <MenuItem value={60}>Prefeitura-Bairro Barra/Pituba</MenuItem>
          <MenuItem value={70}>
            Prefeitura-Bairro Cabula/Tancredo Neves
          </MenuItem>
          <MenuItem value={80}>Prefeitura-Bairro Pau da Lima</MenuItem>
          <MenuItem value={90}>
            Prefeitura-Bairro São Caetano/Liberdade
          </MenuItem>
          <MenuItem value={100}>Prefeitura-Bairro Valéria</MenuItem>
          <MenuItem value={110}>
            Prefeitura-Bairro Distrito Cultural Centro Histórico
          </MenuItem>
        </Select>
        </FormControl>

        <TextField
          name="telefone"
          label="Telefone"
          variant="standard"
          required
        />
        <TextField
          name="password"
          type="password"
          label="Senha"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextField
          name="confirmPassword"
          type="password"
          label="Confirmar Senha"
          variant="standard"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
         <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Anexar Arquivo
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </Box>
    </div>
  );
}
