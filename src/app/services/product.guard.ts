import { ActivatedRouteSnapshot, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AddProductsComponent } from "../pages/admin/add-products/add-products.component";
import { Observable, tap } from "rxjs";
import { Product } from "../models/product.model";
import { ProductService } from "./product.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductGuard implements CanDeactivate<AddProductsComponent>, Resolve<Product[]> {

    constructor(private ps: ProductService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
        return this.ps.getAllProducts().pipe(tap( products => {
            if (!products.length) {
                this.router.navigateByUrl('/');
            }
        }));
    }

    canDeactivate(component: AddProductsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (component.form?.invalid) {
            if (confirm('Your Form Is Invalid are u sure you want to leave')) {
                return true;
            } else {
                return false;
            };
        } else {
            return true;
        }
    }
}