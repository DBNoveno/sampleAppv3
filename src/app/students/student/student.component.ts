import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService : StudentService) { }

  ngOnInit() {
    this.resetForm();  }

  onSubmit(form: NgForm){
    if(form.value.$key == null)
    this.studentService.insertStudent(form.value)
      else
    this.studentService.updateStudent(form.value);
    this.resetForm(form);
  }

resetForm(form? : NgForm){

  if(form!= null)
  form.reset();
  this.studentService.selectedStudent = {
    $key : null,
    studentnumber : 0,
    name : '',
    address : '',
    age : 0,
    course : '',
    yearandsection : '',
  }
}

onDelete(form: NgForm){
  if(confirm('Are you sure that you want to delete this record ?')==true){
    this.studentService.deleteStudent(form.value.$key);
    this.resetForm(form);
  }
}

}
