export class Car {
    price: number | null = 0;
    brand: string | null = 'Default';
    color: string | null = 'Blue';
    outOfStock: boolean = false;
    type: CarType | null =  null
}

export enum CarType {
    SUV,
    LEMO,
    SPORTS
}