import './CardProdutos.css'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../Contexto/Context';


const CardProduto = ({id,nome,preco,quantidade,descricao,imgurl}) => { 
const {setListaCarrinho, listaCarrinho,listaProduto} = useContext(AuthContext)

  const navigate = useNavigate()

  function pageproduto(id) {
    navigate("/produto/"+ id)
  }

  const adicinarAoCarrinho = (id) => {
    const produtoASerAdicionado = listaProduto.find((prod) => prod.id === id);
    setListaCarrinho([...listaCarrinho, produtoASerAdicionado]);
  }

  return (
  <div className="card" key={id}>
    <div className='conteinerImgProd'>
      <img className="imgcard" src={imgurl} />
    </div>
    <div className='containerInfoProd'>
      <p className="nomeProd">{nome}</p>
      <p className="precoProd">R$: {preco}</p>
    </div>
    <button className="buttonVerMais" onClick={() => pageproduto(id)}>Ver Mais</button>
    <button className="buttonCompra" onClick={() => adicinarAoCarrinho(id)}>Comprar</button>
  </div>
);
}

export default CardProduto;