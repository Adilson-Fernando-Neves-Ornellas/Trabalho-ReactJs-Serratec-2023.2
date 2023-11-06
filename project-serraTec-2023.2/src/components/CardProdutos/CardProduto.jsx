import './CardProdutos.css';
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from '../../Contexto/Context';
import { api } from "../../api/api";
import likes from "../../imagens/likes.png";
import disLikes from "../../imagens/dislikes.png";

const CardProduto = ({ id, nome, preco, estoque, descricao, imgurl, like, disLike, favoritos }) => {
  const { setListaCarrinho, listaCarrinho, listaProduto, setTemListaCarrinho, isLoggedIn, idUsuario } = useContext(AuthContext);

  const [quantidadeProd, setQuantidadeProd] = useState(0);
  const [mensagemQuantidadeMaxPermitida, setMensagemQuantidadeMaxPermitida] = useState("");
  const [countLike, setCountLike] = useState(0);
  const [countDisLike, setCountDisLike] = useState(0);
  const [clickLike, setClickLike] = useState(false);
  const [clickDisLike, setClickDisLike] = useState(false);
  const [clickFavorito, setClickFavorito] = useState(false);

  const navigate = useNavigate();

  const AdicionarIdUsuarioComoFavorito = async (id) => {
    if (isLoggedIn === false) {
      alert("Não é possível adicionar aos favoritos antes de efetuar o login");
    } else {
      setClickFavorito(!clickFavorito);
      const response = await api.get(`/produtos/` + id);
      const produto = response.data;
  
      if (clickFavorito === true) {
        // Remover o ID do usuário da lista de favoritos
        const index = produto.favoritos.findIndex(favorito => favorito.idUsuario === idUsuario);
        if (index !== -1) {
          produto.favoritos.splice(index, 1);
        }
      } else {
        // Adicionar o ID do usuário à lista de favoritos do produto
        if (!produto.favoritos.some(favorito => favorito.idUsuario === idUsuario)) {
          produto.favoritos.push({ idUsuario });
        }
      }
      // Envie uma solicitação PATCH para atualizar o JSON na sua API
      await api.patch(`/produtos/` + id, produto);
    }
  };

  const verificarSeEFavoritoouNao = async (id) => {
    if (isLoggedIn === false) {
      setClickFavorito(false)
    } else {
      const response = await api.get(`/produtos/` + id);
      const produto = response.data;
      const index = produto.favoritos.findIndex(favorito => favorito.idUsuario === idUsuario);
      console.log(index)
      if (index !== -1) {
        setClickFavorito(true);
      } else {
        setClickFavorito(false);
      }
    }
  }

  function handleLike() {
    setClickLike(!clickLike);
    setCountLike(clickLike ? countLike - 1 : countLike + 1);
  }

  function handleDisLike() {
    setClickDisLike(!clickDisLike);
    setCountDisLike(clickDisLike ? countDisLike - 1 : countDisLike + 1);
  }

  function diminuirQuantidade() {
    if (quantidadeProd <= 0) {

    } else {
      setMensagemQuantidadeMaxPermitida("");
      setQuantidadeProd(quantidadeProd - 1);
    }
  }

function aumentarQuantidade() {
    if (quantidadeProd >= estoque) {
      setMensagemQuantidadeMaxPermitida("Quantidade máxima em Estoque");
    } else {
      setQuantidadeProd(quantidadeProd + 1);
      setMensagemQuantidadeMaxPermitida("");
    }
  }

  function pageproduto(id) {
    navigate("/produto/" + id);
  }

  const adicinarAoCarrinho = (id) => {
    if (quantidadeProd === 0) {

    } else {
      const produtoSelecionado = listaProduto.find((prod) => prod.id === id);
      const produtoASerAdicionado = { ...produtoSelecionado, quantidadeProd, like, disLike };
      setListaCarrinho([...listaCarrinho, produtoASerAdicionado]);
      setTemListaCarrinho(true)
    }
  }
  
  useEffect(() => {
    verificarSeEFavoritoouNao(id)
  }, []);
  

if (estoque > 0) {
    return (

      <div className="card" key={id}>
        <div className='conteinerImgProd'>
          <img className="imgcard" src={imgurl} alt={nome} />
        </div>
        <div className='containerInfoProd'>
          <p className="nomeProd">{nome}</p>
          <p className="precoProd">R$: {preco}</p>
          <div className='conteinerButtonquantidade' >
            <button className="buttonAlterarQuantidade" onClick={diminuirQuantidade}> - </button>
            <h6 className='textQuantidadeAlterada'> {quantidadeProd} </h6>
            <button className="buttonAlterarQuantidade" onClick={aumentarQuantidade}> + </button>
          </div>
          <h6>{mensagemQuantidadeMaxPermitida}</h6>
        </div>
        
        <button className={clickFavorito?"bttnFavoritarAtivado":"bttnFavoritar"} onClick={()=> AdicionarIdUsuarioComoFavorito(id)}>
            <h3>Favoritos</h3>  
        </button>
        <div className='containnerButtonLikeDislike'>
          <button className="bttnLike" onClick={handleLike}>
            <img className="like" src={likes} alt="like" />
            <span className="likeContador">Like: {countLike}</span>
          </button>
          <button className="bttnDisLike" onClick={handleDisLike}>
            <img className="dislike" src={disLikes} alt="dislike" />
            <span className="dislikeContador">DisLike: {countDisLike}</span>
          </button>
        </div>
        <button className="buttonVerMais" onClick={() => pageproduto(id)}>Ver Mais</button>
        <button className="buttonCompra" onClick={() => adicinarAoCarrinho(id)}>Adicionar ao carrinho</button>
      </div>
    );
  } else {
    // Caso o estoque seja menor que 0, não renderize o card
    return null;
  }
}

export default CardProduto;