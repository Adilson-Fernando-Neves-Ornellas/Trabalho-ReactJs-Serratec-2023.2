import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import Rotas from './Rotas/Rotas'
import "./main.css"
import { AuthProvider } from './Contexto/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={Rotas} />
        </AuthProvider>
    </React.StrictMode>
)
