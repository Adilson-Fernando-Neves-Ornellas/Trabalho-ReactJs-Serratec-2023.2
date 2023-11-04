import "./NavBar.css";
import imgcarrinho from "../../imagens/imgcarrinho.svg";
import Header from "../header/header";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Contexto/Context";

const NavBar = () => {
  const { isLoggedIn,idUsuario,setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate();

  const desativarUsuario = () => {
    setIsLoggedIn(false);
  }

  const pagePedidos = () =>{
    navigate("/pedidos/"+idUsuario);
  }
  const pageLogin = () =>{
    navigate("/login");
  }

  const pageCarrinho = () =>{
    navigate("/carrinho");
  }

  return (
    <>
      <div className="navBarContainer">
        <div className="containerMenuNavBar">
          <h1 className="tituloEcommerce">Grupo02</h1>
          <div className="containerLoginEcarrinho">
          <button className="linkLogin" onClick={isLoggedIn ? pagePedidos : pageLogin}>
              {isLoggedIn ? ' Meus pedidos':'Entrar'}
            </button>
            <button className="buttoncarrinho" onClick={pageCarrinho}>
              <img
                className="imgcarrinho"
                src={imgcarrinho}
                alt="Imagem do carrinho de compra "
              />
            </button>
            <button className={isLoggedIn ? "linkLogin" : "linkdesativado"} onClick={isLoggedIn ? desativarUsuario : ""}>
              {isLoggedIn ? ' Sair':''}
            </button>
          </div>
        </div>
        <Header />
      </div>
    </>
  );
};

export default NavBar;
