import React from "react";

import FormRequestCreditCardAndAccount from "../FormRequestCreditCardAndAccount";

function ThirdBlockPage() {
  return (
    <div className="sm:flex sm:flex-col sm:w-full lg:flex lg:flex-row lg:justify-between lg:items-center h-screen bg-white">
      <div className="lg:w-2/6 p-20 ml-auto">
        <span className="text-primary lg:text-5xl font-medium">
          <a href="#">Cartão de Crédito</a>
        </span>
        <h1 className="font-medium text-black lg:text-5xl leading-tight mt-2 mb-6">
          Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno,
          gratuito e prático também.
        </h1>
        <a href="#" className="text-primary font-medium text-lg">
          Saiba mais
        </a>
      </div>
      <div className="lg:w-3/6 lg:h-3/4 flex justify-center self-end">
        <img
          className="lg:w-12/12 lg:h-full"
          src="https://nubank.com.br/_next/static/images/82fb8a48a1c48e1af52bea8bf8e799b9-holding-card-vertical@3x.png.webp"
        />
      </div>
    </div>
  );
}

export default ThirdBlockPage;
