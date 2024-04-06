import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [requisicoes, setRequisicoes] = useState([]);

  useEffect(() => {
    const storedRequisicoes = localStorage.getItem("requisicoes");
    if (storedRequisicoes) {
      setRequisicoes(JSON.parse(storedRequisicoes));
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10vh" }}>
      <Image src="/pref.png" alt="Prefeitura" layout="responsive" width={500} height={300} />
    </div>
  );
}
