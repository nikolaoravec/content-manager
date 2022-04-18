import Link from "next/link";
// import Link from "/next/link";

const ResourceHighlight = ({ resources }) => {
  return (
    <div>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            {resources.map((resource) => (
              <section key={resource.id} className="section">
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <div className="content is-medium">
                      <h2 className="subtitle is-4">
                        {resource.createdAt} minutes
                      </h2>
                      <h1 className="title">{resource.title}</h1>
                      <p>{resource.description}</p>
                      <Link href={`/resources/${resource.id}`}>
                        <a
                          className="button is-link"
                          href={`/resources/${resource.id}`}
                        >
                          Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceHighlight;
