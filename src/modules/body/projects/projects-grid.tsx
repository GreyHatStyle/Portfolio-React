import ProjectCard, { type ProjectCardProps } from "./project-card"
import Tags from "./tags"

const projectData: ProjectCardProps[] = [
  {
    title: "Zomiggy Full Stack Web App",
    imageUrl: "/project-images/zomiggy.png",
    githubUrl: "https://github.com/GreyHatStyle/Food-Delivery-frontend",
    liveUrl: "https://food-delivery-frontend-lake.vercel.app/",
    tagsList: ["ReactJS", "TypeScript", "ShadCN", "Django REST Framework", "PostgreSQL", "MongoDB"],
  },
  {
    title: "SMS Spam Detection",
    imageUrl: "/project-images/spam-ham.png",
    githubUrl: "https://github.com/GreyHatStyle/Spam-SMS-detection",
    liveUrl: "https://spam-sms-detection-virid.vercel.app",
    tagsList: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "Tensorflow"],
  },
  {
    title: "Furniture Website",
    imageUrl: "/project-images/furniture-website.png",
    githubUrl: "https://github.com/GreyHatStyle/Furniture-Website",
    liveUrl: "https://furniture-website-nu-rosy.vercel.app/",
    tagsList: ["ReactJS", "Tailwind"],
  },
]

function ProjectsGrid() {
  return (
    <div className="mt-11 project-grid">
      {projectData.map((project, index) => (

        <ProjectCard 
          key={index}
          title={project.title}
          imageUrl={project.imageUrl}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
        >
          {project.tagsList?.map((tag, tagIndex) => (
            <Tags key={tagIndex} content={tag} />
          ))}
          
        </ProjectCard>
      ))}
    </div>
  )
}

export default ProjectsGrid