import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../../src/components/Meta";
import Container from "../../../src/components/Container";
import { FiLogIn} from 'react-icons/fi';


import './style.css';

const Login = () => {
  return (
    <>
      <Meta title={"Camaleão - Painel de Controle "} />
      

      <Container class1="login-wrapper py-5 home-wrapper-2">
      <div className="logon-container">
      <div className="content">
    <section>
     

      <h1>Bem Vindo (a) Camaleão Store</h1>
      <p>Faça seu Login,  na plataforma.</p>

      <Link className="back-link" to="/signup">
        <FiLogIn size={16} color="#87C65C" />
        Inscrever-se
      </Link>

    </section>

    <form >
      
    <input placeholder="Seu E-mail" /> 
    <input placeholder="Digite sua senha" type='password'/>

    <Link className="back-link" to="/forgot-password">
        <FiLogIn size={16} color="#87C65C" />
        Esqueceu sua senha?
      </Link>

      
    <button className="button" type="submit">Entrar</button> 

    </form>    
      </div>
    </div>
  )

      </Container>

    </>
  );
};

export default Login;
