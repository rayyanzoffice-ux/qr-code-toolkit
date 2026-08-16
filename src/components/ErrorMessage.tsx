import {AlertCircle} from 'lucide-react'
export function ErrorMessage({message}:{message:string}){return <div className="error"><AlertCircle size={17}/><span>{message}</span></div>}
