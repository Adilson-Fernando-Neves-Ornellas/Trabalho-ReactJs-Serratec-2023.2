import './CardProdutos.css'
import { useNavigate } from "react-router-dom"
import { api } from "../../api/api";
import { useGeral } from '../../Contexto/Context';


const CardProduto = ({id,nome,preco,quantidade,descricao,imgurl}) => { 
  const {setListaCarrinho, listaCarrinho} = useGeral()
  const navigate = useNavigate()

  function pageproduto(id) {
    navigate("/produto/"+ id)
  }
  const getProduto = async (id) => {
    const response = await api.get("/produtos/" + id);
    setListaCarrinho([...listaCarrinho, response.data]);
  };

  const adicinarAoCarrinho = (id) => {
    getProduto(id);
    console.log(listaCarrinho)
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