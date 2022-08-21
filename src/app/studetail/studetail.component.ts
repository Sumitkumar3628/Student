import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studetail',
  templateUrl: './studetail.component.html',
  styleUrls: ['./studetail.component.css']
})
export class StudetailComponent implements OnInit {

  public students:any=[];

  constructor(private StudentService:StudentService) { }

  ngOnInit(): void {
    this.students = this.StudentService.getStudents();
  }

}
