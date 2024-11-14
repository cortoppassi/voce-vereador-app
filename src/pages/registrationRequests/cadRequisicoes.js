import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/system";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const checkedValues = watch(["Baixa", "Média", "Alta"]);
  const [requisicoes, setRequisicoes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPrioridade = (requisicao) => {
    if (requisicao.Alta) {
      return "Alta";
    } else if (requisicao.Média) {
      return "Média";
    } else if (requisicao.Baixa) {
      return "Baixa";
    }
    return "N/A";
  };

  const onSubmit = (data) => {
    setLoading(true);
    // Adiciona a nova requisição ao estado
    setRequisicoes((prevRequisicoes) => {
      const updatedRequisicoes = [...prevRequisicoes, data];
      // Salva as requisições no localStorage
      localStorage.setItem("requisicoes", JSON.stringify(updatedRequisicoes));
      return updatedRequisicoes;
    });
    setLoading(false);
  };

  const handleDelete = (index) => {
    const updatedRequisicoes = [...requisicoes];
    updatedRequisicoes.splice(index, 1);
    setRequisicoes(updatedRequisicoes);
    // Atualiza o localStorage após a exclusão
    localStorage.setItem("requisicoes", JSON.stringify(updatedRequisicoes));
  };
  
  useEffect(() => {
    // Carrega as requisições do localStorage se houverem
    const storedRequisicoes = JSON.parse(localStorage.getItem("requisicoes")) || [];
    setRequisicoes(storedRequisicoes);
  }, []);


  useEffect(() => {
    const initialRequisicoes = [
      {
        tipoRequisicao: "Reclamações",
        Assunto: "Ruído Excessivo",
        Descricao: "Ruído vindo de obra próxima ao prédio.",
        Baixa: true,
        Média: false,
        Alta: false,
      },
      {
        tipoRequisicao: "Notificação",
        Assunto: "Lixo acumulado",
        Descricao: "Acúmulo de lixo nas ruas da cidade.",
        Baixa: false,
        Média: true,
        Alta: false,
      },
      {
        tipoRequisicao: "Solicitações",
        Assunto: "Iluminação pública",
        Descricao: "Troca de lâmpada queimada na rua X.",
        Baixa: false,
        Média: false,
        Alta: true,
      },
      {
        tipoRequisicao: "Denúncias",
        Assunto: "Construção irregular",
        Descricao: "Construção de prédio sem alvará na rua Y.",
        Baixa: true,
        Média: false,
        Alta: false,
      },
      {
        tipoRequisicao: "Reclamações",
        Assunto: "Rua esburacada",
        Descricao: "A rua Z tem vários buracos perigosos.",
        Baixa: false,
        Média: true,
        Alta: false,
      },
    ];
    setRequisicoes(initialRequisicoes);
  }, []);

  return (
    <Grid container spacing={3} style={{ justifyContent: "space-evenly", marginTop: "10vh" }}>
      <Grid item xs={6} style={{ textAlign: "center" }}>
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
            justifyContent: "space-around",
            margin: "10px",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h4">Cadastro de Requisições</Typography>

          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="tipo-requisicao">Tipo de Requisição</InputLabel>
            <Select
              labelId="tipo-requisicao"
              label="Tipo de Requisição"
              {...register("tipoRequisicao", { required: "Tipo de requisição é obrigatório" })}
            >
              <MenuItem value="Reclamações">Reclamações</MenuItem>
              <MenuItem value="Notificação">Notificação</MenuItem>
              <MenuItem value="Solicitações">Solicitações</MenuItem>
              <MenuItem value="Denúncias">Denúncias</MenuItem>
            </Select>
            {errors.tipoRequisicao && <span>{errors.tipoRequisicao.message}</span>}
          </FormControl>

          <TextField
            name="Assunto"
            label="Título da Requisição"
            variant="standard"
            {...register("Assunto", { required: "Título é obrigatório" })}
          />
          {errors.Assunto && <span>{errors.Assunto.message}</span>}

          <TextField
            name="Descricao"
            label="Descreva Detalhadamente"
            variant="standard"
            multiline
            rows={4}
            {...register("Descricao", { required: "Descrição é obrigatória" })}
          />
          {errors.Descricao && <span>{errors.Descricao.message}</span>}

          <Typography variant="subtitle1">Prioridade</Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormControlLabel control={<Checkbox {...register("Baixa")} />} label="Baixa" />
            <FormControlLabel control={<Checkbox {...register("Média")} />} label="Média" />
            <FormControlLabel control={<Checkbox {...register("Alta")} />} label="Alta" />
          </div>

          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Anexar Arquivo
            <VisuallyHiddenInput type="file" />
          </Button>

          <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Cadastrar"}
          </Button>
        </Box>
      </Grid>

      <Grid item xs={6} style={{ textAlign: "center" }}>
        <Box sx={{ padding: "20px" }}>
          <Typography variant="h4">Requisições Cadastradas</Typography>

          <TableContainer component={Paper}>
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
                    <TableCell>{getPrioridade(requisicao)}</TableCell>
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
        </Box>
      </Grid>
    </Grid>
  );
}
