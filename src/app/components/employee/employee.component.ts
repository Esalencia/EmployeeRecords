import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Subscription } from "rxjs";
import { EmployeeListComponent, employeeRecord } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{

  name:string;
  id: string;
  salary:string;
  jobPosition:string;
  address:string;
  phoneNumber:string;
  subscription: Subscription;
  showAddEmployee:boolean;
 

  constructor(private employeeService: EmployeeService){
    this.subscription = this.employeeService
    .addEmployee()
    .subscribe((value) => (this.showAddTask= value));
  }
  
  ngOnInit(): void {
    
  }
  onSubmit(){

    if (!this.name) {
      alert('Please Bruh add some damn text');
      return;
    }
  

 const newEmployee: employeeRecord = {
    name: this.name,
    id: this.id,
     salary: this.salary,
     jobPosition:this.jobPosition,
     address:this.address,
     phoneNumber:this.phoneNumber

   };

 this.addEmployee.emit(newEmployee);

  this.name='';
  this.id='';
  this.salary= '';
  this.jobPosition='';
  this.address= '';
  this.phoneNumber= '';
  

  }

}
