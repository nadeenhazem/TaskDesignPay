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

 