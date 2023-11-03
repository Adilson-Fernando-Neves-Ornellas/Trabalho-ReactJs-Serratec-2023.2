import { useParams } from "react-router-dom";
import { api } from "../../api/api"
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./ProdutoEspecifico.css"


const ProdutoEspecifico = () => {  
  const { id } = useParams()
  const [produto, setProduto] = useState("");

  const getProdutoEspecifico = async () => {
    const response = await api.get("/produtos/"+ id);
    setProduto(response.data);
  };
  useEffect(() => {
    getProdutoEspecifico();
  }, []);

    return (
      <>
        <NavBar/>
        <div className="containerPaginaProdEspecifico">
            <div className="containerImgProdEspecifico">
                <img className="imgProd" src={produto.imgurl} alt="Imagem do Produto" />
            </div>
            <div className="containerInfoProd">
              <h2 className="nomeProd">{produto.nome}</h2>
              <h1 className="preçoProd">R$:{produto.preco}</h1>
              <h3 className="qtdProd">Quantidade disponivel Restante: {produto.quantidade}</h3>
              <button className="buttonCompra">Comprar</button>
            </div>
        </div>
        <div className="containerDescricao">
          <p className="tituloContainerDescricao">Descrição do Produto:</p>
          <p className="descricao">{produto.descricao}</p>
        </div>
      </>
    );
  };
  
  export default ProdutoEspecifico;