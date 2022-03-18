import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  employeeValue!: FormGroup;
  employeeObj:EmployeeModel = new EmployeeModel();

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.employeeValue = this.formBuilder.group({
      name:[''],
      team:[''],
      email:[''],
      phone:['']
    })
  }


  AddEmployee() {

  }
}
