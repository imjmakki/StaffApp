import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  employeeValue: FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}
