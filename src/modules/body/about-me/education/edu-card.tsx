
interface EduCardProps{
    imageUrl: string,
    institutionName: string,
    course: string,
    grade: string,
    currentlyAttending?: boolean
}

function EduCard({
    imageUrl,
    institutionName,
    course,
    grade,
    currentlyAttending,
}: EduCardProps) {


  return (
    <div className="p-4 shadow-xl poppins-font flex flex-col gap-2 dark:bg-neutral-800 rounded-lg">
        <img src={imageUrl} alt="institution-image"
        className="object-cover object-top h-[8rem] w-full rounded-lg"
        />

        <h1
        className="text-2xl"
        >{institutionName}</h1>
        
        <p>{course} <b>{ currentlyAttending && "(Currently Attending)"}</b></p>
        
        
        <p
        className="font-bold"
        >{grade}</p>
    </div>
  )
}

export default EduCard