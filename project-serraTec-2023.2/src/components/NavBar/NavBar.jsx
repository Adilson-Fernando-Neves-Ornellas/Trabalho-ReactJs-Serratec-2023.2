import "./NavBar.css";
import imgcarrinho from "../../imagens/imgcarrinho.svg";
import Header from "../header/header";
import { api } from "../../api/api";
import { AuthContext, useGeral } from "../../Contexto/Context";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { isLoggedIn, email } = useGeral();
  const [busca, setBusca] = useState("");
  const { listaProduto, setListaProduto } = useGeral(AuthContext);

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    const response = await api.get("/produtos");
    setListaProduto(response.data);
  };

  const buscarProd = (e) =>{
    e.preventDefault();
    if(busca === ""){
      getProdutos();
    }else{
      const produtosEncontrados = listaProduto.filter((prod) => prod.nome === busca);

      if (produtosEncontrados.length === 0) {
        alert("Produto não encontrado!");
      } else {
        // Exiba apenas os produtos encontrados
        setListaProduto(produtosEncontrados);
      }        
    }
  }

  return (
    <>
      <div className="navBarContainer">
        <div className="containerMenuNavBar">
          <h1 className="tituloEcommerce">Grupo02</h1>
          <input
              value={busca}
              onChange={(string) => {setBusca(string.target.value);}}
              className="inputBuscar"
              type="text"
              placeholder="O que você está procurando?"
            />
        <button className="bttPesquisar" onClick={buscarProd}>Pesquisar</button>
          <div className="containerInput">                     
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
