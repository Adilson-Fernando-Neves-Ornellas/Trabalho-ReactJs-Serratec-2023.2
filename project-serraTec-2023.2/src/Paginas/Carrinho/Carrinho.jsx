import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import CardCarrinho from "../../components/CardCarinho/CardCarrinho";
import { useGeral } from "../../Contexto/Context";
import './Carrinho.css'

const Carrinho = () => {
  const { listaCarrinho } = useGeral();

  let valortotal = 0;

  useEffect(() => {
    // Qualquer código que dependa da listaCarrinho atualizada pode ser colocado aqui
    valortotal = listaCarrinho.reduce(
      (acumulador, valorTotal) => acumulador + valorTotal.preco, 0);

    console.log(listaCarrinho);
  }, [listaCarrinho]);

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
