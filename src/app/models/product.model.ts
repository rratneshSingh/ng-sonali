export class Product {
    id: number | null = null;
    title: string | null = null;
    description: string | null = null;
    price: number | null = null;
    stockCount: number | null = null;
}

export interface CartItem {
    id: number | null;
    count: number;
}