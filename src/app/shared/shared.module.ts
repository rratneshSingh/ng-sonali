import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MorePipe } from './pipes/more.pipe';
import { CartCountPipe } from './pipes/cart-count.pipe';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    MorePipe,
    CartCountPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarComponent, HeaderComponent, FooterComponent, MorePipe, CartCountPipe]
})
export class SharedModule { }
