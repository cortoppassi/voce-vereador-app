import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Modal, Box, Typography } from "@mui/material";

// Estilos para o modal
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  width: '80%', // Responsividade
  maxWidth: 700, // Tamanho máximo do modal
};

// Componente principal
const Trasparencia = () => {
  const [requisicoes, setRequisicoes] = useState([]);
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const predefinidas = [
    {
      tipoRequisicao: "Reclamação",
      Assunto: "Buraco na Rua",
      Descricao: "Há um buraco na rua que está causando acidentes.",
      Prioridade: "Alta",
    },
    {
      tipoRequisicao: "Denúncia",
      Assunto: "Lixo na praça",
      Descricao: "Estão jogando lixo na praça central.",
      Prioridade: "Média",
    },
    {
      tipoRequisicao: "Solicitação",
      Assunto: "Poda de árvores",
      Descricao: "Solicitação de poda de árvores na rua principal.",
      Prioridade: "Baixa",
    },
    {
      tipoRequisicao: "Reclamação",
      Assunto: "Falta de iluminação",
      Descricao: "A rua está sem iluminação pública.",
      Prioridade: "Alta",
    },
    {
      tipoRequisicao: "Notificação",
      Assunto: "Infiltração em escola",
      Descricao: "Relato de infiltração no teto da escola.",
      Prioridade: "Alta",
    },
    {
      tipoRequisicao: "Solicitação",
      Assunto: "Mais ônibus",
      Descricao: "Solicitação para aumentar o número de ônibus na rota.",
      Prioridade: "Média",
    },
    {
      tipoRequisicao: "Denúncia",
      Assunto: "Som alto",
      Descricao: "Relato de som alto após o horário permitido.",
      Prioridade: "Baixa",
    },
    {
      tipoRequisicao: "Solicitação",
      Assunto: "Sinalização de trânsito",
      Descricao: "Solicitação de placas de sinalização no bairro.",
      Prioridade: "Média",
    },
    {
      tipoRequisicao: "Reclamação",
      Assunto: "Água suja",
      Descricao: "Reclamação de água com aparência turva nas torneiras.",
      Prioridade: "Alta",
    },
    {
      tipoRequisicao: "Notificação",
      Assunto: "Calçada quebrada",
      Descricao: "Notificação de calçada quebrada em frente à padaria.",
      Prioridade: "Baixa",
    },
  ];

  useEffect(() => {
    setIsClient(true);
    const storedRequisicoes = JSON.parse(localStorage.getItem("requisicoes")) || [];
    const allRequisicoes = [...predefinidas, ...storedRequisicoes];
    const uniqueRequisicoes = Array.from(new Set(allRequisicoes.map(a => JSON.stringify(a)))).map(a => JSON.parse(a));

    localStorage.setItem("requisicoes", JSON.stringify(uniqueRequisicoes));
    setRequisicoes(uniqueRequisicoes);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Box sx={{ width: "100%", padding: "2rem", backgroundColor: "#f9f9f9", marginTop: "64px"}}>
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {requisicoes.length !== 0 ? (
            <TableHead>
              <TableRow>
                <TableCell><strong>Tipo de Requisição</strong></TableCell>
                <TableCell><strong>Assunto</strong></TableCell>
                <TableCell><strong>Descrição</strong></TableCell>
                <TableCell><strong>Prioridade</strong></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
          ) : (
            <Typography variant="h6" align="center" sx={{ margin: "20px 0" }}>
              Não há requisições cadastradas
            </Typography>
          )}

          <TableBody>
            {requisicoes.map((requisicao, index) => (
              <TableRow key={index}>
                <TableCell>{requisicao.tipoRequisicao}</TableCell>
                <TableCell>{requisicao.Assunto}</TableCell>
                <TableCell>{requisicao.Descricao}</TableCell>
                <TableCell>{requisicao.Prioridade}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpen}
                  >
                    Mais informações
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" id="child-modal-title" sx={{ fontWeight: 'bold' }}>
            Dados da Requisição
          </Typography>
          {requisicoes.map((requisicao, index) => (
            <Box key={index} sx={{ marginBottom: "16px" }}>
              <Typography variant="body1" id="child-modal-description">
                <strong>Tipo de Requisição:</strong> {requisicao.tipoRequisicao}
              </Typography>
              <Typography variant="body1" id="child-modal-description">
                <strong>Assunto:</strong> {requisicao.Assunto}
              </Typography>
              <Typography variant="body1" id="child-modal-description">
                <strong>Descrição:</strong> {requisicao.Descricao}
              </Typography>
            </Box>
          ))}
          <Button variant="contained" color="error" onClick={handleClose}>
            Fechar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Trasparencia;
