import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Cadastro.css"

const Cadastro = () => {  
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const [usuario,setUsuario] = useState([])

    const navigate = useNavigate()

    const handleSave = async (e) => {
      e.preventDefault()
      setUsuario([...usuario,{ nome, email, senha }])
      //await api.post('/cadastro', { nome, email, senha })
      //navigate('/login')
      //console.log(usuario)
    }

    const handleLimpar = () => {
      setNome('')
      setEmail('')
      setSenha('')
    }
    return (
      <>
      <div className="container">
        <form className="form" onSubmit={handleSave} onReset={handleLimpar}>
        <label className="label">Nome:</label>
        <br />
        <input className="input" value={nome} onChange={(e) => { setNome(e.target.value) }}/>
        <p />

        <label className="label">Email</label>
        <br />
        <input className="input" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <br />

        <label className="label">Senha</label>
        <br />
        <input className="input" value={senha} onChange={(e) => { setSenha(e.target.value) }} />
        <br />

        <div className="containerButtons">
          <button className="button" type='submit'>Salvar</button>
          <button className="button" type='reset'>Limpar</button>
        </div>        
      </form>
      </div>
        </>
    );
  };
  
  export default Cadastro;