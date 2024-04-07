import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Trasparencia = () => {
  const [requisicoes, setRequisicoes] = useState([]);

  useEffect(() => {
    const storedRequisicoes = localStorage.getItem("requisicoes");
    if (storedRequisicoes) {
      setRequisicoes(JSON.parse(storedRequisicoes));
    }
  }, []);

  return (
    <TableContainer component={Paper} sx={{ padding: "10vh", height: "80vh"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h2>Tipo de Requisição</h2></TableCell>
            <TableCell><h2>Assunto</h2></TableCell>
            <TableCell><h2>Descrição</h2></TableCell>
            <TableCell><h2>Prioridade</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requisicoes.map((requisicao, index) => (
            <TableRow key={index}>
              <TableCell>{requisicao.tipoRequisicao}</TableCell>
              <TableCell>{requisicao.Assunto}</TableCell>
              <TableCell>{requisicao.Descricao}</TableCell>
              <TableCell>{requisicao.Prioridade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Trasparencia
