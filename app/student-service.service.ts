import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  baseURL="http://localhost:8081/student";

  constructor(private httpclient : HttpClient) { }

  addstudent(student :Student) :Observable<object>
  {
    console.log(student);
   return this.httpclient.post(`${this.baseURL}`,student);
  }


  getAllStudents():Observable<Student[]>
  {
    return this.httpclient.get<Student[]>(`${this.baseURL}`);
  }

  getStudentById(id:number):Observable<Student>
  {
    console.log(id);
return this.httpclient.get<Student>(`${this.baseURL}/${id}`);
  }



  UpadteStudent(student :Student) :Observable<Student>
  {
    console.log(student);
   return this.httpclient.post<Student>(`${this.baseURL}`,student);
  }
 
  
  
  
}
