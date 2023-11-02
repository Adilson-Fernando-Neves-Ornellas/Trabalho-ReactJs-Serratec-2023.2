import './CardProdutos.css'

const CardProduto = ({id,nome,preco,quantidade,descricao,imgurl}) => { 

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
      <button className="buttonCompra">Comprar</button>
    </div>
  );
}

export default CardProduto;