import { SiMysql, SiPostgresql } from "react-icons/si"
import SkillsCard from "./skills-card"


function DbSkills() {
  return (
    <>
    <SkillsCard hoverText="MySQL">
        <SiMysql size={40} />
      </SkillsCard>

      <SkillsCard hoverText="PostgreSQL">
        <SiPostgresql size={40} />
      </SkillsCard>

    </>
  )
}

export default DbSkills