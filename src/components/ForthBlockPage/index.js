import React from "react";

import FormRequestCreditCardAndAccount from "../FormRequestCreditCardAndAccount";

function ThirdBlockPage() {
  return (
    <div className="sm:flex sm:flex-col sm:w-full lg:flex lg:flex-row lg:justify-between lg:items-center p-72 h-screen bg-secondary">
      <div className="lg:w-2/6">
        <span className="text-rewardsTitleColor lg:text-5xl font-medium">
          <a href="#">Rewards</a>
        </span>
        <h1 className="font-medium text-white lg:text-5xl leading-tight mt-2 mb-6">
          Um programa de pontos justo e fácil de usar
        </h1>
        <a href="#" className="text-white font-medium text-lg">
          Saiba mais
        </a>
      </div>
      <div className="lg:w-3/6 flex justify-center">
        <img
          className="lg:w-8/12"
          src="https://nubank.com.br/_next/static/images/b0b781c163dae4ea5281173ea33043f8-rewards-home-card@3x.png.webp"
        />
      </div>
    </div>
  );
}

export default ThirdBlockPage;
