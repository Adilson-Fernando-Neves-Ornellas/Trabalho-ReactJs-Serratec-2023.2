import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import { useNavigate } from "react-router";

const PedidosPorId = () => {  
  const { email } = useParams()
  const navigate = useNavigate();

  const retornandoPageInicial=() =>{
    navigate("/");
  }

    return (
      <>  
        <Header/>
        Pagina dos pedidos Especificos desse cliente com esse email: {email}
        <button className="buttonPedidoEspecifico" onClick={retornandoPageInicial}> Pagina de Produtos </button>
      </>
    );
  };
  
  export default PedidosPorId;