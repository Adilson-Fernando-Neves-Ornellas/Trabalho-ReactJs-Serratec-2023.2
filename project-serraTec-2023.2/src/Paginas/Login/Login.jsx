import { api } from "../../api/api"
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/header';
import { useNavigate } from 'react-router';
import "./Login.css"


const Login = () => { 
  const navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')
  //const [gravarSenha, setGravarSenha] = useState(false);
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const irPaginaCadastro =() =>{
    navigate('/cadastro');
  }
  
  const getUsuarios = async () => {
    const response = await api.get("/usuarios");
    setListaUsuarios(response.data);
  };

  function verificarLogin(e){    
    e.preventDefault()
    getUsuarios();
    const usuarioEncontrado = listaUsuarios.find((usuario) => usuario.email === email && usuario.senha === senha);

    if(usuarioEncontrado){
      alert("Login efetuado com sucesso")
      navigate('/pedidos/' + email);
    }
    else{
      alert("Dados invalidos")
    }
    handleLimpar()
  }
  const handleLimpar = () => {
    setEmail('')
    setSenha('')
  }
  // const statusGravarSenha = () => {
  //   if (gravarSenha === false) {
  //     const modeloLocalStorage =
  //       {
  //         email: email,
  //         senha: senha
  //       }

  //     localStorage.setItem("Login Usuario", JSON.stringify(modeloLocalStorage));
  //   } else {
  //     localStorage.clear("Login Usuario");
  //   }
  //   setGravarSenha(!gravarSenha);
  // };

  // useEffect(() => {
  //   console.log(gravarSenha); 
  // }, [gravarSenha]);

  return (
    <>
    <Header/>
    <div className='containeFormLogin'>
      <Form onSubmit={verificarLogin} className='formLogin'>
        <Form.Group className="mb-3" controlId="formBasicEmail">          
        <h1 className="tituloFormLogin">Faça seu Login</h1>
          <Form.Label>Email</Form.Label>
          <Form.Control value={email} onChange={(email) => { setEmail(email.target.value) }} type="email" placeholder="Insira o email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control value={senha} onChange={(senha) => { setSenha(senha.target.value) }} type="password" placeholder="Insira a senha" />
        </Form.Group>

        {/* <Form.Group className="mb-3">
          <Form.Check checked={gravarSenha} onChange={statusGravarSenha} type="checkbox" label="Manter logado" />
        </Form.Group> */}

        <div className='conteinerbuttonLogin'>
          <Button className='buttonFormLogin' variant="primary" type="submit">
            Entrar
          </Button>
          <Button className='buttonFormLogin' variant="primary" onClick={irPaginaCadastro}>
            Cadastrar-se
          </Button>
        </div>
      </Form>
    </div>

    </>
  );
};

export default Login;
