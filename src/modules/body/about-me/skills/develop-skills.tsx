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
    SiRedis
} from "react-icons/si"
import SkillsCard from "./skills-card"

function DevelopmentSkills() {
  return (
    <>
        <SkillsCard hoverText="Python">
                <SiPython size={40}/>
            </SkillsCard>

            <SkillsCard hoverText="Django">
                <SiDjango size={40}/>
            </SkillsCard>

            <SkillsCard hoverText="React JS">
                <SiReact size={40}/>
            </SkillsCard>

            <SkillsCard hoverText="Typescript">
                <SiTypescript size={40}/>
            </SkillsCard>
            
            <SkillsCard hoverText="TailwindCSS">
                <SiTailwindcss size={40}/>
            </SkillsCard>
            
            <SkillsCard hoverText="FastApi">
                <SiFastapi size={40}/>
            </SkillsCard>
            
            <SkillsCard hoverText="HTML5">
                <SiHtml5 size={40}/>
            </SkillsCard>
            
            <SkillsCard hoverText="CSS">
                <SiCss3 size={40}/>
            </SkillsCard>
            
            <SkillsCard hoverText="Javascript">
                <SiJavascript size={40}/>
            </SkillsCard>
            
            <SkillsCard hoverText="Redis">
                <SiRedis size={40}/>
            </SkillsCard>
    
    </>
  )
}

export default DevelopmentSkills