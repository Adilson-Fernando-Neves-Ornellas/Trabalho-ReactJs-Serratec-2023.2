import './CardProdutos.css'
import { useNavigate } from "react-router-dom"

const CardProduto = ({id,nome,preco,quantidade,descricao,imgurl}) => { 

  const navigate = useNavigate()

  function pageproduto(id){
    alert("Entrei na função")
    console.log(id)
    navigate("/produto/"+ id)
  }
    return (
    <div className="card" key={id}>
      <div className='conteinerImgProd'>
        <img className="imgcard" src={imgurl} />
      </div>
      <div className='containerInfoProd'>
        <p className="nomeProd">{nome}</p>
        <p className="precoProd">R$: {preco}</p>
        <p className="descricaoProd">{descricao}</p>
        <p className="quantidadeProd">Quantidade restante: {quantidade}</p>
      </div>
      {/* <button className="buttonVerMais" onClick={pageproduto(id)}>Ver Mais</button> */}
      <button className="buttonCompra">Comprar</button>
    </div>
  );
}

export default CardProduto;