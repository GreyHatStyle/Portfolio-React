
import { Timeline } from "@/components/ui/timeline";
import EduCard from "./edu-card";

export function EducationTimeline() {
  const data = [
    {
      title: "Sept, 2025",
      content: (
        <EduCard 
        imageUrl="./education/gehu.webp" 
        institutionName="Graphic Era Hill University, Dehradun"
        course="B. Tech CSE"
        grade="GPA: 8.15"
        currentlyAttending={true}
        />
    ),
},
    {
        title: "2022",
        content: (
        <EduCard 
        imageUrl="./education/sps-bhopal.png" 
        institutionName="Sagar Public School, Bhopal"
        course="Intermediate (12th, C.B.S.E.)"
        grade="Marks(%): 74%"
        />
      ),
    },
    {
      title: "2020",
      content: (
        <EduCard 
        imageUrl="./education/sps-bhopal.png"
        institutionName="Sagar Public School, Bhopal"
        course="High School (10th, C.B.S.E.)"
        grade="Marks(%): 85%"
        />  
      ),
    },
  ];
  return (
    <div className="relative overflow-y-scroll custom-scrollbar h-full max-h-[400px] w-full">
      <Timeline data={data} />
    </div>
  );
}

