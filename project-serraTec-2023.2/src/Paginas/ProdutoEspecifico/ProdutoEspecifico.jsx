import { useParams } from "react-router-dom";
import { api } from "../../api/api"
import { useState, useEffect, useContext } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./ProdutoEspecifico.css";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../Contexto/Context";

const ProdutoEspecifico = () => {
  const { listaProduto, setListaCarrinho, listaCarrinho, setTemListaCarrinho} = useContext(AuthContext);
  const { id } = useParams()
  const [produto, setProduto] = useState("");
  const [quantidadeProd, setQuantidadeProd] = useState(0);  
  const [mensagemQuantidadeMaxPermitida, setMensagemQuantidadeMaxPermitida] = useState("");

  const getProdutoEspecifico = async () => {
    const response = await api.get("/produtos/"+ id);
    setProduto(response.data);
  };

  const adicinarAoCarrinho = (id) => {
    if (quantidadeProd === 0) {
    console.log(id);
    } else {
   
      const produtoSelecionado = listaProduto.find((prod) => prod.id === id);
      const produtoASerAdicionado = { ...produtoSelecionado, quantidadeProd };
      setListaCarrinho([...listaCarrinho, produtoASerAdicionado]);
      setTemListaCarrinho(true)
    }  
  }

  function diminuirQuantidade() {
    if (quantidadeProd <= 0) {

    } else {
      setMensagemQuantidadeMaxPermitida("");
      setQuantidadeProd(quantidadeProd - 1);
    }
  }

function aumentarQuantidade() {
    if (quantidadeProd >= produto.estoque) {
      setMensagemQuantidadeMaxPermitida("Quantidade máxima em Estoque");
    } else {
      setQuantidadeProd(quantidadeProd + 1);
      setMensagemQuantidadeMaxPermitida("");
    }
  }
  
  useEffect(() => {
    getProdutoEspecifico();
  }, []);

    return (
      <>
        <NavBar/>
        <div className="cardProduto">
          <div className="imagemContainer">
            <img className="imgProduto" src={produto.imgurl} alt="Imagem do Produto" />
          </div>
          <div className="informacoesContainer">
            <h2 className="nomeProd">{produto.nome}</h2>
            <h1 className="preçoProd">R$:{produto.preco}</h1>
            <div className="containerQuantidadeAndMensagem">
              <div className='conteinerButtonquantidade' >
                <button className="buttonAlterarQuantidade" onClick={diminuirQuantidade}> - </button>
                <h6 className='textQuantidadeAlterada'> {quantidadeProd} </h6>
                <button className="buttonAlterarQuantidade" onClick={aumentarQuantidade}> + </button>
              </div>
              <h6>{mensagemQuantidadeMaxPermitida}</h6>
            </div>
            <h6 className="qtdProd">Estoque disponível Restante: {produto.estoque}</h6>
            <div className="containerDescricao">
              <p className="tituloContainerDescricao">Descrição do Produto:</p>
              <p className="descricao">{produto.descricao}</p>
            </div>
            <div className="botoesAcao">
              <button className="btnAdicionarCarrinho"onClick={() => adicinarAoCarrinho(produto.id)}>Adicionar ao Carrinho</button>
            </div>
          </div>
          </div>
        <Footer/>
      </>
    );
  };
  
  export default ProdutoEspecifico;