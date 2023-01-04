import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {

  constructor(private studentervice : StudentServiceService, private router : Router)
  {
  }

  students : Student[]=[];

  ngOnInit() : void{
    this.studentervice.getAllStudents().subscribe(data=>{
      this.students=data;
    })
  }

  updateStudent(id : number)
  {
    console.log(id);
   this.router.navigate(['update-student',id])
  }

}
