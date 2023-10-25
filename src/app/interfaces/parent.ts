export interface Parent {
    id?: string;
    axeraCode?: string; //non avendo dati riguardanti ai clienti axera per il momento ho inserito un boolean
    //dati utente
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    nationalInsuranceNumber: string; //codice fiscale
    email?: string;
    telephoneNumber?: number;

    documentCopy: boolean;
}