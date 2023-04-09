import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AddProductsComponent } from "../pages/admin/add-products/add-products.component";
import { Observable } from "rxjs";

export class ProductGuard implements CanDeactivate<AddProductsComponent> {

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