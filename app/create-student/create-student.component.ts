import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  student :Student = new Student();


  constructor(private studentserice : StudentServiceService, private router : Router){}

  addStudentData()
  {
   this.studentserice.addstudent(this.student).subscribe(data=>{
    alert("student Data is inserted sucessfully");
    this.gotoStudentList();
   },error=>("Unable to add"))
  }


gotoStudentList()
{
  this.router.navigate(['/'])
}
}
