import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";
import watch from "../images/watch-1.avif";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Camaleão - Comparar Produtos"} />
      
      <BreadCrumb title=" Comparar os Produtos" />

      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={watch}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
              <img src={watch} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
               
                </h5>
                <h6 className="price mb-3 mt-3">R$ 200,00 </h6>

                <div>
                  <div className="product-detail">
                    <h5>Marca:</h5>
                    <p>Caneca</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tipo:</h5>
                    <p>Camiseta</p>
                  </div>
                  <div className="product-detail">
                    <h5>Detalhes:</h5>
                    <p>Em estoque</p>
                  </div>
                  <div className="product-detail">
                    <h5>Cor:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Tamanho:</h5>
                    <div className="d-flex gap-10">
                      <p>Feminino</p>
                      <p>Masculino</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={watch} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                 Caneca Personalizada
                </h5>
                <h6 className="price mb-3 mt-3">R$ 100,00 </h6>

                <div>
                  <div className="product-detail">
                    <h5>Marca:</h5>
                    <p>Caneca</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tipo:</h5>
                    <p>Caneca</p>
                  </div>
                  <div className="product-detail">
                    <h5>Detalhes:</h5>
                    <p>Em estoque</p>
                  </div>
                  <div className="product-detail">
                    <h5>Cor:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Tamanho:</h5>
                    <div className="d-flex gap-10">
                      <p>Feminino</p>
                      <p>Masculino</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
