import "./CardPedido.css";

const CardPedido = ({ valortotal,itens }) => {
  console.log(itens)
  return (
      <div className="card">
        <div className="containerInfoProd">
          <p className="precoProd">Itens desse pedido: {itens}</p>
          <p className="nomeProd">Valor total desse pedido:{valortotal}</p>
        </div>
      </div>
  );
};

export default CardPedido;
