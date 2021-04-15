import React from "react";

function FormRequestCreditCardAndAccount() {
  return (
    <div className="w-full flex justify-end items-center">
      <div className="bg-white p-6 rounded-2xl max-w-xs">
        <div className="flex flex-col justify-between h-full">
          <h1 className="font-medium lg:text-2xl">
            Peça sua conta e cartão de crédito do Nubank
          </h1>
          <input
            type="text"
            placeholder="Digite seu CPF"
            className="border-b my-14 py-2"
          />
          <button className="w-100 border px-5 h-12 outline-none rounded-3xl flex justify-between items-center bg-transparent bg-gray-200">
            <span className="font-medium text-lg text-gray-400">Continuar</span>
            <span className="text-gray-400">x</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormRequestCreditCardAndAccount;
