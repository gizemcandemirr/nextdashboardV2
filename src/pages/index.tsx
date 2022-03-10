import type { NextPage } from "next";
import Head from "next/head";

import Charts from "../components/charts/Charts";


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
      
    </div>
  );
};

export default IndexPage;
