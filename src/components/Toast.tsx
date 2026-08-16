import {AnimatePresence,motion} from 'framer-motion'
import {CheckCircle2} from 'lucide-react'
export function Toast({message}:{message:string}){return <AnimatePresence>{message&&<motion.div className="toast" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}}><CheckCircle2 size={18}/>{message}</motion.div>}</AnimatePresence>}
