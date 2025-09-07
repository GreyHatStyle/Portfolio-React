import ProjectCard from "./project-card"
import Tags from "./tags"

function ProjectsGrid() {
  return (
    <div className="mt-11 project-grid">

        <ProjectCard 
        title="SMS Spam Detection"
        imageUrl="/project-images/spam-ham.png"
        githubUrl="https://github.com/GreyHatStyle/Spam-SMS-detection"
        liveUrl="https://spam-sms-detection-virid.vercel.app"
        >
          <Tags content="ReactJS" />
          <Tags content="TypeScript" />
          <Tags content="Tailwind" />
          <Tags content="FastAPI" />
          <Tags content="Tensorflow" />
        </ProjectCard>


        <ProjectCard 
        title="Furniture Website"
        imageUrl="/project-images/furniture-website.png"
        githubUrl="https://github.com/GreyHatStyle/Furniture-Website"
        liveUrl="https://furniture-website-nu-rosy.vercel.app/"
        >
          <Tags content="ReactJS" />
          <Tags content="Tailwind" />
        </ProjectCard>


    </div>
  )
}

export default ProjectsGrid