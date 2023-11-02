import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/header';
import { useNavigate } from 'react-router';
import "./Login.css"


const Login = () => { 
  const navigate = useNavigate();

  const irPaginaCadastro =() =>{
    navigate('/cadastro');
  }

  return (
    <>
    <Header/>
    <div className='containeFormLogin'>
      <Form className='formLogin'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <h1 className="tituloFormLogin">Faça seu Login</h1>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Insira o email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Insira a senha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Manter logado" />
        </Form.Group>
        <div className='conteinerbuttonLogin'>
          <Button className='buttonFormLogin' variant="primary" type="submit">
            Entrar
          </Button>
          <Button className='buttonFormLogin' variant="primary" onClick={irPaginaCadastro}>
            Cadastra-se
          </Button>
        </div>
      </Form>
    </div>

    </>
  );
};

export default Login;
