import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path:'addstudent',component:CreateStudentComponent},
  {path:'students' ,component:StudentsListComponent},
  {path:'' ,component:StudentsListComponent},
  {path:'update-student/:id' ,component:UpdateStudentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
