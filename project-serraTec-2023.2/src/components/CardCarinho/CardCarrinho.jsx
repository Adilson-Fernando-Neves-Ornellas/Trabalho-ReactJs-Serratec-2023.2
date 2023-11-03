import "./CardCarrinho.css";

const CardCarrinho = ({ img, nome, precoItems, quantidadeItem }) => {
  return (
    <div className="card">
      <div className="conteinerImgProd">
        <img className="imgcard" src={img} />
      </div>
      <div className="containerInfoProd">
        <p className="nomeProd">{nome}</p>
        <p className="precoProd">R$: {precoItems}</p>
        <p className="qtdProd">Quantidade: {quantidadeItem}</p>
      </div>
    </div>
  );
};

export default CardCarrinho;
