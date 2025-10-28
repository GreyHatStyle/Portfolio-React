import type { ReactElement } from "react"
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"

type ContactCardsType = {
    title: string,
    value: string,
    child: ReactElement,
    iconColor: string,
    url: string,
}

const data: ContactCardsType[] = [
    {
        title: "Linkedin",
        value: "Manas Bisht",
        child: (
            <FaLinkedin  />
        ),
        iconColor: "text-blue-500",
        url: "https://www.linkedin.com/in/manasbisht/"
    },
    {
        title: "Github",
        value: "GreyHatStyle",
        child: (
            <FaGithub  />
        ),
        iconColor: "text-black dark:text-white",
        url: "https://github.com/GreyHatStyle/"
    },
    {
        title: "Youtube",
        value: "ManasBishtProgrammer",
        child: (
            <FaYoutube  />
        ),
        iconColor: "text-red-500",
        url: "https://www.youtube.com/@ManasBishtProgrammer"
    },
]

function OtherInfo() {
  return (
    <div className="flex-1 space-y-3 min-w-[300px] w-full sm:px-[6rem] lg:px-0 2xl:px-[3rem]">
        
        <h1
        className="text-xl sm:text-2xl lg:text-3xl poppins-font text-center dark:text-blue-400"
        >Check Out My Socials</h1>

        {
            data.map(( card, index: number) => (

                <button
                key={index.toString()}
                onClick={() => window.open(card.url, "_blank")}
                className="flex flex-row w-full gap-2 items-center hover:bg-neutral-100 p-2 hover:cursor-pointer
                dark:hover:bg-neutral-800 hover:scale-105 transition-all duration-500
                rounded-md border-2 baloo-bhai-2 
                ">
                    <div className={`size-[52px ${card.iconColor} flex items-center`}>
                        <div className="text-[50px]"> {card.child} </div>
                    </div>
                    <div className="text-start">
                        <h1><b>{card.title}</b></h1>
                        <p>{card.value}</p>
                    </div>
                </button>
            ))
        }

    </div>
  )
}

export default OtherInfo