import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { employeeRecords } from 'src/app/employeeRecords';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { EmployeeService } from 'src/app/services/employee.service';
import { Subscription, from } from "rxjs";
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { ActivatedRoute, Router } from '@angular/router';

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

 

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router){}
    
  
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


  onSubmit() {
    
 const newEmployee:employeeRecords = {
  name: this.name,
  id: this.id,
   salary: this.salary,
   jobPosition:this.jobPosition,
   address: this.address,
   phoneNumber: this.phoneNumber,
 };

this.employeeService.addEmployee(newEmployee);

this.name='';
this.id='';
this.salary= '';
this.jobPosition='';
this.address='';
this.phoneNumber= '';

  }

  goBack(){
    this.router.navigate(['/employee-list'])
  }
 
  
}
