import React from "react";

import FormRequestCreditCardAndAccount from "../FormRequestCreditCardAndAccount";

function SecondBlockPage() {
  return (
    <div className="sm:flex sm:flex-col sm:w-full lg:flex lg:flex-row lg:justify-evenly lg:items-center p-72 h-screen bg-secondBlockPageColor">
      <div className="lg:w-2/6">
        <span className="text-primary lg:text-5xl font-medium">
          Conta do Nubank
        </span>
        <h1 className="font-medium text-black lg:text-5xl leading-tight mt-2 mb-6">
          Nossa conta digital com mais de 20 milhões de clientes em todo o
          Brasil.
        </h1>
        <a href="#" className="text-primary font-medium text-lg">
          Segura e sem complicações
        </a>
      </div>
      <div className="lg:w-3/6">
        <img
          className="lg:w-12/12"
          src="https://nubank.com.br/_next/static/images/10a21ac659550fdd6c2941cd7ec275ab-nuconta-inclined-device@3x.png.webp"
        />
      </div>
    </div>
  );
}

export default SecondBlockPage;
