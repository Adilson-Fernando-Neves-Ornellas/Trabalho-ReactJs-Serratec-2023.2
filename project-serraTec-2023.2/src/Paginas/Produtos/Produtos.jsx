import CardProduto from "../../components/CardProdutos/CardProduto";
import {useEffect } from "react";
import { api } from "../../api/api";
import NavBar from "../../components/NavBar/NavBar";
import "./Produtos.css";
import { useAuth } from "../../Contexto/Context";
import Footer from "../../components/Footer/Footer";

const Produtos = () => {

  const {listaProduto, setListaProduto} = useAuth()

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    const response = await api.get("/produtos");
    setListaProduto(response.data);
  };

  return (
    <>
      <NavBar />
      <div className="conteinerCard">
        {listaProduto.map((produto) => (
          <CardProduto
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            quantidade={produto.quantidade}
            descricao={produto.descricao}
            imgurl={produto.imgurl}
            getProdutos={getProdutos}
          />
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Produtos;
