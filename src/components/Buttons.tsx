import type {LucideIcon} from 'lucide-react'
export function DownloadButton({icon:Icon,label,onClick}:{icon:LucideIcon;label:string;onClick:()=>void}){return <button className="action primary" onClick={onClick}><Icon size={17}/>{label}</button>}
export function CopyButton({icon:Icon,onClick}:{icon:LucideIcon;onClick:()=>void}){return <button className="action" onClick={onClick}><Icon size={17}/>Copy payload</button>}
