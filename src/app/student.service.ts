import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseurl : string="http://localhost:3000/Students";

  constructor(private http:HttpClient) { }

  getStudents():Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this.baseurl);
  }
}
