import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponComponent } from './components/coupon/coupon.component';

const routes: Routes = [
  {path:'coupon',component:CouponComponent},
  {path:'', redirectTo:'/coupon', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
