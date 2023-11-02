import { useParams } from "react-router-dom";

const ProdutoEspecifico = () => {  
  const { id } = useParams()

  
    return (
      <>  
        Pagina do Produto {id}
      </>
    );
  };
  
  export default ProdutoEspecifico;