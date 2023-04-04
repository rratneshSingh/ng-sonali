import { BehaviorSubject } from "rxjs";
import { Product } from "../models/product.model";

export class ProductService {

    products: Product[] = [
        {
            id: '1',
            title: 'Lenovo Laptop',
            price: 45000,
            description: '4GB Ram, 15 inch screen',
            stockCount: 9
        },
        {
            id: '2',
            title: 'Samsung Laptop',
            price: 90000,
            description: '4GB Ram, 15 inch screen',
            stockCount: 7
        },
        {
            id: '3',
            title: 'HP Laptop',
            price: 30000,
            description: '4GB Ram, 15 inch screen',
            stockCount: 6
        },
        {
            id: '4',
            title: 'HP Mouse',
            price: 300,
            description: 'Wireless',
            stockCount: 6
        },
        {
            id: '5',
            title: 'Lenevo Keyboard',
            price: 2000,
            description: 'Wireless',
            stockCount: 6
        },
        {
            id: '6',
            title: 'BenQ Monitor',
            price: 10000,
            description: '15 inch screen',
            stockCount: 0
        }
    ];

    cart: { [id: string]: number } = {};

    cart$ = new BehaviorSubject(this.cart);

    onAddToCart(id: string) {
        this.cart = {...this.cart};
        this.cart[id] = (this.cart[id] || 0) + 1;
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.cart$.next(this.cart);
    }
    
    onRemoveToCart(id: string) {
        this.cart = {...this.cart};
        if ( this.cart[id] === 0) return;
        this.cart[id] -= 1;
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.cart$.next(this.cart);
    }

    getProductById( productId: string ) {
        return this.products.find( p => p.id === productId );
    }

    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart') || '{}');
        this.cart$.next(this.cart);
    }
}