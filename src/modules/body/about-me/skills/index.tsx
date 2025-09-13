import { useState } from "react"
import "./../about-me-global.css"
import DevelopmentSkills from "./develop-skills"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import DbSkills from "./db-skills"
import MlSkills from "./ml-skills"
import { cn } from "@/lib/utils"


type SelectOptionsType = "dev" | "ml" | "db"

type SkillsProps = {
  className?: string
}

function Skills({
  className,
}: SkillsProps) {
    const [selectOptionState, setSelectOptionState] = useState<SelectOptionsType>("dev");
    // console.log("Selected option: ", selectOptionState);


  return (
    <div id="skills-section"
    className={cn("p-6", className)}
    >
        <div className="flex flex-col gap-2 mb-4">
            <h1 className="text-4xl baloo-bhai-2 dark:text-blue-400">My Skills</h1>
            <p>Following below are my Technical Skills</p>

            <Select 
            value={selectOptionState}
            onValueChange={(value) => setSelectOptionState(value as SelectOptionsType)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Development" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Skill Set</SelectLabel>
                    <SelectItem value="dev">Development</SelectItem>
                    <SelectItem value="ml">Machine Learning</SelectItem>
                    <SelectItem value="db">Database</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

        </div>

        <div id="skills-content"
        className=" skills-grid overflow-y-scroll h-[320px] custom-scrollbar"
        >

            {
            selectOptionState === "dev"
              ? 
            <DevelopmentSkills />  
              :
                selectOptionState ==="db"
                  ?
                <DbSkills/>
                  :
                <MlSkills/>
            }

        </div>
            

    </div>
  )
}

export default Skills