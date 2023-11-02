import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from "react-router-dom";
import Rotas from './Rotas/Rotas'


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={Rotas} />
)
