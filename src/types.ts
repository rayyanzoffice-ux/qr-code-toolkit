export type QRType='url'|'text'|'wifi'|'whatsapp'|'vcard'|'email'|'sms'|'phone'|'location'|'event'
export type Fields=Record<string,string|boolean>
export type Pattern='square'|'rounded'|'dots'
export interface QROptions{foreground:string;background:string;accent:string;size:number;margin:number;level:'L'|'M'|'Q'|'H';pattern:Pattern}
