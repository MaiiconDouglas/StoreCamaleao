import React from "react";

import Container from "../components/Container";
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <>

    <Container class1="home-wrapper-1 py-5">
         <div className="row">
            <div className="col-6">
             <div className="main-banner position-relative ">
                <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
               />
              
                <div className="main-banner-content position-absolute">
                 <h4>Camiseta Flow</h4>
                 <h5>iPad S13+ Pro.</h5>
                 <p>R$: 400,00</p>
                 <Link className="button">Saber Mais</Link>
               </div>
             </div>
           </div>
          </div>
      </Container>

    </>
  );
};

export default Home;
