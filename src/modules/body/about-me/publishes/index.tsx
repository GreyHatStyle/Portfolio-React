import { cn } from "@/lib/utils"
import type { RpDataType } from "./rp-card"
import RpCards from "./rp-card"


const data: RpDataType[] = [
  {
    title: "Analysis of Tree-based Ensemble Machine Learning Algorithms for Determining Covid-19 Survival Rate",
    conference: "2024 First International Conference on Technological Innovations and Advance Computing (TIACOMP)",
    publisher: "IEEE",
    conferenceDate: "29-30 June 2024",
    ieeeUrl: "https://ieeexplore.ieee.org/abstract/document/10742689",
  },
  {
    title: "Studying Dengue spread using Climatic conditions and Machine learning Algorithms",
    conference: "2024 First International Conference on Technological Innovations and Advance Computing (TIACOMP)",
    publisher: "IEEE",
    conferenceDate: "29-30 June 2024",
    ieeeUrl: "https://ieeexplore.ieee.org/abstract/document/10742669",
  },
  {
    title: "Analysis of Machine Learning Algorithms for Predicting Titanic Disaster Survival Rate",
    conference: "2024 4th International Conference on Sustainable Expert Systems (ICSES)",
    publisher: "IEEE",
    conferenceDate: "15-17 October 2024",
    ieeeUrl: "https://ieeexplore.ieee.org/abstract/document/10763371",
  },

]

type PublishesProps = {
  className?: string
}


function Publishes({
  className,
}: PublishesProps) {
  return (
    <div>
      <div id="publishes-section"
      className={cn("p-6", className)}
      >
          <div className="flex flex-col gap-2 mb-4">
              <h1 className="text-4xl baloo-bhai-2">My Publishes</h1>
              <p>Following below are my published <b>Research Papers</b></p>


          </div>

          <div id="publish-content"
          className="overflow-y-scroll h-[360px] custom-scrollbar"
          >

              <RpCards data={data} />

          </div>
              

      </div>
    </div>
  )
}

export default Publishes