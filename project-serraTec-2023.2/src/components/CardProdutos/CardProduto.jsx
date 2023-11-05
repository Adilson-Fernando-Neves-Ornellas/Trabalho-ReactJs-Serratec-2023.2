import './CardProdutos.css'
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from '../../Contexto/Context';


const CardProduto = ({id,nome,preco,estoque,descricao,imgurl}) => { 
const {setListaCarrinho, listaCarrinho,listaProduto, setTemListaCarrinho} = useContext(AuthContext)
const [quantidadeProd,setQuantidadeProd] = useState(0)
const [mensagemQuantidadeMaxPermitida,setmensagemQuantidadeMaxPermitida] = useState("")

  const navigate = useNavigate()

  function diminuirQuantidade(){
    if(quantidadeProd <= 0){

    }else{
      setmensagemQuantidadeMaxPermitida("")
      setQuantidadeProd(quantidadeProd -1)
    }
  }

  function aumentarQuantidade(){
    if(quantidadeProd >= estoque){
      setmensagemQuantidadeMaxPermitida("Quantidade maxima em Estoque ")
    }else{
      setQuantidadeProd(quantidadeProd +1)
      setmensagemQuantidadeMaxPermitida("")
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

  if (estoque > 0) {
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
          <h6>{mensagemQuantidadeMaxPermitida}</h6>
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