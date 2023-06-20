
import { Link } from "react-router-dom"; 
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";

const Home = () => {
  return (
    <>

    <Container class1="home-wrapper-1 py-5">
    

    </Container>      
     
      
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">

            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Feedbacks</h6>                  
                </div>
                <img src="../img/logo-24.png" alt="Camisetas" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Produção</h6>               
                </div>
                <img src="../img/logo-24.png" alt="Camisetas" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Canecas</h6>                
                </div>                
                <img src="../img/logo-24.png" alt="Camisetas" />
              </div>

              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camisetas</h6>                 
                </div>
              <img src="../img/logo-24.png" alt="Camisetas" />
              </div>

            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          
            <h3 className="section-heading">Destaques</h3>

          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

   

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Produtos Exclusivos</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Ofertas do dia</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>

              </Marquee>

            </div>
          </div>
        </div>

      </Container>


    </>
  );
};

export default Home;
