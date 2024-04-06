import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > :not(style)": { m: 1, width: "40ch" },
  border: "1px solid black",
  gap: "16px",
  borderRadius: "8px",
  padding: "20px",
});

const StyledButton = styled(Button)({
  marginTop: "16px",
});

export default function Login() {
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const login = formData.get("login");
    const password = formData.get("password");

    // Obter login e senha do localStorage
    const storedLogin = localStorage.getItem("login");
    console.log(storedLogin)
    const storedSenha = localStorage.getItem("senha");
    console.log(storedSenha)
    // Verificar se o login e a senha fornecidos correspondem aos armazenados
    if (login === storedLogin && password === storedSenha) {
      router.push("/cadRequisicoes");
    } else {
      alert("Login ou senha incorretos");
    }
  };

  return (
    <>
      <StyledBox>
        <StyledForm onSubmit={handleLogin}>
          <TextField
            id="outlined-basic"
            label="Login"
            variant="outlined"
            name="login"
            required
          />
          <TextField
            id="outlined-password-input"
            label="Senha"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            required
          />

          <StyledButton type="submit" variant="contained" color="primary">
            Entrar
          </StyledButton>
          <Typography variant="subtitle1" align="center" component="p">
            Ainda não é cadastrado?{" "}
            <Link href="/cadUsuario" color="primary" underline="always">
              Clique aqui
            </Link>
          </Typography>
        </StyledForm>
      </StyledBox>
    </>
  );
}
