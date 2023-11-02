import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const CardProduto = () => {  

    return (

    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 20 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_954956-MLU70095100789_062023-O.webp" />
            <Card.Body>
              <Card.Title>Nome</Card.Title>
              <Card.Title>Preço</Card.Title>
              <Button variant="primary">Comprar</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardProduto;