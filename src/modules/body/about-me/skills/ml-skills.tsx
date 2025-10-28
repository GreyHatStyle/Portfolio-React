import { SiKeras, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow } from "react-icons/si"
import SkillsCard, { type SkillsCardProps } from "./skills-card"

const dataMlSkills: SkillsCardProps[] = [
  {
    hoverText: "Pandas",
    children: <SiPandas size={40} />
  },
  {
    hoverText: "Numpy",
    children: <SiNumpy size={40} />
  },
  {
    hoverText: "Scikit-Learn",
    children: <SiScikitlearn size={40} />
  },
  {
    hoverText: "Tensorflow",
    children: <SiTensorflow size={40} />
  },
  {
    hoverText: "Keras",
    children: <SiKeras size={40} />
  },
] 

function MlSkills() {
  return (
    <>

      {
        dataMlSkills.map( (card, index) => (
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

export default MlSkills