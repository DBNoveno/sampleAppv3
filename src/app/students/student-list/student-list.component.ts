import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';

import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentlist : Student[];
  constructor(private studentService : StudentService) { }

  ngOnInit() {
    var x =  this.studentService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.studentlist =[];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.studentlist.push(y as Student);
      });
    });
  }

  onItemClick(emp: Student)
{
  this.studentService.selectedStudent = Object.assign({},emp);
}
}


