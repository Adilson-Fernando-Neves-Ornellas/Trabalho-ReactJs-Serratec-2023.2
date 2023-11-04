import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import CardCarrinho from "../../components/CardCarinho/CardCarrinho";
import './Carrinho.css'
import { useContext } from "react";
import { AuthContext } from "../../Contexto/Context";
import { useNavigate } from "react-router-dom";


const Carrinho = () => {
  const { listaCarrinho , idUsuario , isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate()

  let valortotal = listaCarrinho.reduce(
    (acumulador, valorTotal) => acumulador + valorTotal.preco, 0);

    function fazerPedido() {
    navigate("/pedidos/"+ idUsuario)
  }
  
    function pageLogin() {
    navigate("/login")
    }

  return (
    <>
      <Header />
     <div className="conteinerCarrinho">
      <h1 className="tituloCardcarrinho">Meu carrinho de compras</h1> 
      <div className="containerCardCarrinho">
        {listaCarrinho.map((carrinho) => (
          <CardCarrinho
          key={carrinho.id}
          img={carrinho.imgurl}
          nome={carrinho.nome}
          precoItems={carrinho.preco}
          // quantidadeItem={carrinho.quantidade}
          />
          ))}
        </div> 
      <p className="precoProd">R$: {valortotal}</p>
      <button className ="buttonFinalizarCompra" onClick={isLoggedIn ? () => fazerPedido():() =>pageLogin ()}>Finalizar Compra</button>
    </div>
      <Footer />
    </>
  );
};

export default Carrinho;
