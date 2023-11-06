import "./NavBar.css";
import { useContext } from "react";
import imgcarrinho from "../../imagens/imgcarrinho.svg";
import Header from "../Header/Header";
import { api } from "../../api/api";
import { useEffect, useState } from "react";
import { AuthContext } from "../../Contexto/Context";
import { useNavigate } from "react-router";
import logo from '../../imagens/logo.png';

const NavBar = () => {
  const [busca, setBusca] = useState("");
  const { listaProduto, setListaProduto } = useContext(AuthContext)
  const { isLoggedIn,idUsuario,setIsLoggedIn } = useContext(AuthContext)
  
  const navigate = useNavigate();

  const desativarUsuario = () => {
    setIsLoggedIn(false);
  }
  
  const mostrarTodosProdutos = () =>{
    getProdutos();
    setBusca('');
    navigate("/");
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
  useEffect(() => {
    getProdutos();
    console.log(isLoggedIn)
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
          <h1 className="tituloEcommerce">
            <button className="buttonHome" onClick={mostrarTodosProdutos}>
                <img className="imgLogo" src={logo} alt="Logo do Trabalho" />
            </button>
          </h1>
          <div className='containerImput'>
            <input className="imputBusca"
                value={busca}
                onChange={(string) => {setBusca(string.target.value);}}
                type="text"
                placeholder="O que você está procurando?"
                />
          <button className="bttPesquisar" onClick={buscarProd}>Pesquisar</button>
        </div>
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
            <a className={isLoggedIn ? "linkLogin" : "linkdesativado"} href="/">
              {isLoggedIn ? ' Sair':''}
            </a>
          </div>
        </div>
        <Header />
      </div>
    </>
  );
};


export default NavBar;