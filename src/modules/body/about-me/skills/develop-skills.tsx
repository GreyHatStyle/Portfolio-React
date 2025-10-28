import { 
    SiDjango, 
    SiFastapi, 
    SiPython, 
    SiReact, 
    SiTypescript, 
    SiTailwindcss, 
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiRedis,
    SiShadcnui,
} from "react-icons/si"
import SkillsCard, { type SkillsCardProps } from "./skills-card"

const dataDevelopSkills: SkillsCardProps[] = [
  {
    hoverText: "Python",
    children: <SiPython size={40} />
  },
  {
    hoverText: "Django",
    children: <SiDjango size={40} />
  },
  {
    hoverText: "React JS",
    children: <SiReact size={40} />
  },
  {
    hoverText: "Typescript",
    children: <SiTypescript size={40} />
  },
  {
    hoverText: "TailwindCSS",
    children: <SiTailwindcss size={40} />
  },
  {
    hoverText: "ShadCn",
    children: <SiShadcnui size={40} />
  },
  {
    hoverText: "FastApi",
    children: <SiFastapi size={40} />
  },
  {
    hoverText: "HTML5",
    children: <SiHtml5 size={40} />
  },
  {
    hoverText: "CSS",
    children: <SiCss3 size={40} />
  },
  {
    hoverText: "Javascript",
    children: <SiJavascript size={40} />
  },
  {
    hoverText: "Redis",
    children: <SiRedis size={40} />
  },
];

function DevelopmentSkills() {
  return (
    <>
      {
        dataDevelopSkills.map((card, index) => (
          <SkillsCard 
            key={index}
            hoverText={card.hoverText}>
            {card.children}
          </SkillsCard>
        ))
      }
      
    </>
  )
}

export default DevelopmentSkills