import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import BreadCrumb from "../components/BreadCrumb";

import './style.css';

const Signup = () => {
  return (
    <>
      <Meta title={"Camaleão - Registro de Usuário"} />
     
      <Container class1="login-wrapper py-5 home-wrapper-2">
      <div className="logon-container">
      <div className="content">
            <div className="auth-card">              
              <h3 className="text-center mb-3">Faça seu cadastro</h3>

              <form >       
               <CustomInput placeholder="Nome Completo"/>
               <CustomInput placeholder="Digite sua senha"  />
               <CustomInput type="email" placeholder="E-mail" />
               <CustomInput type="CPF" placeholder="CPF" />
               <CustomInput type="Endereco" placeholder="Endrenço" />

               <div className="input-group">
                <CustomInput placeholder="Cidade"/>
                <CustomInput placeholder="UF" style={{width: 80}}/>
               </div>  

               <button className="button" type="submit">Cadastrar</button>

              </form>
            </div>
          </div>
        </div>



      </Container>
    </>
  );
};

export default Signup;


