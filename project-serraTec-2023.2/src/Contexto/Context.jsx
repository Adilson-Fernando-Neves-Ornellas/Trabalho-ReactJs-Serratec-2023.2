import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idUsuario, setidusuario] = useState(''); 
  const [listaProduto, setListaProduto] = useState([]);

  const login = (userData,idUsuario) => {
    setUser(userData);
    setIsLoggedIn(true);
    setIdusuario(idUsuario)
  }

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false); // Define o estado de login como false
  };

  // Resto do seu código permanece inalterado

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn, idUsuario, listaProduto , setListaProduto}}>
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
