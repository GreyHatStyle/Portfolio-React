import { useState, type ComponentProps } from "react"
import "./about-me-global.css"
import Skills from "./skills"
import Education from "./education"
import { cn } from "@/lib/utils"

interface AboutMeProps extends ComponentProps<"section">{
  ref: React.Ref<HTMLElement>
}

type AboutSectionTypes = "skills" | "education" | "certificates" | "publishes"

function AboutMe({
    ref,
}: AboutMeProps) {

    const [currentSection, setCurSection] = useState<AboutSectionTypes>("skills");
    const buttonCn = "bg-blue-400 px-4 py-2 text-white text-2xl poppins-font hover:cursor-pointer rounded-md hover:bg-blue-300 dark:bg-neutral-800 dark:hover:bg-neutral-700";
  
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
        className="bg-blue-50 flex flex-col gap-3 p-5 rounded-lg baloo-bhai-2
        dark:bg-neutral-900 shadow-sm 
        "
        >
          <h1 className="text-3xl">
            I am
          </h1>
          <h1 className="mb-2">
            A Fourth Year Student of B. Tech CSE, who likes to learn, explore and create new things every day!!
          </h1>

          <button className={cn(buttonCn, currentSection==="skills" ? "bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-500 dark:text-black" : "")}
          onClick={() => setCurSection("skills")}
          >
            Skills
          </button>

          <button className={cn(buttonCn, currentSection==="education" ? "bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-500 dark:text-black" : "")}
          onClick={() => setCurSection("education")}
          >
            Education
          </button>

          <button className={cn(buttonCn, currentSection==="certificates" ? "bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-500 dark:text-black" : "")}
          onClick={() => setCurSection("certificates")}
          >
            Certificates
          </button>

          <button className={cn(buttonCn, currentSection==="publishes" ? "bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-500 dark:text-black" : "")}
          onClick={() => setCurSection("publishes")}
          >
            Publishes
          </button>

        </div>


        <div id="about-content"
        className="bg-blue-50 overflow-y-hidden
        dark:bg-neutral-900 rounded-md shadow-sm 
        "
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