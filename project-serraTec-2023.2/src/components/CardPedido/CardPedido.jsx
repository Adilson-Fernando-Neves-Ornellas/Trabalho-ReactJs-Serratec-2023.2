import "./CardPedido.css";

const CardPedido = ({ valortotal,produtos }) => {
  console.log(produtos)
  return (
      <div className="card">
        <div className="containerInfoProd">
          <p className="precoProd">Produtos desse pedido: {produtos}</p>
          <p className="nomeProd">Valor total desse pedido:{valortotal}</p>
        </div>
      </div>
  );
};

export default CardPedido;
