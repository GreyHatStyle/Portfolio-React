import { SiMongodb, SiMysql, SiPostgresql } from "react-icons/si"
import SkillsCard, { type SkillsCardProps } from "./skills-card"

const dataDbSkills: SkillsCardProps[] = [
  {
    hoverText: "MySQL",
    children: <SiMysql size={40} />
  },
  {
    hoverText: "PostgreSQL",
    children: <SiPostgresql size={40} />
  },
  {
    hoverText: "MongoDB",
    children: <SiMongodb size={40} />
  },
];

function DbSkills() {
  return (
    <>
   

      {
        dataDbSkills.map((card, index) => (
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

export default DbSkills