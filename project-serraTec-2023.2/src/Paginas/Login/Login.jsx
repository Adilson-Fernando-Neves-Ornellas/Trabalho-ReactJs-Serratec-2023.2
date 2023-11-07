import { api } from "../../api/api";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router";
import "./Login.css";
import Footer from "../../components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Contexto/Context"; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [gravarSenha, setGravarSenha] = useState(false);
  const [usuario, setUsuario] = useState([]);
  const {isLoggedIn,setIsLoggedIn,setIdUsuario} = useContext(AuthContext);

  const irParaMeusPedidos= () =>{
    navigate("/pedidos/" + email);
  }

  const irPaginaCadastro = () => {
    navigate("/cadastro");
  };

  const getUsuarios = async () => {
    const response = await api.get("/usuarios", {params: {email,senha}});
    setUsuario(response.data[0]);
  };


  function verificarLogin(e) {
    e.preventDefault();
    getUsuarios();
    getUsuarios();
    if (usuario.id) {
      setIsLoggedIn(true)
      setIdUsuario(usuario.id)
      alert("Login efetuado com sucesso");
      navigate("/pedidos/" + usuario.id);
    } else {
      alert("Dados invalidos");
    }
    handleLimpar();
  }

  const handleLimpar = () => {
    setEmail("");
    setSenha("");
  };

  const statusGravarSenha = () => {
    if (gravarSenha === false) {
      const modeloLocalStorage = {
        email: email,
        senha: senha,
      };

      localStorage.setItem("Login Usuario", JSON.stringify(modeloLocalStorage));
    } else {
      localStorage.clear("Login Usuario");
    }
    setGravarSenha(!gravarSenha);
  };

  return (
    <>
      <Header />
      <div className="containeFormLogin">
      {isLoggedIn ? (<div className="containerMeusPedidos">       
      <h1 className="tituloJaLogado">O usuário está logado.</h1>
        <Button className="buttonFormLogin" variant="primary" onClick={irParaMeusPedidos}>
          Meus Pedidos
        </Button>
        </div>
      ) : (
          <Form onSubmit={verificarLogin} className="formLogin">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h1 className="tituloFormLogin">Faça seu Login</h1>
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(email) => {
                  setEmail(email.target.value);
                }}
                type="email"
                placeholder="Insira o email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                value={senha}
                onChange={(senha) => {
                  setSenha(senha.target.value);
                }}
                type="password"
                placeholder="Insira a senha"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                checked={gravarSenha}
                onChange={statusGravarSenha}
                type="checkbox"
                label="Manter logado"
              />
            </Form.Group>

            <div className="containerButtonLogin">
              <Button
                className="buttonFormLogin"
                variant="primary"
                type="submit"
              >
                Entrar
              </Button>
              <Button
                className="buttonFormLogin"
                variant="primary"
                onClick={irPaginaCadastro}
              >
                Cadastrar-se
              </Button>
            </div>
          </Form>
      )}
      </div>
      <Footer/>
    </>
  );
};

export default Login;
