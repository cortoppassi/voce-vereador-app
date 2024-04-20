import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit, formState: {errors} } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (data.email === user.email && data.password === user.password) {
      router.push("/registrationRequests/cadRequisicoes");
    } else {
      alert("E-mail ou senha incorretos");
    }
  };

  return (
    <>
      <StyledBox>
        <StyledForm>
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            {...register("email", {required: true})}
          />
          {errors?.email && <span className="error-message">E-mail obrigatório*</span>}
          <TextField
            id="outlined-password-input"
            label="Senha"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            {...register("password", {required: true})}
          />
          {errors?.password && <span className="error-message">Senha obrigatória*</span>}

          <StyledButton onClick={() => handleSubmit(onSubmit)()} variant="contained" color="primary">
            Entrar
          </StyledButton>
          <Typography variant="subtitle1" align="center" component="p">
            Ainda não é cadastrado?{" "}
            <Link href="/userRegistration/cadUsuario" color="primary" underline="always">
              Clique aqui
            </Link>
          </Typography>
        </StyledForm>
      </StyledBox>
    </>
  );
}
