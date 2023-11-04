import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import CardCarrinho from "../../components/CardCarinho/CardCarrinho";
import './Carrinho.css'
import { useContext } from "react";
import { AuthContext } from "../../Contexto/Context";


const Carrinho = () => {
  const { listaCarrinho } = useContext(AuthContext);

  let valortotal = listaCarrinho.reduce(
    (acumulador, valorTotal) => acumulador + valorTotal.preco, 0);

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
      <button className="buttonFinalizarCompra">Finalizar Compra</button>
    </div>
      <Footer />
    </>
  );
};

export default Carrinho;
