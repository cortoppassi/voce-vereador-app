import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  overflow: "auto",
  height: "webkit-fill-available",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Trasparencia = () => {
  const [requisicoes, setRequisicoes] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const storedRequisicoes = localStorage.getItem("requisicoes");
    if (storedRequisicoes) {
      setRequisicoes(JSON.parse(storedRequisicoes));
    }
  }, []);

  return (
    <TableContainer component={Paper} sx={{ padding: "10vh", height: "80vh" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      {requisicoes && requisicoes.length != 0 ? (
        <TableHead>
          {console.log(requisicoes)}
        <TableRow>
          <TableCell>
            <h2>Tipo de Requisição</h2>
          </TableCell>
          <TableCell>
            <h2>Assunto</h2>
          </TableCell>
          <TableCell>
            <h2>Descrição</h2>
          </TableCell>
          <TableCell>
            <h2>Prioridade</h2>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      ) : (
        <>
          <h1>Não a requisições cadastradas</h1>
        </>
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
                  color="success"
                  onClick={handleOpen}
                >
                  Mais informações
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 700}}>
          <div>
          {requisicoes.map((requisicao, index) => {
            return (
              <div key={index}>
                <h2 id="child-modal-title">Dados da requisição </h2>
                <p id="child-modal-description">
                  Tipo de Requisição: {requisicao.tipoRequisicao}{" "}
                </p>
                <p id="child-modal-description">
                  Assunto: {requisicao.Assunto}{" "}
                </p>
                <p id="child-modal-description">
                  Descrição: {requisicao.Descricao}{" "}
                </p>
              </div>
            );
          })}
          </div>
          <Button variant="contained" color="error" onClick={handleClose}>
            Sair
          </Button>
        </Box>
      </Modal>
    </TableContainer>
  );
};

export default Trasparencia;
