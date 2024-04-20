import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Typography, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

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

export default function CadUsuario() {
  const { register, handleSubmit, setValue, formState: {errors} } = useForm();

  const handleChange = (event) => {
    setValue("selectField", event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
    
    // window.location.href = "/login/login";
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
        <TextField
          label="Nome"
          variant="standard"
          {...register("name", {required: true})}
        />
        {errors?.name && <span className="error-message">Nome obrigatório*</span>}
        <TextField
          label="CPF"
          variant="standard" 
          {...register("cpf", {required: true})}
        />
        {errors?.cpf && <span className="error-message">CPF obrigatório*</span>}
        <TextField
          label="E-mail"
          variant="standard" 
          {...register("email", {required: true})}
        />
        {errors?.email && <span className="error-message">E-mail obrigatório*</span>}

        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-standard-label"> Prefeitura-Bairro</InputLabel>
          <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" label="Age" {...register("selecteField")} onChange={handleChange}>
            <MenuItem value=""></MenuItem>
            <MenuItem value={10}>Prefeitura-Bairro Centro/Brotas</MenuItem>
            <MenuItem value={20}>Prefeitura-Bairro Subúrbio/Ilhas</MenuItem>
            <MenuItem value={30}>Prefeitura-Bairro Cajazeiras</MenuItem>
            <MenuItem value={40}>Prefeitura-Bairro Itapuã</MenuItem>
            <MenuItem value={50}>Prefeitura-Bairro Cidade Baixa</MenuItem>
            <MenuItem value={60}>Prefeitura-Bairro Barra/Pituba</MenuItem>
            <MenuItem value={70}>Prefeitura-Bairro Cabula/Tancredo Neves</MenuItem>
            <MenuItem value={80}>Prefeitura-Bairro Pau da Lima</MenuItem>
            <MenuItem value={90}> Prefeitura-Bairro São Caetano/Liberdade</MenuItem>
            <MenuItem value={100}>Prefeitura-Bairro Valéria</MenuItem>
            <MenuItem value={110}>Prefeitura-Bairro Distrito Cultural Centro Histórico</MenuItem>  
          </Select>
        </FormControl>

        <TextField
          label="Telefone"
          variant="standard"
          {...register("phone", {required: true})}
        />
        {errors?.phone && <span className="error-message">Telefone obrigatório*</span>}
        <TextField
          type="password"
          label="Senha"
          variant="standard"
          {...register("password", {minLength: 6, required: true})}
        />
        <TextField
          type="password"
          label="Senha"
          variant="standard"
          {...register("confirmPassword", {minLength: 6, required: true})}
        />
         {errors?.password && <span className="error-message">A senha precisa ter no mínimo 6 caracteres. Por favor, tente novamente.</span>}
         <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          {...register("file")}
        >
          Anexar Arquivo
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button onClick={() => handleSubmit(onSubmit)()} variant="contained" color="primary">
          Cadastrar
        </Button>
      </Box>
    </div>
  );
}
