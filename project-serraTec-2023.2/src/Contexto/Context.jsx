
// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [idUsuario, setidusuario] = useState('');
//   const [listaProduto, setListaProduto] = useState([]);   
//   const [listaCarrinho, setListaCarrinho] = useState([]);

//   const login = (userData,idUsuario) => {
//     setUser(userData);
//     setIsLoggedIn(true);
//     setIdusuario(idUsuario)
//   }

//   const logout = () => {
//     setUser(null);
//     setIsLoggedIn(false); // Define o estado de login como false
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, isLoggedIn, idUsuario, listaProduto, setListaProduto, listaCarrinho, setListaCarrinho}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthProvider.propTypes = {
//   children: PropTypes.node, // Adicione esta linha para validar 'children'
// };

// export const useGeral = () => {
//   return useContext(AuthContext);
// };
// ---------------------------------------------------------------------------------------
import { createContext, useState } from 'react';

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [listaProduto, setListaProduto] = useState([]);
    const [listaCarrinho, setListaCarrinho] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [idUsuario, setIdUsuario] = useState(false);
    
    // const [user, setUser] = useState(null);


    return <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn, listaProduto , setListaProduto, listaCarrinho, setListaCarrinho,idUsuario, setIdUsuario}}>{children}</AuthContext.Provider>
}

