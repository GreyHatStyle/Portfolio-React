import { useState, type ComponentProps } from "react"
import "./about-me-global.css"
import Skills from "./skills"
import Education from "./education"

interface AboutMeProps extends ComponentProps<"section">{
  ref: React.Ref<HTMLElement>
}

type AboutSectionTypes = "skills" | "education" | "certificates" | "publishes"

function AboutMe({
    ref,
}: AboutMeProps) {

    const [currentSection, setCurSection] = useState<AboutSectionTypes>("skills");
    const buttonCn = "bg-blue-400 px-4 py-2 text-white text-2xl poppins-font hover:cursor-pointer rounded-md";
  
    return (
    <section id="AboutMe"
    ref={ref}
     className='w-[100dvw] px-[10dvw]'>
        
    <h1
    className="pt-[5rem] text-5xl sm:text-6xl baloo-bhai-2"
    >ABOUT ME</h1>



      <div id="about-me-box"
      className="about-me-box-styles mt-11"
      >


        <div id="about-me-buttons"
        className="bg-blue-50 flex flex-col gap-3 p-5 rounded-lg baloo-bhai-2"
        >
          <h1 className="text-3xl">
            Navigation Section
          </h1>
          <h1 className="mb-2">
            Kindly click below buttons to know more..
          </h1>

          <button className={buttonCn}
          onClick={() => setCurSection("skills")}
          >
            Skills
          </button>

          <button className={buttonCn}
          onClick={() => setCurSection("education")}
          >
            Education
          </button>

          <button className={buttonCn}
          onClick={() => setCurSection("certificates")}
          >
            Certificates
          </button>

          <button className={buttonCn}
          onClick={() => setCurSection("publishes")}
          >
            Publishes
          </button>

        </div>


        <div id="about-content"
        className="bg-blue-50 overflow-y-hidden"
        >

          {
            currentSection === "skills"
              ?
            <Skills/>
              :
            <Education />
            
          }


        </div>


      </div>



        
    </section>
  )
}

export default AboutMe