import { useParams } from "react-router-dom";
import Header from "../../components/header/header";

const PedidosPorId = () => {  
  const { id } = useParams()

  
    return (
      <>  
        <Header/>
        Pagina dos pedidos Especificos desse cliente com id: {id}
      </>
    );
  };
  
  export default PedidosPorId;