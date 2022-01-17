import Head from "next/head";
import Image from "next/image";
import Featured from "../components/featured";
import PizzaList from "../views/home/components/pizzaList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </>
  );
}
