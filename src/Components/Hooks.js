import { useEffect, useState } from "react"
 
 export function useWindowDimensions() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height,setHeight]=useState(window.innerHeight)
    useEffect(() => {
      const dimensionsTracker = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }
      window.addEventListener("resize", dimensionsTracker)
  
      return () => {
        window.removeEventListener("resize", dimensionsTracker)
      }
    }, [])

    return {width,height}
    
  }

 export function ScrollBottom(){
    const [ReachBottom,setReachBottom]=useState(false);
    useEffect(()=>{
      const handelScroll=()=>{
        const offsetHeight=document.documentElement.offsetHeight;
        const innerHeight=window.innerHeight;
        const ScrollTop=document.documentElement.scrollTop;
        const hasReachedBottom=offsetHeight-(innerHeight+ScrollTop)<=20;
        setReachBottom(hasReachedBottom)
      }
      window.addEventListener("scroll",handelScroll)
      return()=>{
        window.removeEventListener("scroll",handelScroll)
      }
    },[])
    return ReachBottom
  }