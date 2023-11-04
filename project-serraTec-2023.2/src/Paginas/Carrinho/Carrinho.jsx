import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import CardCarrinho from "../../components/CardCarinho/CardCarrinho";
import './Carrinho.css'
import { useContext } from "react";
import { AuthContext } from "../../Contexto/Context";


const Carrinho = () => {
  const { listaCarrinho,listaProduto } = useContext(AuthContext);

  let valortotal = 0;

  useEffect(() => {
    valortotal = listaCarrinho.reduce(
      (acumulador, valorTotal) => acumulador + valorTotal.preco, 0);
    console.log(listaCarrinho);
    console.log(listaProduto);
  }, []);

  return (
    <>
      <Header />
     <div className="conteinerCarrinho">
      {listaCarrinho.map((carrinho) => (
        <CardCarrinho
        key={carrinho.id}
        img={carrinho.imgUrl}
        nome={carrinho.nome}
        precoItems={carrinho.preco}
        quantidadeItem={carrinho.quantidade}
        />
        ))}
      <p className="precoProd">R$: {valortotal}</p>
      <button className="buttonFinalizarCompra">Finalizar Compra</button>
    </div> 
      <Footer />
    </>
  );
};

export default Carrinho;
