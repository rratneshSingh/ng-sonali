import { BehaviorSubject, Observable } from "rxjs";
import { CartItem, Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductService {

    productUrl = `${environment.baseUrl}/product`;
    cartUrl = `${environment.baseUrl}/cart`;

    cart: CartItem[] = [];

    cart$ = new BehaviorSubject(this.cart);

    addToCart(id: number | null) {
        debugger;
        if (!id) return;
        const cartItem = this.cart.find(c => c.id === id);
        if (cartItem) {
            this.http.put(`${this.cartUrl}/${id}`, { count: cartItem.count + 1 }).subscribe(() => {
                this.updateCart();
            })
        } else {
            this.http.post(`${this.cartUrl}`, { count: 1 }).subscribe(() => {
                this.updateCart();
            });
        }

    }

    removeFromCart(id: number | null) {
        if (!id) return;
        const cartItem = this.cart.find(c => c.id === id);
        if (cartItem) {
            if (cartItem.count === 1) {
                this.deleteCartItem(id).subscribe(() => {
                    this.updateCart();
                });
            } else {
                this.http.put(`${this.cartUrl}/${id}`, { count: cartItem.count - 1 }).subscribe(()=>{
                    this.updateCart();
                })
            }
        } else {
        }

    }

    updateCart() {
        this.getAllCartItems().subscribe(cartItems => {
            this.cart = cartItems;
            this.cart$.next(this.cart)
        })
    }

    deleteCartItem(id: number) {
        return this.http.delete(`${this.cartUrl}/${id}`);
    }
    getAllCartItems(): Observable<CartItem[]> {
        return this.http.get<CartItem[]>(`${this.cartUrl}`);
    }
    getCartItemById(id: number): Observable<CartItem> {
        return this.http.get<CartItem>(`${this.cartUrl}/${id}`);
    }
    getProductById(productId: string): Observable<Product> {
        return this.http.get<Product>(`${this.productUrl}/${productId}`);
    }
    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productUrl);
    }

    constructor(private http: HttpClient) {
        this.updateCart();
    }
}