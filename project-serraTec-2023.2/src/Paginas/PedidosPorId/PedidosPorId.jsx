import { useParams } from "react-router-dom";

const PedidosPorId = () => {  
  const { id } = useParams()

  
    return (
      <>  
        Pagina dos pedidos Especificos desse cliente com id: {id}
      </>
    );
  };
  
  export default PedidosPorId;