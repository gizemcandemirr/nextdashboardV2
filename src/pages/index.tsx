import type { NextPage } from "next";
import Head from "next/head";

import Charts from "../components/charts/Charts";
import Table from "../components/table/Table";


const IndexPage: NextPage = (props:any) => {
 
  return (
    <div>
      <Head>
        <title className="text-primary-dark">Shop Admin</title>
        <meta name="description" content="shop admin" />
      </Head>

      <div className="mt-5">
         <Charts />
      </div>
      <div className="mt-5 p-15">
         <Table />
      </div>
    </div>
  );
};

export default IndexPage;
