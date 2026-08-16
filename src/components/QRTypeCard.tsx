import {motion} from 'framer-motion'
import type {LucideIcon} from 'lucide-react'
export function QRTypeCard({label,icon:Icon,active,onClick}:{label:string;icon:LucideIcon;active:boolean;onClick:()=>void}){return <motion.button whileHover={{y:-2}} whileTap={{scale:.97}} className={`type-card ${active?'active':''}`} onClick={onClick}><Icon size={18}/><span>{label}</span>{active&&<motion.i layoutId="active-type"/>}</motion.button>}
