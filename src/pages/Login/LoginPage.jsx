import * as Api from "../../api/auth";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LoginPageStyle } from "./LoginPage";
import { PageStyle } from "../LoginAndRegisterPages";

import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit.jsx";
import ForgotPasswordModal from "../../components/ForgotPasswordModal/ForgotPasswordModal.jsx";
import { useUsers } from "../../contexts/userContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLogged } = useUsers();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.signIn({ email, password });

      if (response.id) {
        localStorage.setItem("@lendit/user_id", response.id);
        setIsLogged(true);
        navigate("/emprestei");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao efetuar login!");
    }
  };

  return (
    <>
      <PageStyle>
        <LoginPageStyle>
          <div className="page">
            <div className="title-page">
              <h1>
                Bem-vindo de volta ao <span> LEND.IT </span>
              </h1>
              <p>
                <span> Faça Login </span> preenchendo os campos abaixo:
              </p>
            </div>
            <form method="POST">
              <div className="inputs">
                <input
                  type="text"
                  placeholder="E-mail"
                  id="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Senha"
                  id="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="container">
                <ForgotPasswordModal />
                <ButtonSubmit submit={onSubmit}>Entrar</ButtonSubmit>
              </div>
            </form>
            <p className="redirect">
              Ainda não tem uma conta? <Link to="/register"> Registre-se </Link>
              .
            </p>
          </div>
        </LoginPageStyle>
      </PageStyle>
    </>
  );
}
