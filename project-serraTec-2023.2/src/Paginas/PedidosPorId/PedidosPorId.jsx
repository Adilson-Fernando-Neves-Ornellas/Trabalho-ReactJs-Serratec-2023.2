import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import { useNavigate } from "react-router";
import Footer from "../../components/Footer/Footer";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from '../../Contexto/Context';
import { api } from '../../api/api';


  const PedidosPorId = () => {  
  const { email } = useParams()
  const navigate = useNavigate();
  const {isLoggedIn, listaCarrinho, idUsuario} = useContext(AuthContext)
  const [pedidos, setPedidos]=useState([])

  const retornandoPageInicial=() =>{
    navigate("/");
  }

  const getPedidos = async () => {
    const response = await api.get("/pedidos", {params: {idUsuario}});
    setPedidos(response.data[0]);
    console.log(pedidos)
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
        
        <button className="buttonPedidoEspecifico" onClick={retornandoPageInicial}> Pagina de Produtos </button>
        

        <Footer/>
         </>           
    );
  };
  
  export default PedidosPorId;