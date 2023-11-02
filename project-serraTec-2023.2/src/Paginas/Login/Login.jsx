import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {  

  return (
    <>
    <></>  
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Insira o email" />
        <Form.Text className="text-muted">
          Sua senha não será compartilhada com ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Insira a senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Manter logado" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Logar
      </Button>
    </Form>

    </>
  );
};

export default Login;
