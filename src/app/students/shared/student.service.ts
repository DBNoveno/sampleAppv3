import { Injectable } from '@angular/core';
import {  AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Student } from './student.model';

@Injectable()
export class StudentService {
  studentList : AngularFireList<any>;
  selectedStudent : Student = new Student();
  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.studentList = this.firebase.list('students');
    return this.studentList;
  }

  insertStudent(student : Student){
    this.studentList.push({
        studentnumber : student.studentnumber,
        name : student.name,
        address : student.address,
        age : student.age,
        course : student.course,
        yearandsection : student.yearandsection

    })
  }

  updateStudent(emp: Student){
    this.studentList.update(emp.$key,{
      studentnumber : emp.studentnumber,
      name : emp.name,
      address : emp.address,
      age : emp.age,
      course : emp.course,
      yearandsection : emp.yearandsection
    })
  }

  deleteStudent(key: string)
{
    this.studentList.remove(key);
}
}



