import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { employeeRecords } from 'src/app/employeeRecords';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { EmployeeService } from 'src/app/services/employee.service';
import { Subscription } from "rxjs";
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  name:string;
  id:string;
  address:string;
  salary:string;
  jobPosition:string;
  phoneNumber:string;

  records: employeeRecords[]=[];

  constructor(private employeeService: EmployeeService ){}
    
  
  ngOnInit(): void {
   /* this.employeeService.getEmployeeList().subscribe({
      next:(data:any) =>{
        this.records = data.Records
      },
      error:(err:any) =>{
        console.log("error ",err)
      }
     })*/
  }

  addEmployee() {}

  deleteEmployee(){}
  
}
