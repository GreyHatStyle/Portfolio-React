import { Button } from "@/components/ui/button";

export type RpDataType = {
    title: string,
    conference: string,
    publisher: "IEEE",
    conferenceDate: string,
    ieeeUrl: string,
}

type RpCardProps = {
    data: RpDataType[]
}

function RpCards({
    data,
}: RpCardProps) {


  return (
    <div className="flex flex-col gap-5 p-7 dark:bg-black">
        {
            data.map((card, index) =>(
                <div key={index}
                className={`bg-neutral-100  border-2 rounded-md dark:bg-neutral-800 dark:border-none`}
                >
                    <h1
                    className="text-sm lg:text-lg xl:text-xl font-bold bg-neutral-300 dark:bg-neutral-900 px-4 py-2 mt-4"
                    >{card.title}</h1>

                    <div className="text-sm p-4 flex flex-col gap-1">
                        <p><b>Published in: </b> {card.conference}</p>
                        <p><b>Publisher: </b> {card.publisher}</p>
                        <p><b>Conference Date: </b> {card.conferenceDate}</p>

                        <Button className="self-start mt-2"
                        onClick={ () => window.open(card.ieeeUrl, "_blank")}
                        > IEEE Xplore</Button>

                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default RpCards