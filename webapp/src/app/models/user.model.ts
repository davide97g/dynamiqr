import { Shirt } from './shirt.model'

export interface User {
    displayName: string
    email: string
    photoUrl: string
    shirts: Shirt[]
}
