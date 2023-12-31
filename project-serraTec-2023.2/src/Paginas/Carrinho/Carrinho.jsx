import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardCarrinho from "../../components/CardCarinho/CardCarrinho";
import './Carrinho.css'
import { api } from '../../api/api';
import { useContext } from "react";
import { AuthContext } from "../../Contexto/Context";
import { useNavigate } from "react-router-dom";


const Carrinho = () => {
  const { listaCarrinho , setListaCarrinho, idUsuario , isLoggedIn,temListaCarrinho,setTemListaCarrinho } = useContext(AuthContext);

  const navigate = useNavigate()

  let valortotal = listaCarrinho.reduce(
    (acumulador, produto) => acumulador + (produto.preco * produto.quantidadeProd), 0
  );
  
  function fazerPedido() {
    if(temListaCarrinho == false){
      alert("Não é possivel fazer um pedido sem nenhum produto, retornando a pagina de produtos")
      navigate("/")
    }else{
      salvarpedidoAndDeleteCarrinho()
      navigate("/pedidos/"+ idUsuario)
    }
  }
  
  function pageLogin() {
    if(temListaCarrinho == false){
      alert("Não é possivel fazer um pedido sem nenhum produto, retornando a pagina de produtos")
      navigate("/")
    }else{
      navigate("/login")
    }
  }

  const salvarpedidoAndDeleteCarrinho = async () => {
      const produtos = [...listaCarrinho]
      try {
        const response = await api.post('/pedidos', {produtos,idUsuario,valortotal})
      } catch (error) {
        for(let i = 0; i < produtos.length; i++){
          const estoqueNovo = produtos[i].estoque - produtos[i].quantidadeProd
    
          const produtoParaAtualizar = {
            id: produtos[i].id,
            nome: produtos[i].nome,
            preco: produtos[i].preco,
            estoque: estoqueNovo,
            descricao: produtos[i].descricao,
            imgurl: produtos[i].imgurl,
            like:produtos[i].like,
            disLike:produtos[i].disLike,
            favoritos:produtos[i].favoritos
          };
          try {
            const updateResponse = await api.put(`/produtos/${produtos[i].id}`, produtoParaAtualizar);
          } catch (error) {
            
          }
        }
        esvaziarCarrinho()
        alert("Pedido realizado com sucesso!")
      }
  }
  
  function esvaziarCarrinho(){
    setListaCarrinho([]);
    setTemListaCarrinho(false);
  }

  return (
    <>
      <Header />
     <div className="conteinerCarrinho">
      <h1 className="tituloCardcarrinho">Meu carrinho de compras</h1> 
      <div className="containerCardCarrinho">
        {listaCarrinho.map((carrinho) => (
          <CardCarrinho
          key={carrinho.id}
          img={carrinho.imgurl}
          nome={carrinho.nome}
          precoItems={carrinho.preco}
          quantidadeProd={carrinho.quantidadeProd}
          />
          ))}
        </div>
      <p className="precoProd">R$: {valortotal}</p>
      <div className="containerButttonCarrinho">
        <button className ="buttonEsvaziarcarrinho" onClick={() => esvaziarCarrinho()}>Esvaziar Carrinho</button>
        <button className ="buttonFinalizarCompra" onClick={isLoggedIn ? () => fazerPedido():() =>pageLogin ()}>Finalizar Compra</button>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Carrinho;
