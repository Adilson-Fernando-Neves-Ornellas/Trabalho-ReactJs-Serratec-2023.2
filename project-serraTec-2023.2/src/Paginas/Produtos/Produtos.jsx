import CardProduto from "../../components/CardProdutos/CardProduto";
import React, {useEffect, useState } from "react";
import { api } from "../../api/api";
import NavBar from "../../components/NavBar/NavBar";
import "./Produtos.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexto/Context"; 

import Footer from "../../components/Footer/Footer";

const Produtos = () => {
  const {listaProduto, setListaProduto} = useContext(AuthContext)

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    const response = await api.get("/produtos");
    const produtos = response.data;
    let teste = produtos; // Assumindo que `teste` seja uma variável fora do escopo do componente.
    setListaProduto(produtos);
  };
  
  return (
    <>
      <NavBar />
      <div className="containerCard">
        {listaProduto.map((produto) => (
          <CardProduto
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            estoque={produto.estoque}
            descricao={produto.descricao}
            imgurl={produto.imgurl}
            like={produto.like}
            disLike={produto.disLike}
            favoritos={produto.favoritos}
          />
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Produtos;
