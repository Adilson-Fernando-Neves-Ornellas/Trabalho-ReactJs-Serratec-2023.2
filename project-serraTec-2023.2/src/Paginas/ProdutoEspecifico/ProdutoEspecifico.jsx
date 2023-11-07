import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import NavBar from "../../components/NavBar/NavBar";
import "./ProdutoEspecifico.css";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../Contexto/Context";

const ProdutoEspecifico = () => {
  const { listaProduto, setListaCarrinho, listaCarrinho, setTemListaCarrinho} = useContext(AuthContext);
  const { id } = useParams();
  const [produto, setProduto] = useState("");
  const [frete, setFrete] = useState(0);
  const [quantidadeProd, setQuantidadeProd] = useState(0);
  const [mensagemQuantidadeMaxPermitida, setMensagemQuantidadeMaxPermitida] = useState("");

  // const [calculoFeito, setCalculoFeito] = useState(false);
  // const [cepDestino, setCepDestino] = useState("");
  
  const getProdutoEspecifico = async () => {
    const response = await api.get("/produtos/" + id);
    setProduto(response.data);
  };

  // const calcularFrete = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente",
  //       {
  //         nCdServico: "40010", // Código do serviço (PAC)
  //         sCepOrigem: "25970-045",
  //         sCepDestino: cepDestino,
  //         nVlPeso: "PESO_EM_QUILOS",
  //       }
  //     );

  //     setFrete(response.data);
  //     setCalculoFeito(true);

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Erro ao calcular o frete:", error);
  //   }
  // };

  useEffect(() => {
    getProdutoEspecifico();
  }, []);

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

  return (
    <>
      <NavBar />
      <div className="cardProduto">
        <div className="imagemContainer">
          <img className="imgProduto" src={produto.imgurl} alt="Imagem do Produto" />
        </div>
        <div className="informacoesContainer">
          <h2 className="nomeProd">{produto.nome}</h2>
          <h1 className="preçoProd">R$:{produto.preco}</h1>
          <div className='conteinerButtonquantidade' >
            <button className="buttonAlterarQuantidade" onClick={diminuirQuantidade}> - </button>
            <h6 className='textQuantidadeAlterada'> {quantidadeProd} </h6>
            <button className="buttonAlterarQuantidade" onClick={aumentarQuantidade}> + </button>
          </div>
          <h6 className="qtdProd">Estoque disponível Restante: {produto.estoque}</h6>
          <div className="containerDescricao">
            <p className="tituloContainerDescricao">Descrição do Produto:</p>
            <p className="descricao">{produto.descricao}</p>
          </div>
          <div className="botoesAcao">
         <button className="btnAdicionarCarrinho"onClick={() => adicinarAoCarrinho(produto.id)}>Adicionar ao Carrinho</button>
        </div>

          {/* <div className="botoesAcaoCEP">
          <input
           type="text"
           placeholder="Digite o CEP de destino"
          value={cepDestino}
          onChange={(e) => setCepDestino(e.target.value)}
           className="inputCep" // Adicione a classe ao campo de entrada
          />

            <button className="btnCalcularFrete" onClick={calcularFrete}>
              Calcular Frete
            </button>
            {calculoFeito && <p>Valor do Frete: R$ {frete}</p>}
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProdutoEspecifico;
