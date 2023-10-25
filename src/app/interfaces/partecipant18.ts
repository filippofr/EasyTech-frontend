import { Tipology } from "./tipology"

export interface Partecipant18 {
    axeraCode: string
    firstName: string
    lastName: string
    age: number
    address: string
    nationalInsuranceNumber: string
    email: string
    telephoneNumber: number
    tipology: Tipology
    iscriptionForm: boolean
    privacyAccepted: boolean
    imageReleaseAccepted: boolean
    paymentDone: boolean
    paymentVerified: boolean
    date: Date
    id: string
}