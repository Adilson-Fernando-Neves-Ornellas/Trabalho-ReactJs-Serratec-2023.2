import "./CardPedido.css";

const CardPedido = ({ valortotal,produtos }) => {
  console.log(produtos)
  return (
      <div className="cardPedido">
        <div className="containerInfoPedido">
        {produtos.map((produto) => (
          <>
          <div className="containerinfoProdPedido">
            <img className="imgProdPedido" src={produto.imgurl}></img>
            <h4>{produto.nome} |</h4>
            <h4>R$: {produto.preco} |</h4>
            <h4>Quantidade: {produto.quantidadeProd} |</h4>
          </div>
          </>
          ))}
          <h2 className="valorTotalPedido">Valor total desse pedido: R${valortotal}</h2>
        </div>
      </div>
  );
};

export default CardPedido;
