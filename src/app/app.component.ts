import { Component } from '@angular/core';
import {StudentService} from './student.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student';

  public students:any = [];

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data=> this.students = data);
  }

}
