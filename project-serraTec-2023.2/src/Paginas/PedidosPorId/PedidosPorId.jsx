import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import { useNavigate } from "react-router";
import Footer from "../../components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from '../../Contexto/Context';

  const PedidosPorId = () => {  
  const { email } = useParams()
  const navigate = useNavigate();
  const {isLoggedIn} = useContext(AuthContext)

  const retornandoPageInicial=() =>{
    navigate("/");
  }

  function pageLogin() {
    navigate("/login")
  }

    return (

       <>    
      <Header/>
        
        <button className="buttonPedidoEspecifico" onClick={retornandoPageInicial}> Pagina de Produtos </button>
        <Footer/>
         </>           
    );
  };
  
  export default PedidosPorId;