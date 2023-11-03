import "./NavBar.css";
import imgcarrinho from "../../imagens/imgcarrinho.svg";
import Header from "../header/header";
import { useAuth } from "../../Contexto/Context";
import { useState } from "react";

const NavBar = () => {
  const { isLoggedIn, email } = useAuth();
  const [busca, setBusca] = useState();
  const [listaFilter, setListaFilter] = useState();
  const {listaProduto} = useAuth()

  const buscarProd = (e) =>{    
    e.preventDefault();
    setListaFilter(listaProduto.filter((prod) => { prod.nome === busca }))
    console.log(listaFilter)
  }

  return (
    <>
      <div className="navBarContainer">
        <div className="containerMenuNavBar">
          <h1 className="tituloEcommerce">Grupo02</h1>
          <div className="conteinerInput">
            <input
            value={busca}
              onChange={(string) => {
                setBusca(string.target.value);
              }}
              className="imputBusca"
              type="text"
              placeholder="O que você está procurando?"
              onClick={buscarProd}
            />
          </div>
          <div className="containerLoginEcarrinho">
            <a className="linkLogin" href = { isLoggedIn ?  "/pedidos/"+email : "/Login"}>
              {isLoggedIn ? ' MEUS PEDIDOS':'ENTRAR'}
            </a>
            <a className="buttoncarrinho" href="/carrinho">
              <img
                className="imgcarrinho"
                src={imgcarrinho}
                alt="Imagem do carrinho de compra "
              />
            </a>
          </div>
        </div>
        <Header />
      </div>
    </>
  );
};

export default NavBar;
