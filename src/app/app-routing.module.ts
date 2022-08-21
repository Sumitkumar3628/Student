import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { StudetailComponent } from './studetail/studetail.component';

const routes: Routes = [
  {path:'addstu',component:AddstudentComponent},
  {path:'editstu',component:EditstudentComponent},
  {path:'studetail',component:StudetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
