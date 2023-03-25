import type { goodOfferType, goodStatus } from "./constants"

export type Status = typeof goodStatus[number]
export type OfferType = typeof goodOfferType[number]

export type Good = {
    dealId?: string
    id: string
    title: string
    description: string
    location: string
    goodType: string
    seller: string
    offerType: OfferType
    cost: number
    currency: string
    isLiked: boolean
    status: Status
    quantity: number
    overallSum: number
}

