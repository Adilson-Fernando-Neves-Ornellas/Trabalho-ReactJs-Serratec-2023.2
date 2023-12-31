import { createContext, useState } from 'react';

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [listaProduto, setListaProduto] = useState([]);
    const [listaCarrinho, setListaCarrinho] = useState([]);
    const [temListaCarrinho, setTemListaCarrinho] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [idUsuario, setIdUsuario] = useState(false);
     
    //const [user, setUser] = useState(null);
    

    return <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn, listaProduto , setListaProduto, listaCarrinho, setListaCarrinho,idUsuario, setIdUsuario, temListaCarrinho, setTemListaCarrinho}}>{children}</AuthContext.Provider>
}

