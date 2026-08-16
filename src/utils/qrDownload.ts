import QRCode from 'qrcode'
import type { QROptions } from '../types'
const save=(href:string,name:string)=>{const a=document.createElement('a');a.href=href;a.download=name;a.click()}
export async function downloadPNG(payload:string,o:QROptions){save(await QRCode.toDataURL(payload,{width:o.size,margin:o.margin,errorCorrectionLevel:o.level,color:{dark:o.foreground,light:o.background}}),'qr-code.png')}
export async function downloadSVG(payload:string,o:QROptions){const svg=await QRCode.toString(payload,{type:'svg',width:o.size,margin:o.margin,errorCorrectionLevel:o.level,color:{dark:o.foreground,light:o.background}});const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));save(url,'qr-code.svg');setTimeout(()=>URL.revokeObjectURL(url),1000)}
