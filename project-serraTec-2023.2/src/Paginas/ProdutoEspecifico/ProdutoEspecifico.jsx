import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar"

const ProdutoEspecifico = () => {  
  const { id } = useParams()

  
    return (
      <>
        <NavBar/>
        Pagina do Produto {id}
      </>
    );
  };
  
  export default ProdutoEspecifico;