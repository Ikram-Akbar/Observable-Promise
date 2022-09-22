import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {path:'', redirectTo:"promise",pathMatch:"full"},
  { path: 'promise', component: PromiseComponent },
  {path:"rxjs", component:RxjsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
