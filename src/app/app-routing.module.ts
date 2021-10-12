import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlickerComponent } from './component/flicker/flicker.component';
import { FlickerdetailComponent } from './component/flickerdetail/flickerdetail.component';


const routes: Routes = [
  {path : '',component:FlickerComponent},
  {path:'flickerdetail',component:FlickerdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
