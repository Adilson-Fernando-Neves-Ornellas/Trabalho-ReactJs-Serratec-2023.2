import { useParams } from "react-router-dom";
import { api } from "../../api/api"
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./ProdutoEspecifico.css";
import Footer from "../../components/Footer/Footer";
// import like from "../../imagens/like.png"
// import disLike from "../../imagens/dislike.png"
//comentario

const ProdutoEspecifico = () => {  
  const { id } = useParams()
  const [produto, setProduto] = useState("");
  // const [countLike, setCountLike] = useState(0)
  // const [countDisLike, setCountDisLike] = useState(0)

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
              <h3 className="qtdProd">Estoque disponivel Restante: {produto.estoque}</h3>
              {/* <button className="bttnLike" onClick={() => setCountLike((count) => count + 1)}>
                <img className="like" src={like} alt="like" />
                <hi className= "likeContador">Like: {countLike}</hi>
              </button>
              <button className="bttnDisLike" onClick={() => setCountDisLike((count) => count + 1)}>
                <img className="dislike" src={disLike} alt="dislike" />
                <hi className= "dislikeContador">DisLike: {countDisLike}</hi>
              </button> */}
              <button className="buttonCompra">Comprar</button>
            </div>
        </div>
        <div className="containerDescricao">
          <p className="tituloContainerDescricao">Descrição do Produto:</p>
          <p className="descricao">{produto.descricao}</p>
        </div>
        <Footer/>
      </>
    );
  };
  
  export default ProdutoEspecifico;