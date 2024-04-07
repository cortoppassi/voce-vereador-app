import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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

export default function CadRequisicoes() {
  const [requisicoes, setRequisicoes] = useState([]);
  const [tipoRequisicao, setTipoRequisicao] = useState("");
  const [age, setAge] = React.useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const storedRequisicoes = localStorage.getItem("requisicoes");
    if (storedRequisicoes) {
      setRequisicoes(JSON.parse(storedRequisicoes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("requisicoes", JSON.stringify(requisicoes));
  }, [requisicoes]);

  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeTipoRequisicao = (event) => {
    setTipoRequisicao(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    formDataObj.tipoRequisicao = tipoRequisicao;
    formDataObj.Prioridade = selectedOption;
    setRequisicoes([...requisicoes, formDataObj]);
    event.target.reset();
  };

  const handleDelete = (index) => {
    const updatedRequisicoes = [...requisicoes];
    updatedRequisicoes.splice(index, 1);
    setRequisicoes(updatedRequisicoes);
  };

  return (
    <Grid container spacing={3} style={{ justifyContent: "space-evenly",  marginTop: "10vh",}}>
      <Grid item xs={6} style={{textAlign: "center"}}>
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
            justifyContent: "space-around",
            margin: "10px",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h4">Cadastro de Requisições</Typography>

          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Tipo de Requisição
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={tipoRequisicao}
              onChange={handleChangeTipoRequisicao}
              label="Tipo de Requisição"
            >
              <MenuItem value="Reclamações">Reclamações</MenuItem>
              <MenuItem value="Notificação">Notificação</MenuItem>
              <MenuItem value="Solicitações">Solicitações</MenuItem>
              <MenuItem value="Denúncias">Denúncias</MenuItem>
            </Select>
          </FormControl>

          <TextField
            name="Assunto"
            label="Título da Requisição"
            variant="standard"
            required
          />
          <TextField
            id="outlined-multiline-static"
            name="Descricao"
            label="Descreva Detalhadamente"
            multiline
            rows={4}
            defaultValue=""
            required
          />

          <InputLabel id="demo-simple-select-standard-label">
            Prioridade da Requisição
          </InputLabel>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28, margin: "auto" } }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedOption === "Baixa"}
                  onChange={() => handleCheckboxChange("Baixa")}
                />
              }
              label="Baixa"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedOption === "Média"}
                  onChange={() => handleCheckboxChange("Média")}
                />
              }
              label="Média"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedOption === "Alta"}
                  onChange={() => handleCheckboxChange("Alta")}
                />
              }
              label="Alta"
            />
          </div>
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
      </Grid>
      <Grid item xs={6} style={{textAlign: "center"}}>
        <Box
          sx={{
            padding: "20px"
          }}
        >
          <Typography variant="h4">Requisições Cadastradas</Typography>
          
          <TableContainer component={Paper} sx={{  }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h2>Tipo de Requisição</h2></TableCell>
            <TableCell><h2>Assunto</h2></TableCell>
            <TableCell><h2>Descrição</h2></TableCell>
            <TableCell><h2>Prioridade</h2></TableCell>
            <TableCell><h2>Ações</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requisicoes.map((requisicao, index) => (
            <TableRow key={index}>
              <TableCell>{requisicao.tipoRequisicao}</TableCell>
              <TableCell>{requisicao.Assunto}</TableCell>
              <TableCell>{requisicao.Descricao}</TableCell>
              <TableCell>{requisicao.Prioridade}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
            {/* {requisicoes.map((requisicao, index) => (
              <Box
              sx={{
                border: "1px solid black",
                borderRadius: "8px",
                padding: "20px",
                marginTop: "10vh",
              }}
            >
              <div key={index}>
                <Typography variant="subtitle1">
                  Tipo: {requisicao.tipoRequisicao}
                </Typography>
                <Typography variant="subtitle1">
                  Assunto: {requisicao.Assunto}
                </Typography>
                <Typography variant="body1">
                  Descrição: {requisicao.Descricao}
                </Typography>
                <Typography variant="body2">
                  Prioridade: {requisicao.Prioridade}
                </Typography>
                <Button onClick={() => handleDelete(index)}>Excluir</Button>
              </div>
              </Box>
            ))} */}
         
        </Box>
      </Grid>
    </Grid>
  );
}
