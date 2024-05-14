import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  studentName:String="Mokan";
  studentMark:number=450;
  studentDOJ:Date=new Date();
  message:String="Event Binding";
  fontColor:String="blue";

  displayMessage(){
    alert(`Show message ${this.message}`);
  }
}
