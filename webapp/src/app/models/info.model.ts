/**
 * @enum Status
 * @description list of possible status for the shirts
 */
export enum Status {
    purchased = 'purchased',
    shipped = 'shipped',
    delivered = 'delivered',
    completed = 'completed',
    claimed = 'claimed',
}
/**
 * @enum Size
 * @description list of sizes
 */
export enum Size {
    XS = 'xs',
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
    XXL = 'xxl',
}
/**
 * @enum ShirtInfo
 * @description other shirt details
 */
export interface ShirtInfo {
    model_sex: boolean
    color: string
    purchaseDate: string
    cost: number
    owner: string
    status: Status
    size: Size
    /** to be continued */
}

export const mock: ShirtInfo = {
    model_sex: true,
    color: 'white',
    purchaseDate: '01/01/2020',
    cost: 20,
    owner: 'abc12345',
    status: Status.delivered,
    size: Size.L,
}
