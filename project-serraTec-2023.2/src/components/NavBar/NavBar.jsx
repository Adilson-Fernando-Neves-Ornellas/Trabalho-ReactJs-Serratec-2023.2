import "./NavBar.css"
import imgcarrinho from '../../imagens/imgcarrinho.svg'
import Header from "../header/header";
const NavBar = () => {


  
    return (
      <>  
        <div className="navBarContainer">
          <div className='containerMenuNavBar'>
          <h1 className="tituloEcommerce">
            Grupo02
          </h1>
          <div className="conteinerInput">
            <input className='imputBusca' type="text" placeholder='O que você está procurando?' />
          </div>
          <div className="containerLoginEcarrinho">
              <a className='linkLogin' href="/Login"> ENTRAR </a>
              <a className='buttoncarrinho' href="/carrinho">
                <img className='imgcarrinho' src={imgcarrinho} alt="Imagem do carrinho de compra " />
              </a>
          </div>
          </div>
          <Header/>
        </div>
      </>
    );
  };
  
  export default NavBar;