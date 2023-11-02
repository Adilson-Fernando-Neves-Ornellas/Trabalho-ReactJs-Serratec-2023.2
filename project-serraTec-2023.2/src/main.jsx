import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from "react-router-dom";
import Rotas from './Rotas/Rotas'
import "./main.css"


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={Rotas} />
)
