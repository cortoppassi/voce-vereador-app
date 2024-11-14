import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Typography, Link } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/system";

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

const Container = styled(Box)({
  display: "flex",
  height: "100vh",
  overflow: "hidden"
});

const ImageSection = styled(Box)({
  flex: 1,
  backgroundImage: "url('https://cdn.pixabay.com/photo/2019/04/17/05/41/salvador-4133397_1280.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const FormSection = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  padding: "20px", // Um pouco de padding extra para garantir que não fique colado nas bordas
  overflowY: "auto",
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "400px",
  width: "100%",
});

const StyledButton = styled(Button)({
  marginTop: "16px",
  padding: "10px 20px",
  backgroundColor: "#003366",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#00224D",
  },
});

const ErrorMessage = styled("span")({
  color: "#D32F2F",
  fontSize: "12px",
  textAlign: "center",
});

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isCadastro, setIsCadastro] = useState(false); // Controle do formulário (cadastro ou login)
  const router = useRouter();

  const handleChange = (event) => {
    setValue("selectField", event.target.value);
  };

  // Enviar dados para login
  const onSubmitLogin = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && data?.email === storedUser.email && data?.password === storedUser.password || data?.email === "admin" && data?.password === "adminadmin") {
      localStorage.setItem("login", true);
      router.push("/registrationRequests/cadRequisicoes");
    } else {
      alert("E-mail ou senha incorretos");
    }
  };

  // Enviar dados para cadastro
  const onSubmitCadastro = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    alert("Cadastro realizado com sucesso!");
    setIsCadastro(false);  // Após cadastro, voltar ao login
  };

  return (
    <Container>
      <ImageSection />
      <FormSection>
        {isCadastro ? (
          // Formulário de cadastro
          <StyledForm onSubmit={handleSubmit(onSubmitCadastro)}>
            <Typography variant="h5">Cadastro de Usuário</Typography>

          <div style={{display: "flex", gap: "20px"}}>
          <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              {...register("name", { required: "Nome obrigatório" })}
            />
            {errors?.name && <ErrorMessage>{errors?.name.message}</ErrorMessage>}

            <TextField
              label="CPF"
              variant="outlined"
              fullWidth
              {...register("cpf", { required: "CPF obrigatório" })}
            />
            {errors?.cpf && <ErrorMessage>{errors?.cpf.message}</ErrorMessage>}
          </div>
            
            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              {...register("email", { required: "E-mail obrigatório" })}
            />
            {errors?.email && <ErrorMessage>{errors?.email.message}</ErrorMessage>}

            <FormControl fullWidth>
              <InputLabel id="select-prefeitura-bairro">Prefeitura-Bairro</InputLabel>
              <Select
                labelId="select-prefeitura-bairro"
                label="Prefeitura-Bairro"
                {...register("selectField", { required: "Prefeitura-Bairro obrigatório" })}
                defaultValue=""
              >
                <MenuItem value="">Selecione</MenuItem>
                <MenuItem value={10}>Prefeitura-Bairro Centro/Brotas</MenuItem>
                <MenuItem value={20}>Prefeitura-Bairro Subúrbio/Ilhas</MenuItem>
                <MenuItem value={30}>Prefeitura-Bairro Cajazeiras</MenuItem>
                <MenuItem value={40}>Prefeitura-Bairro Itapuã</MenuItem>
                <MenuItem value={50}>Prefeitura-Bairro Cidade Baixa</MenuItem>
                <MenuItem value={60}>Prefeitura-Bairro Barra/Pituba</MenuItem>
                <MenuItem value={70}>Prefeitura-Bairro Cabula/Tancredo Neves</MenuItem>
                <MenuItem value={80}>Prefeitura-Bairro Pau da Lima</MenuItem>
                <MenuItem value={90}>Prefeitura-Bairro São Caetano/Liberdade</MenuItem>
                <MenuItem value={100}>Prefeitura-Bairro Valéria</MenuItem>
                <MenuItem value={110}>Prefeitura-Bairro Distrito Cultural Centro Histórico</MenuItem>
              </Select>
            </FormControl>
            {errors?.selectField && <ErrorMessage>{errors?.selectField.message}</ErrorMessage>}

            <TextField
              label="Telefone"
              variant="outlined"
              fullWidth
              {...register("phone", { required: "Telefone obrigatório" })}
            />
            {errors?.phone && <ErrorMessage>{errors?.phone.message}</ErrorMessage>}

            <TextField
              type="password"
              label="Senha"
              variant="outlined"
              fullWidth
              {...register("password", { required: "Senha obrigatória", minLength: { value: 6, message: "A senha deve ter pelo menos 6 caracteres" } })}
            />
            {errors?.password && <ErrorMessage>{errors?.password.message}</ErrorMessage>}

            <TextField
              type="password"
              label="Confirmar Senha"
              variant="outlined"
              fullWidth
              {...register("confirmPassword", { required: "Confirmação de senha obrigatória", minLength: { value: 6, message: "A senha deve ter pelo menos 6 caracteres" } })}
            />

            <Button
              component="label"
              role={undefined}
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Anexar Arquivo
              <VisuallyHiddenInput type="file" />
            </Button>

            <StyledButton type="submit">
              Cadastrar
            </StyledButton>

            <Typography variant="body2" align="center">
              Já é cadastrado?{" "}
              <Link
                href="#"
                color="primary"
                underline="hover"
                onClick={() => setIsCadastro(false)} // Volta ao formulário de login
              >
                Clique aqui
              </Link>
            </Typography>
          </StyledForm>
        ) : (
          // Formulário de login
          <StyledForm onSubmit={handleSubmit(onSubmitLogin)}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Acesso ao Sistema
            </Typography>

            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              {...register("email", { required: "E-mail obrigatório" })}
            />
            {errors?.email && <ErrorMessage>{errors?.email.message}</ErrorMessage>}

            <TextField
              label="Senha"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              fullWidth
              {...register("password", { required: "Senha obrigatória" })}
            />
            {errors?.password && <ErrorMessage>{errors?.password.message}</ErrorMessage>}

            <StyledButton type="submit">
              Entrar
            </StyledButton>

            <Typography variant="body2" align="center">
              Ainda não é cadastrado?{" "}
              <Link
                href="#"
                color="primary"
                underline="hover"
                onClick={() => setIsCadastro(true)} // Altera para exibir o formulário de cadastro
              >
                Clique aqui
              </Link>
            </Typography>
          </StyledForm>
        )}
      </FormSection>
    </Container>
  );
}
