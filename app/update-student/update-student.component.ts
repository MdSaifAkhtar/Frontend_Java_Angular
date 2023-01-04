import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  student : Student = new  Student();
  id!:number;
  constructor(private route:ActivatedRoute, private studentservice : StudentServiceService, private router : Router)
  {

  }
  ngInit():void
  {
this.id=this.route.snapshot.params['id'];
console.log(this.id);
this.studentservice.getStudentById(this.id).subscribe(data=>{
  this.student=data;
  console.log(this.student);
})
  }

 
  Update()
  {
this.studentservice.UpadteStudent(this.student).subscribe(data=>{
  alert("Updated Sucessfully");
  this.router.navigate(['/students'])
},error=>alert("sorry to update"));

  }
}
