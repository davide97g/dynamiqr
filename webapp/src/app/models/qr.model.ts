/**
 * @description models the QR entity
 * @param code the information inside the QR
 * @param scans the number of times the qr has been scanned
 * @param link the link to which the webapp will redirect
 */
export interface QR {
    code: string
    scans: number
    link: string
}

export const mocks: QR[] = [
    {
        code: '11111',
        scans: 12,
        link: 'https://google.com',
    },
    {
        code: '44444',
        scans: 34,
        link: 'https://facebook.com',
    },
    {
        code: '23123',
        scans: 56,
        link: 'https://davideghiotto.it',
    },
]
