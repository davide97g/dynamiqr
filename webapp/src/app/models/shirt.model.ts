import { QR, mocks as qrs } from './qr.model'
import { ShirtInfo, mock as info } from './info.model'
/**
 * @description Models the Dynamic Shirt
 * @param id unique identifier
 * @param version global version of the model
 * @param qrs list of qr codes
 * @param purchaseDate the date when it was purchased
 * @param cost how much money costed
 * @param owner the current owner of the shirt
 * @param info the additional info about the shirt
 */
export interface Shirt {
    id: string
    version: string
    qrs: QR[]
    info: ShirtInfo
}

export const latest_version: string = '1.0'

export const mock: Shirt = {
    id: '1',
    version: latest_version,
    qrs: qrs,
    info: info,
}

export const mocks: Shirt[] = [
    {
        id: '1',
        version: latest_version,
        qrs: qrs,
        info: info,
    },
    {
        id: '2',
        version: latest_version,
        qrs: [qrs[1]],
        info: info,
    },
]
