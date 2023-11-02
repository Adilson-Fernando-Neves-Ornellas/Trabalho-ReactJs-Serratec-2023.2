import { useParams } from "react-router-dom";
import Header from "../../components/header/header";

const PedidosPorId = () => {  
  const { email } = useParams()

  
    return (
      <>  
        <Header/>
        Pagina dos pedidos Especificos desse cliente com esse email: {email}
      </>
    );
  };
  
  export default PedidosPorId;