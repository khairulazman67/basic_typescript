export enum  customerType{
    REGULAR = 'REGULAR',
    GOlD = 'GOlD',
    PLATINUM = 'PLATINUM' 
}

export type Customer= {
    id : number;
    name : string;
    type : customerType;
}