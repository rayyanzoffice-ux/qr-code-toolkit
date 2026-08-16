import type { InputHTMLAttributes,SelectHTMLAttributes,TextareaHTMLAttributes } from 'react'
export function FieldGroup({label,required,children}:{label:string;required?:boolean;children:React.ReactNode}){return <label className="field"><span>{label}{required&&<b> *</b>}</span>{children}</label>}
export function TextInput(p:InputHTMLAttributes<HTMLInputElement>){return <input className="input" {...p}/>}
export function TextArea(p:TextareaHTMLAttributes<HTMLTextAreaElement>){return <textarea className="input min-h-24 resize-y" {...p}/>}
export function SelectInput(p:SelectHTMLAttributes<HTMLSelectElement>){return <select className="input" {...p}/>}
export function ColorInput({value,onChange}:{value:string;onChange:(v:string)=>void}){return <div className="color-input"><input type="color" value={value} onChange={e=>onChange(e.target.value)}/><code>{value.toUpperCase()}</code></div>}
export function RangeInput({value,min,max,onChange}:{value:number;min:number;max:number;onChange:(v:number)=>void}){return <input aria-label="Range control" type="range" value={value} min={min} max={max} onChange={e=>onChange(+e.target.value)}/>} 
