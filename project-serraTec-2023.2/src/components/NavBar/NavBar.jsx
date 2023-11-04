import "./NavBar.css";
import imgcarrinho from "../../imagens/imgcarrinho.svg";
import Header from "../header/header";
import { useGeral } from "../../Contexto/Context";
import { useState } from "react";

const NavBar = () => {
  const { isLoggedIn, email, setListaProduto, listaProduto} = useGeral();
  const [busca, setBusca] = useState("");

  const buscarProd = (e) =>{
    e.preventDefault();
    setListaProduto(listaProduto.filter((prod) => prod.nome === busca))
      if(busca === ""){
        alert("Informe um produto!")
      }else{
        alert("Produto não encontrado!")
      }
  }

  return (
    <>
      <div className="navBarContainer">
        <div className="containerMenuNavBar">
          <h1 className="tituloEcommerce">Grupo02</h1>
          <div className="containerInput">
            <input

            value={busca}
              onChange={(string) => {setBusca(string.target.value);}}
              className="inputBuscar"
              type="text"
              placeholder="O que você está procurando?"
            />
            <button className="pesquisar" onClick={buscarProd}>Pesquisar</button>
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
