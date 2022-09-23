import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './observable/all/all.component';
import { FormEventComponent } from './observable/form-event/form-event.component';
import { IntervelComponent } from './observable/intervel/intervel.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';


const routes: Routes = [
  {path:'', redirectTo:"promise",pathMatch:"full"},
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable', component: ObservableComponent, children: [
      { path: '', component: AllComponent },
      { path: 'form-event', component: FormEventComponent },
      {path:'interval', component:IntervelComponent}
   
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
