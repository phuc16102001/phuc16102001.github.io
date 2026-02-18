import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const skillCategories = [
  {
    id: "language",
    title: "Programming languages",
    defaultOpen: true,
    cols: 3,
    skills: [
      { name: "java", logo: "java.png" },
      { name: "python", logo: "python.png" },
      { name: "javascript", logo: "js.png" },
      { name: "csharp", logo: "csharp.png" },
      { name: "cpp", logo: "cpp.png" },
      { name: "rust", logo: "rust.png" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Frameworks",
    defaultOpen: false,
    cols: 5,
    skills: [
      { name: "spring", logo: "spring.png" },
      { name: "dotnet", logo: "dotnet.png" },
      { name: "fastapi", logo: "fastapi.png" },
      { name: "node", logo: "node.png" },
      { name: "nginx", logo: "nginx.png" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    defaultOpen: false,
    cols: 5,
    skills: [
      { name: "react", logo: "react.png" },
      { name: "tailwind", logo: "tailwind.png" },
      { name: "bootstrap", logo: "bootstrap.webp" },
      { name: "antd", logo: "antd.png" },
      { name: "leaflet", logo: "leaflet.png" }
    ]
  },
  {
    id: "database",
    title: "Databases & Storage",
    defaultOpen: false,
    cols: 5,
    skills: [
      { name: "mysql", logo: "mysql.png" },
      { name: "postgre", logo: "postgre.png" },
      { name: "mongodb", logo: "mongodb.png" },
      { name: "firebase", logo: "firebase.png" },
      { name: "cloudinary", logo: "cloudinary.png" }
    ]
  },
  {
    id: "devops",
    title: "DevOps & CI/CD",
    defaultOpen: false,
    cols: 4,
    skills: [
      { name: "docker", logo: "docker.png" },
      { name: "helm", logo: "helm.svg" },
      { name: "k8s", logo: "k8s.png" },
      { name: "jenkins", logo: "jenkins.png" },
      { name: "github-action", logo: "github-action.png" },
      { name: "grafana", logo: "grafana.png" },
      { name: "sonarqube", logo: "sonarqube.png" }
    ]
  },
  {
    id: "cloud",
    title: "Cloud",
    defaultOpen: false,
    cols: 3,
    skills: [
      { name: "azure", logo: "azure.png" },
      { name: "aws", logo: "aws.png" },
      { name: "naver-cloud", logo: "naver-cloud.jpg" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Collaboration",
    defaultOpen: false,
    cols: 5,
    skills: [
      { name: "github", logo: "github.png" },
      { name: "jira", logo: "jira.png" },
      { name: "postman", logo: "postman.png" },
      { name: "figma", logo: "figma.png" },
      { name: "slack-bolt", logo: "slack-bolt.png" }
    ]
  },
  {
    id: "ds",
    title: "Distributed systems",
    defaultOpen: false,
    cols: 5,
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
    cols: 4,
    skills: [
      { name: "weka", logo: "weka.png" },
      { name: "knime", logo: "knime.png" },
      { name: "tableau", logo: "tableau.png" },
      { name: "bi", logo: "bi.png" },
      { name: "sklearn", logo: "sklearn.png" },
      { name: "torch", logo: "torch.png" },
      { name: "tensorflow", logo: "tensorflow.png" },
      { name: "openai", logo: "openai.png" }
    ]
  }
];

const Skills = () => {
  const { t } = useTranslation();
  const [openCategory, setOpenCategory] = useState("language");

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      <div className="section-heading" id="skills">
        <h3>{t('skills.title')}</h3>
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
                  {t(`skills.${category.id}`)}
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${openCategory === category.id ? 'show' : ''}`}
              >
                <div className={`justify-content-center accordion-body row row-cols-lg-${category.cols || 5} row-cols-3`}>
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
