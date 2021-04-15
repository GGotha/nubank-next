import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="fixed">
      <div className="h-14 flex justify-between items-center fixed w-full bg-white">
        <div className="p-8">
          <ul className="flex justify-center items-center">
            <li>
              <a href="#">
                <img
                  className="lg:w-12"
                  src="https://direitosbrasil.com/wp-content/uploads/2017/02/nubank-2006466_960_720.png"
                  alt="Nubank Logo"
                />
              </a>
            </li>
            <li>
              <a
                className="pl-7 pr-4 lg:text-lg text-primary font-medium"
                href="#"
              >
                Início
              </a>
            </li>
            <li>
              <a
                className="px-3 text-navbarListColor font-medium text-lg"
                href="#"
              >
                Conta digital
              </a>
            </li>
            <li>
              <a
                className="px-3 text-navbarListColor font-medium text-lg"
                href="#"
              >
                Cartão de crédito
              </a>
            </li>
            <li>
              <a
                className="px-3 text-navbarListColor font-medium text-lg"
                href="#"
              >
                Pix
              </a>
            </li>
            <li>
              <a
                className="px-3 text-navbarListColor font-medium text-lg"
                href="#"
              >
                Empréstimo
              </a>
            </li>
            <li>
              <a
                className="px-3 text-navbarListColor font-medium text-lg"
                href="#"
              >
                Conta PJ
              </a>
            </li>
            <li>
              <a
                className="px-3 text-navbarListColor font-medium text-lg"
                href="#"
              >
                Rewards
              </a>
            </li>
            <li>
              <a
                className="px-3 text-navbarListColor font-medium text-lg"
                href="#"
              >
                Seguros
              </a>
            </li>
            <li>
              <a
                className="px-3 text-navbarListColor font-medium text-lg"
                href="#"
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                className="px-3 text-navbarListColor font-medium text-lg"
                href="#"
              >
                Carreiras
              </a>
            </li>
          </ul>
        </div>
        <div className="p-12">
          <div>
            <a href="#" className="lg:text-lg text-primary font-medium">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
