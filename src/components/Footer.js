// import React from "react";
// import { Box, Typography, useMediaQuery, Link } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import Image from "next/image";

// export default function Footer() {
//   return (
   
//      <div style={{ position: "fixed", bottom: 0, width: "100%", textAlign: "center", paddingBottom: "10px" }}>
//       <Image src="/footer.png" alt="Footer" layout="responsive" width={500} height={300} />
//     </div>
   
//   );
// }
import React from "react";
import { Box, Typography, useMediaQuery, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <div>
      <Box
        sx={{
          p: 6,
          bgcolor: "#4D76BD",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
        component="footer"
      >
        {/* Seção: Prefeitura Notícias */}
        <Box sx={{ mr: 4 }}>
          <Typography variant="subtitle1" align="center" color="#fff" component="p">
            PREFEITURA NOTÍCIAS
          </Typography>
        </Box>

        {/* Seção: Siga a Prefeitura */}
        <Box sx={{ mr: 4 }}>
          <Typography variant="subtitle1" align="center" color="#fff" component="p">
            SIGA A PREFEITURA:
          </Typography>
          <FacebookIcon sx={{ mr: 1, color: '#fff'}}/>
          <YouTubeIcon sx={{ mr: 1, color: '#fff'}}/>
          <TwitterIcon sx={{ mr: 1, color: '#fff'}}/>
        </Box>

        {/* Seção: Diário Oficial */}
        <Box sx={{ mr: 4 }}>
          <Typography variant="subtitle1" align="center" color="#fff" component="p">
            DIÁRIO OFICIAL
          </Typography>
          <Typography variant="subtitle1" align="center" color="#fff" component="p">
            Informações Institucionais de tudo que acontece na prefeitura.
          </Typography>
        </Box>

        {/* Seção: Prefeitura de Salvador */}
        <Box>
          <Typography variant="subtitle1" align="center" color="#fff" component="p">
            PREFEITURA DE SALVADOR
          </Typography>
          <Typography variant="subtitle1" align="center" color="#fff" component="p">
            Av. Thomé de Souza, 126 - Centro, Salvador - BA, 40000-000
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

