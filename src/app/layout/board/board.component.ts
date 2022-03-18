import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeModel} from "../../model/employee.model";
import {ApiService} from "../../shared/api.service";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  employeeValue!: FormGroup;
  employeeObj:EmployeeModel = new EmployeeModel();
  employeeList!: any[];

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
    this.employeeObj.name = this.employeeValue.value.name;
    this.employeeObj.team = this.employeeValue.value.team;
    this.employeeObj.email = this.employeeValue.value.email;
    this.employeeObj.phone = this.employeeValue.value.phone;
    this.api.postEmployee(this.employeeObj).subscribe((v) => {
      console.log(v)
    },
      (e) => {
      console.log(e)
      alert("Error")
    },
    () => {
      console.log("Done")
      alert("Employee Added Successfully")
      this.getEmployee();
      this.employeeValue.reset();
    }
  )
  }
  getEmployee(){
    this.api.getEmployee().subscribe(res => {
      this.employeeList = res;
    })
  }
}
