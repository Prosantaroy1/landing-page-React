import { animate, delay } from "framer-motion";

export const SlideUp= (delay)=>{
    return {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition :{
                duration: 0.5,
                delay,
            }
        }
    }
}