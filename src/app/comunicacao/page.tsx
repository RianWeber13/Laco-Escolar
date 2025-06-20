"use client";

import "./comunicacao.css";
import NavBar from "../navbar/navBar";
import { useRouter } from "next/navigation";

export default function comunicacao() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token'); // ou sessionStorage
    router.push('/login'); // redireciona para login
  };

  return (
    <div>
      <NavBar onLogout={handleLogout} />
      <h1>Comunicação</h1>
    </div>
  );
}
