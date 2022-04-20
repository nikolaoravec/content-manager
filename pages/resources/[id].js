import Layout from "components/Layout";
import { useRouter } from "next/router";

const ResourceDetail = ({ resources, date, title, desc }) => {
  const router = useRouter();

  // if (router.isFallback) {
  //   return <div>Loading Data!</div>;
  // }
  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resources.createdAt}</h2>
                    <h1 className="title">{resources.title}</h1>
                    <p>{resources.description}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// export async function getServerSideProps({ params }) {
//   const dataRes = await fetch(
//     `http://localhost:3001/api/resources/${params.id}`
//   );
//   const data = await dataRes.json();
//   return {
//     props: {
//       resources: data,
//     },
//   };
// }

export async function getStaticPaths() {
  const dataRes = await fetch(`http://localhost:3001/api/resources`);
  const data = await dataRes.json();
  const paths = data.map((resource) => {
    return {
      params: { id: resource.id },
    };
  });
  return {
    paths,
    fallback: false,
    // fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const dataRes = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  );
  const data = await dataRes.json();
  return {
    props: {
      resources: data,
    },
    revalidate: 1,
  };
}

export default ResourceDetail;
