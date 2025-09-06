// This hook will identify in which page are we, using window scrollY function

import { useState } from "react"
import { useScrollPos } from "./useScrollPos"


export type Pages = "Home" | "Projects" | "AboutMe" | "ContactMe"

type PageDataType = {
    [key in Pages]: number
}

type UsePagePosHookReturn = {
    pageScrollData: PageDataType,
    pageName: Pages
}


type HeightAndPosType = {
    devHeight: number
    scrollPos: number
}


/**
 * 
 *  - The `page` argument will be used to find the correct scrollY values of the particular page, to directly travel there by pressing buttons.
 *  - Returns:
 *      1. `pageName`: Name of page you currently in.
 *      2. `pageScrollData`: Contains scrollY position of required all pages.
 */
export function usePagePosition(): UsePagePosHookReturn{

    const {scrollPos} = useScrollPos();
    
    const pages: Array<Pages> = ["Home", "Projects", "AboutMe", "ContactMe"];
    const height = window.innerHeight;

    const pageName = pages[Math.floor(scrollPos / height)];

    const pageScrollData = {} as PageDataType
    for(let i = 0; i<pages.length; i++){
        pageScrollData[pages[i]] = height * i + 1;
    }

    // explicity doing this because of (+1) in logic
    pageScrollData["Home"] = 0;

    // console.log("Page name: ", pageName);
    // console.log("Page math: ", scrollPos / height)
    // console.log("Scroll pos: ", scrollPos);
    
    return {pageName, pageScrollData}
}