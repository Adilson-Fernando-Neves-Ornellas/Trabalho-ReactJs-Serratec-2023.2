import Cadastro from '../Paginas/Cadastro/Cadastro';
import Login from '../Paginas/Login/Login';
import { createBrowserRouter } from "react-router-dom";
import Produtos from '../Paginas/Produtos/Produtos';
import ProdutoEspecifico from '../Paginas/ProdutoEspecifico/ProdutoEspecifico';
import PedidosPorId from '../Paginas/PedidosPorId/PedidosPorId';
import Carrinho from '../Paginas/Carrinho/Carrinho';

const Rotas = createBrowserRouter([
    {path: "/", element: <Produtos />},
    {path: "/produto/:id", element: <ProdutoEspecifico /> },
    {path: "/cadastro", element: <Cadastro />}, //opcional
    {path: "/login", element: <Login /> },
    {path: "/carrinho", element: <Carrinho /> },
    {path: "/pedidos/:id", element: <PedidosPorId />}, //opcional
]);

export default Rotas;
