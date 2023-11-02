import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar"
import Header from "../../components/header/header";

const ProdutoEspecifico = () => {  
  const { id } = useParams()

  
    return (
      <>
        <NavBar/>
        <Header/>
        Pagina do Produto {id}
      </>
    );
  };
  
  export default ProdutoEspecifico;