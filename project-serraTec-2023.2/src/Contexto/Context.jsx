import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idUsuario, setidusuario] = useState(''); 
  const [listaProduto, setListaProduto] = useState([]);
  const [listaCarrinho, setListaCarrinho] = useState([]);

  const login = (userData,idUsuario) => {
    setUser(userData);
    setIsLoggedIn(true);
    setidusuario(idUsuario)
  }

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false); // Define o estado de login como false
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn, idUsuario, listaProduto , setListaProduto, listaCarrinho, setListaCarrinho}}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node, // Adicione esta linha para validar 'children'
};

export const useAuth = () => {
  return useContext(AuthContext);
};
