import React from "react";

import BreadCrumb from "./src/components/BreadCrumb";

import Meta from "./src/components/Meta";

import Container from "./src/components/Container";

const RefundPloicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />

      <BreadCrumb title="Refund Policy" />

      <Container class1="policy-wrapper py-5 home-wrapper-2">

        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>

      </Container>

    </>
  );
};

export default RefundPloicy;
