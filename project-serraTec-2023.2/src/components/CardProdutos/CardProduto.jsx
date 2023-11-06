import './CardProdutos.css';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from '../../Contexto/Context';
import likes from "../../imagens/like.png";
import disLikes from "../../imagens/disLike.png";

const CardProduto = ({ id, nome, preco, estoque, descricao, imgurl, like, disLike, favoritos }) => {
  const { setListaCarrinho, listaCarrinho, listaProduto, setTemListaCarrinho } = useContext(AuthContext);
  const [quantidadeProd, setQuantidadeProd] = useState(0);
  const [mensagemQuantidadeMaxPermitida, setMensagemQuantidadeMaxPermitida] = useState("");
  const [countLike, setCountLike] = useState(0);
  const [countDisLike, setCountDisLike] = useState(0);
  const [clickLike, setClickLike] = useState(false);
  const [clickDisLike, setClickDisLike] = useState(false);
  const [clickFavorito, setClickFavorito] = useState(false);
  const {isLoggedIn} = useContext(AuthContext)

  const navigate = useNavigate();

  function handleFavoritar() {
    setClickFavorito(!clickFavorito);
    console.log(clickFavorito)
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
      setTemListaCarrinho(true);
    }
  }
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
        
        <button className='bttnFavoritar' onClick={async () => {
          await api.patch(`/produtos/${id}`, { favoritos: !favoritos, });
        }}>
            <h3>Favoritos</h3>  
        </button>
        {/* {isLoggedIn ? 
        const produtos = [...listaProduto]
        for(let i = 0; i < produtos.length; i++){
          
          const produtoParaAtualizar = {
            {id}: produtos[i].id,
            {favoritos}: produtos[i].favoritos(handleFavoritar)           
          };          
          const updateResponse = await api.patch(`/produtos/${produtoSelecionado.id}`, produtoParaAtualizar);
          }
        <div>
          <button className='bttnFavoritar' onClick={handleFavoritar}>
            <h3>Favoritos</h3>
          </button>
        </div>: 
        null
        } */}
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