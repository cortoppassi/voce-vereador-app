import React from "react";
import { Box, Typography, useMediaQuery, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";

export default function Footer() {
  return (
   
     <div style={{ position: "fixed", bottom: 0, width: "100%", textAlign: "center", paddingBottom: "10px" }}>
      <Image src="/footer.png" alt="Footer" layout="responsive" width={500} height={300} />
    </div>
   
  );
}
