import { Qr } from './qr.model'

export interface Shirt {
    version: string
    user: string
    qrs: Qr[]
    cost: number
}
