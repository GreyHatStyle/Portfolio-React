
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

  const shadow_class_from_ui = "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";



  return (
    <div className={`p-4 mx-2 poppins-font flex flex-col gap-2 dark:bg-neutral-800 rounded-lg ${shadow_class_from_ui}`}>
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