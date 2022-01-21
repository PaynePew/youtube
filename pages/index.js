import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/featured";
import PizzaList from "../views/home/components/pizzaList";
import { useState } from "react";
import { AddButton } from "../components/add/addButton";
import Add from "../components/add";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {/* <AddButton setClose={setClose} /> */}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
