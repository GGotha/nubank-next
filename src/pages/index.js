import Head from "next/head";
import Navbar from "../components/Navbar";
import FirstBlockPage from "../components/FirstBlockPage";
import SecondBlockPage from "../components/SecondBlockPage";
import ThirdBlockPage from "../components/ThirdBlockPage";
import ForthBlockPage from "../components/ForthBlockPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nubank - Finalmente você no controle do seu dinheiro</title>
        <link rel="icon" href="/nubank-icon.png" />
      </Head>
      <Navbar />
      <FirstBlockPage />
      <SecondBlockPage />
      <ThirdBlockPage />
      <ForthBlockPage />
    </div>
  );
}
