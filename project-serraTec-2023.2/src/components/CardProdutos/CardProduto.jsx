import './CardProdutos.css'
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from '../../Contexto/Context';


const CardProduto = ({id,nome,preco,estoque,descricao,imgurl}) => { 
const {setListaCarrinho, listaCarrinho,listaProduto, setTemListaCarrinho} = useContext(AuthContext)
const [quantidadeProd,setQuantidadeProd] = useState(0)


  const navigate = useNavigate()

  function diminuirQuantidade(){
    if(quantidadeProd <= 0){

    }else{
      setQuantidadeProd(quantidadeProd -1)
    }
  }

  function aumentarQuantidade(){
    if(quantidadeProd >= estoque){

    }else{
      setQuantidadeProd(quantidadeProd +1)
    }
  }

  function pageproduto(id) {
    navigate("/produto/"+ id)
  }

  const adicinarAoCarrinho = (id) => {
    const produtoSelecionado = listaProduto.find((prod) => prod.id === id);
    const produtoASerAdicionado ={
      ...produtoSelecionado, quantidadeProd
    }
    setListaCarrinho([...listaCarrinho, produtoASerAdicionado]);
    setTemListaCarrinho(true);
  }

  return (
  <div className="card" key={id}>
    <div className='conteinerImgProd'>
      <img className="imgcard" src={imgurl} />
    </div>
    <div className='containerInfoProd'>
      <p className="nomeProd">{nome}</p>
      <p className="precoProd">R$: {preco}</p>
      <div className='conteinerButtonquantidade' >
        <button className="buttonAlterarQuantidade" onClick={() => diminuirQuantidade()}> - </button> 
        <h6 className='textQuantidadeAlterada'> {quantidadeProd} </h6>
        <button className="buttonAlterarQuantidade" onClick={() => aumentarQuantidade(id)}> + </button>
      </div>
    </div>
    <button className="buttonVerMais" onClick={() => pageproduto(id)}>Ver Mais</button>
    <button className="buttonCompra" onClick={() => adicinarAoCarrinho(id)}>Comprar</button>
  </div>
);
}

export default CardProduto;