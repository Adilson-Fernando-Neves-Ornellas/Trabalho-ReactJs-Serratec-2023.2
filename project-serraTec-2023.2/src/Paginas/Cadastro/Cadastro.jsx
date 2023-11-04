import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Cadastro.css"
import Header from "../../components/header/header";
import { api } from '../../api/api';
import Footer from "../../components/Footer/Footer";

const Cadastro = () => {  
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    const navigate = useNavigate()

    const handleSave = async (e) => {
      e.preventDefault()
      if (nome != '' && senha != ''&& email != '' ){
        const response = await api.post('/usuarios', {nome, email, senha})

        handleLimpar()
        alert("Cliente Cadastrado com Sucesso, retornando a pagina de login!")
        navigate("/Login")
      }
      
    }

    const handleLimpar = () => {
      setNome('')
      setEmail('')
      setSenha('')
    }

    return (
      <>
      <Header/>
      <div className="container">
        <form className="form" onSubmit={handleSave} onReset={handleLimpar}>
        <h1 className="tituloFormCadastro">Faça seu cadastro</h1>
        <label className="label">Nome:</label>
        <br />
        <input className="input" value={nome} onChange={(e) => { setNome(e.target.value) }} placeholder="Insira seu Nome"/>
        
        <label className="label">Email</label>
        <br />
        <input className="input" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Insira seu Email"/>

        <label className="label">Senha</label>
        <br />
        <input className="input" value={senha} onChange={(e) => { setSenha(e.target.value) }} placeholder="Insira sua Senha"/>
        <br />

        <div className="containerButtons">
          <button className="button" type='submit'>Salvar</button>
          <button className="button" type='reset'>Limpar</button>
        </div>        
      </form>
      </div>
      <Footer/>
      </>

    );
  };
  
  export default Cadastro;