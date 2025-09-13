
import ExpandableCard from "@/components/expandable-card"
import { cn } from "@/lib/utils";

const cards = [
  {
    title: "IISC Banglore OpenHack 2025 Finalist",
    description: "HACKATHON",
    src: "./certificates/iisc-certificate.png",
    ctaText: "Show Credentials",
    ctaLink: "https://www.linkedin.com/feed/update/urn:li:activity:7301851255713210369/",
    content: () => {
      return (
        <p>Our team was among the <b> top 8 finalists </b> in OpenHack 2025, held at the Indian Institute of Science and Technology, Bangalore.e</p>
      );
    },
  },
  {
    title: "Web-designing and Multimedia Technology",
    description: "SWAYAM",
    src: "./certificates/nptel-web-certificate.jpg",
    ctaText: "Show Credentials",
    ctaLink: "https://onlinecourses.swayam2.ac.in/ntr25_ed64/certificate?q=7k2lfFnvoXnPjrF89RUD4nvSAMod5sO/yBumYkmSi62hzriZxDyZkpGjQxQ0E1UK",
    content: () => {
      return (
        <p>
          Successfully completed the Web Designing and Multimedia Technology Certification Exam on 18th May 2025, and achieved an overall <b>score of 92%</b>.
        </p>
      );
    },
  },

  {
    title: "Certificate of Presentation in ICSES 2024 Conference ",
    description: "IEEE",
    src: "./certificates/ieee-certificate.webp",
    ctaText: "Show Credentials",
    ctaLink: "https://ieeexplore.ieee.org/xpl/conhome/10762944/proceeding?sortType=vol-only-seq&isnumber=10762948&searchWithin=manas%20bisht",
    content: () => {
      return (
        <p>
          Participated in <b> 2024 4th International Conference on Sustainable Expert Systems (ICSES) </b> and successfully published the research paper Titanic Disaster Survival Rate 
          with my team, under the mentorship of &nbsp;
          <a className="text-blue-300" target="_blank" 
          href="https://gehu.ac.in/dehradun/computer-science-and-engineering/faculty/dr-amit-gupta/"> 
          
            Dr. Amit Gupta 
          </a> sir.

        </p>
      );
    },
  },
  {
    title: "Introduction to Machine Learning",
    description: "NPTEL",
    src: "./certificates/nptel-ml.jpg",
    ctaText: "Show Credentials",
    ctaLink: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS81S33380011002697172",
    content: () => {
      return (
        <p>
         Gave Introduction to Machine Learning certification Proctored exam, and received <b>Elite Certificate</b> with <b>71% score</b> overall.
        </p>
      );
    },
  },
  {
    title: "Deploy Django web app with Apache and Amazon EC2",
    description: " UDEMY ",
    src: "./certificates/django-udemy.jpg",
    ctaText: "Show Credentials",
    ctaLink: "https://www.udemy.com/certificate/UC-4e63eb7c-b8c4-4c3e-a794-1d8eceac8752/",
    content: () => {
      return (
        <p>
          I successfully completed the course Deploy a Django web app with Apache, Amazon EC2 and CI/CD on 09/09/2025 as taught by Arno Pretorius on Udemy, from where <b>I have learned and deployed my Django and FastApi project's backend</b>.
        </p>
      );
    },
  },
  {
    title: "NLP - Natural Language Processing with Python",
    description: "UDEMY",
    src: "./certificates/nlp-certificate.jpg",
    ctaText: "Show Credentials",
    ctaLink: "https://www.udemy.com/certificate/UC-13e78927-cdeb-4766-a1da-ec1cb5ddc93c/",
    content: () => {
      return (
        <p>
          I successfully completed the course NLP - Natural Language Processing with Python on 08/24/2024 as taught by Jose Portilla, Pierian Training on Udemy, whose concepts<b>I used for building SMS SPAM detection prediction model</b> in my project.
        </p>
      );
    },
  },
  {
    title: "Platinum Certificate of Typing - 76 wpm",
    description: "RATATYPE",
    src: "./certificates/typing-plat.webp",
    ctaText: "Show Credentials",
    ctaLink: "https://www.ratatype.com/u5248149/certificate/en/",
    content: () => {
      return (
        <p>
          I successfully typed for 2 mins straight in <b>76 wpm</b> typing speed with <b>100%</b> accuracy.
        </p>
      );
    },
  },
  {
    title: "More Coming Soon...",
    description: "",
    src: "https://media.istockphoto.com/id/1221240925/vector/coming-soon-lettering-coming-soon-for-promotion-advertisement-sale-marketing.jpg?s=612x612&w=0&k=20&c=RZPMOqmoyOwEEQfjnWm8_j-G1Ht2TBRxshHNR0nn96o=",
    ctaText: "",
    ctaLink: "",
    content: () => {
      return (
        <p className="hidden">
          
        </p>
      );
    },
  },
];

type CertificateProps = {
  className?: string
}


function Certificates({
  className,
}: CertificateProps) {
  return (
    <div id="certificate-section"
    className={cn("p-6", className)}
    >

      <div className="flex flex-col gap-2 mb-4">
            <h1 className="text-4xl baloo-bhai-2">My Certificates</h1>
            <p></p>

      </div>
      

      <div className="bg-white dark:bg-black h-[380px] overflow-y-scroll custom-scrollbar">
        <ExpandableCard 
        cards={cards}
        />

      </div>

    </div>
  )
}

export default Certificates