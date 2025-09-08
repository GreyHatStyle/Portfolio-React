import { SiKeras, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow } from "react-icons/si"
import SkillsCard from "./skills-card"

function MlSkills() {
  return (
    <>

      <SkillsCard hoverText="Pandas">
        <SiPandas size={40} />
      </SkillsCard>

      <SkillsCard hoverText="Numpy">
        <SiNumpy size={40} />
      </SkillsCard>
      
      <SkillsCard hoverText="Scikit-Learn">
        <SiScikitlearn size={40} />
      </SkillsCard>

      <SkillsCard hoverText="Tensorflow">
        <SiTensorflow size={40} />
      </SkillsCard>

      <SkillsCard hoverText="Kearas">
        <SiKeras size={40} />
      </SkillsCard>

    </>
  )
}

export default MlSkills