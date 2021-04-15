import React from "react";

import FormRequestCreditCardAndAccount from "../FormRequestCreditCardAndAccount";

function FirstBlockPage() {
  return (
    <div className="sm:flex sm:flex-col sm:w-full lg:flex lg:flex-row lg:justify-between lg:items-center p-12 h-screen bg-primary">
      <div className="lg:w-2/6">
        <h1 className="font-medium text-white lg:text-5xl leading-tight mb-5">
          Pix: um novo jeito de fazer transferências e pagamentos
        </h1>
        <a href="#" className="text-white font-medium text-lg">
          Saiba como funciona
        </a>
      </div>
      <div className="lg:w-2/6">
        <img
          className="lg:w-12/12"
          src="https://nubank.com.br/_next/static/images/e15fdae704986353baa4578b5a50149a-pix-transfer@1x.png.webp"
        />
      </div>
      <div className="lg:w-2/6">
        <FormRequestCreditCardAndAccount />
      </div>
    </div>
  );
}

export default FirstBlockPage;
