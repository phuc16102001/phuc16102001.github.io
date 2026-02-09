const publicationsData = [
  {
    logo: "logo/ieee-wcci-2024.png",
    title: "Unifying Global and Local Scene Entities Modelling for Precise Action Spotting",
    titleUrl: "https://ieeexplore.ieee.org/document/10650009/",
    organization: "IEEE IJCNN 2024 | Yokohama Japan",
    organizationUrl: "https://2024.ieeewcci.org/",
    description: "Propose a method to improve current action spotting vision models by unifying global and local feature. The method not only help AI model improving the accuracy but also more explainable By applying the GLIP - a zero-shot learning model of Google, the method can apply on arbitrary sports."
  },
  {
    logo: "logo/medium.png",
    title: "Product recommendation for Huimitu ecommerce using Association Rule with KNIME",
    titleUrl: "https://medium.com/low-code-for-advanced-data-science/product-recommendation-for-huimitu-e-commerce-using-association-rule-with-knime-4c7e172707f1",
    organization: "Medium | Low code for data science",
    organizationUrl: "https://medium.com/low-code-for-advanced-data-science",
    description: "Story about how I built a recommendation system for an e-commerce (named Huimitu) system, using KNIME."
  }
];

const Publications = () => {
  return (
    <>
      <div className="section-heading" id="publications">
        <h3>Publications</h3>
      </div>
      <div className="section-content">
        {publicationsData.map((pub, index) => (
          <div className="certificate row" key={index}>
            <div className="col-3 col-lg-2">
              <img 
                className="certificate-logo" 
                src={`${process.env.PUBLIC_URL}/img/${pub.logo}`} 
                alt={pub.title} 
              />
            </div>
            <div className="col">
              <div>
                <a href={pub.titleUrl} target="_blank" rel="noopener noreferrer">
                  <b>{pub.title}</b>
                </a>
              </div>
              <div>
                <a href={pub.organizationUrl} target="_blank" rel="noopener noreferrer">
                  <small>{pub.organization}</small>
                </a>
              </div>
              <p>{pub.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Publications;
