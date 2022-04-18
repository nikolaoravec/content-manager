import React from "react";
import Newsletter from "components/Newsletter";
import ResourceHighlight from "components/ResourceHighlight";
import ResourceList from "components/ResourceList";
import Layout from "components/Layout";

export default function Home({ resources }) {
  return (
    <Layout>
      <ResourceHighlight resources={resources} />
      <Newsletter />
      <ResourceList resources={resources} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3001/api/resources");
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}

// export async function getStaticProps() {
//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json();

//   return {
//     props: {
//       resources: data,
//     },
//   };
// }
