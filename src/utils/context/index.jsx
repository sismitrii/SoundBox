/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/
import { createContext, useState, useEffect } from "react";
/*===========================================================*/
/*------------------------- Context -------------------------*/
/*===========================================================*/


export const AppContext = createContext()

export function AppProvider({children}){
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width:768px)").matches);

        /*=== On resizing it check if it's mobile size or bigger===*/
        useEffect(()=>{
            window.addEventListener('resize', function(e){
                if(e.target.innerWidth < 768){
                    setIsMobile(true)
                } else {
                    setIsMobile(false)
                }
            })
        })

    
    return (<AppContext.Provider value={{isMobile}}>
        {children}
    </AppContext.Provider>)
}