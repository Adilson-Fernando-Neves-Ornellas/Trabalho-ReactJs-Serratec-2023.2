import './CardProdutos.css'

const CardProduto = ({id,nome,preco,quantidade,descricao,imgurl}) => { 

    return (
    <div className="card" key={id}>
        <img className="imgcard" src={imgurl} />
          <p className="infoProd">{nome}</p>
          <p className="infoProd">{preco}</p>
          <p className="infoProd">{descricao}</p>
          <p className="infoProd">{quantidade}</p>
          <button className="buttonCompra">Comprar</button>{' '}
    </div>
  );
}

export default CardProduto;