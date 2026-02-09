import { useState } from 'react';

const skillCategories = [
  {
    id: "language",
    title: "Programming languages",
    defaultOpen: true,
    skills: [
      { name: "java", logo: "java.png" },
      { name: "python", logo: "python.png" },
      { name: "javascript", logo: "js.png" },
      { name: "cpp", logo: "cpp.png" },
      { name: "rust", logo: "rust.png" }
    ]
  },
  {
    id: "se",
    title: "Software engineering",
    defaultOpen: false,
    skills: [
      { name: "spring", logo: "spring.png" },
      { name: "jenkins", logo: "jenkins.png" },
      { name: "grafana", logo: "grafana.png" },
      { name: "sonarqube", logo: "sonarqube.png" },
      { name: "slack-bolt", logo: "slack-bolt.png" },
      { name: "docker", logo: "docker.png" },
      { name: "helm", logo: "helm.svg" },
      { name: "k8s", logo: "k8s.png" },
      { name: "nginx", logo: "nginx.png" },
      { name: "mysql", logo: "mysql.png" },
      { name: "postgre", logo: "postgre.png" },
      { name: "mongodb", logo: "mongodb.png" },
      { name: "firebase", logo: "firebase.png" },
      { name: "cloudinary", logo: "cloudinary.png" },
      { name: "react", logo: "react.png" },
      { name: "node", logo: "node.png" },
      { name: "tailwind", logo: "tailwind.png" },
      { name: "bootstrap", logo: "bootstrap.webp" },
      { name: "antd", logo: "antd.png" },
      { name: "leaflet", logo: "leaflet.png" },
      { name: "github", logo: "github.png" },
      { name: "github-action", logo: "github-action.png" },
      { name: "jira", logo: "jira.png" },
      { name: "postman", logo: "postman.png" },
      { name: "figma", logo: "figma.png" }
    ]
  },
  {
    id: "ds",
    title: "Distributed systems",
    defaultOpen: false,
    skills: [
      { name: "redis", logo: "redis.png" },
      { name: "elastic", logo: "es.png" },
      { name: "filebeat", logo: "filebeat.png" },
      { name: "kibana", logo: "kibana.png" },
      { name: "kafka", logo: "kafka.png" },
      { name: "zookeeper", logo: "zookeeper.png" },
      { name: "hadoop", logo: "hadoop.png" },
      { name: "airflow", logo: "airflow.png" },
      { name: "hive", logo: "hive.png" },
      { name: "spark", logo: "spark.png" }
    ]
  },
  {
    id: "ml",
    title: "Machine learning",
    defaultOpen: false,
    skills: [
      { name: "weka", logo: "weka.png" },
      { name: "knime", logo: "knime.png" },
      { name: "tableau", logo: "tableau.png" },
      { name: "bi", logo: "bi.png" },
      { name: "sklearn", logo: "sklearn.png" },
      { name: "torch", logo: "torch.png" },
      { name: "tensorflow", logo: "tensorflow.png" }
    ]
  }
];

const Skills = () => {
  const [openCategory, setOpenCategory] = useState("language");

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      <div className="section-heading" id="skills">
        <h3>Skills</h3>
      </div>
      <div className="section-content">
        <div className="accordion" id="accordionExample">
          {skillCategories.map((category) => (
            <div className="accordion-item" key={category.id}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openCategory !== category.id ? 'collapsed' : ''}`}
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={openCategory === category.id}
                >
                  {category.title}
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${openCategory === category.id ? 'show' : ''}`}
              >
                <div className="justify-content-center accordion-body row row-cols-lg-5 row-cols-3">
                  {category.skills.map((skill) => (
                    <div className="col skill-col" key={skill.name}>
                      <img
                        src={`${process.env.PUBLIC_URL}/img/logo/${skill.logo}`}
                        alt={skill.name}
                        className="skill-logo"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
