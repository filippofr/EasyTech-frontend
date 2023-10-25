import { Delegate } from "./delegate";
import { Parent } from "./parent";
import { Tipology } from "./tipology"

export interface PartecipantU {
    id?: string;
    date?: Date;
    //dati utente
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    nationalInsuranceNumber: string; //codice fiscale
    tipology: Tipology;
    email?: string;
    telephoneNumber?: number;
    //checkbox
    iscriptionForm: boolean;
    privacyAccepted: boolean;
    imageReleaseAccepted: boolean;
    paymentDone: boolean;
    paymentVerified: boolean;
    documentCopy: boolean;
    parent: Parent;
    delegate1?: Delegate;
    delegate2?: Delegate;
    delegate3?: Delegate;
}