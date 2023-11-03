import "./Footer.css"

const Footer = () => {

    return (
      <footer className="footer" >

        <div className="conteinerLinks">
        
        <div className="cardInfo">
            <h2>Participantes:</h2>
            <h5>Adilson</h5>
            <h5>Dayane</h5>
            <h5>Filipi</h5>
            <h5>Isaque</h5>
            <h5>Taynara</h5>

        </div>

        <div className="cardInfo"> 
            <h2>Contato</h2>
            <a target="_blank" className= "linkContatos" href="https://github.com/Adilson-Fernando-Neves-Ornellas/Trabalho-ReactJs-Serratec-2023.2"> GitHub </a>
            <a target="_blank" className= "linkContatos" href="https://www.linkedin.com/in/adilson-fernando-neves-ornellas-42b594237/"> LinkedIn Adilson</a>
            <a target="_blank" className= "linkContatos" href="https://www.linkedin.com/in/dayane-thuller-496903ba/"> LinkedIn Dayane</a>
            <a target="_blank" className= "linkContatos" href="https://www.linkedin.com/"> LinkedIn Filipi</a>
            <a target="_blank" className= "linkContatos" href="https://www.linkedin.com/in/isaque-perez-39a5ba295/"> LinkedIn Isaque</a>
            <a target="_blank" className= "linkContatos" href="https://www.linkedin.com/in/taynara-aguiar/"> LinkedIn Taynara</a>

        </div>

        <div className="cardInfo">
            <h2>Páginas</h2>
            <a target="_blank" className= "linkContatos" href="/"> Produtos </a>
            <a target="_blank" className= "linkContatos" href="/cadastro"> Cadastre-se</a>
            <a target="_blank" className= "linkContatos" href="/login"> Login</a>
            <a target="_blank" className= "linkContatos" href="/carinho"> Carrinho</a>
        </div>

        </div>

        <div className="copyright">

            <h3 className="copyrightText">
            ©2023 Copyright: SerraTec.com
            </h3>

        </div>


      </footer>
    );
  };

  export default Footer;