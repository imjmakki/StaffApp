import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeModel} from "../../model/employee.model";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  employeeValue!: FormGroup;
  employeeObj:EmployeeModel = new EmployeeModel();

  constructor(private formBuilder:FormBuilder,
              private api:ApiService) { }

  ngOnInit(): void {
    this.employeeValue = this.formBuilder.group({
      name:[''],
      team:[''],
      email:[''],
      phone:['']
    })
  }


  AddEmployee() {
    this.api.postEmployee()
  }
}
