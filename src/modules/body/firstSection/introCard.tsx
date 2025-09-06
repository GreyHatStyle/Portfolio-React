import { TextGenerateEffect } from "@/components/ui/text-generate-effect"


function IntroCard() {

    const words = "Manas Bisht";

  return (
    <div id="intro-card"
        // Using mr-[1em] - while decreasing width, my name was overflowing out of screen
        // And mt-11 - to allign the text when phone is in landscape mode.
        className="
        bg-white/0 ml-[15dvw] mr-[1em] mt-11
        text-4xl text-white baloo-bhai-2
        "
        >
            
         <h1>Hi</h1>
         <h1 className="text-green-100 text-5xl lg:text-6xl transition-all">I am</h1>
         <TextGenerateEffect duration={1} words={words} />

    </div>
  )
}

export default IntroCard