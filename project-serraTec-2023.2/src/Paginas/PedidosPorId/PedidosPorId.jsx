import Header from "../../components/header/header";
import { useNavigate } from "react-router";
import Footer from "../../components/Footer/Footer";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from '../../Contexto/Context';
import { api } from '../../api/api';
import CardPedido from "../../components/CardPedido/CardPedido";
import "./PedidosPorid.css";


  const PedidosPorId = () => {  
  const navigate = useNavigate();
  const { idUsuario} = useContext(AuthContext)
  const [pedidos, setPedidos]=useState([])

  const retornandoPageInicial=() =>{
    navigate("/");
  }

  const getPedidos = async () => {
    const response = await api.get("/pedidos", {params: {idUsuario}});
    setPedidos([response.data]);
  };

  function pageLogin() {
    navigate("/login")
  }

  useEffect(() => {
    getPedidos();
  }, []);

    return (

       <>    
      <Header/>
        <div className="containerCardPedido">
        {pedidos.map((pedido) => (
          <CardPedido
          key={pedido.id}
          valortotal={pedido.valortotal}
          itens={pedido.itens}
          />
          ))}
        </div> 
        <div className="containerbuttonPedidosId">
          <button className="buttonPedidoEspecifico" onClick={retornandoPageInicial}> Retorna a pagina de produtos </button>
        </div>
        <Footer/>
         </>           
    );
  };
  
  export default PedidosPorId;