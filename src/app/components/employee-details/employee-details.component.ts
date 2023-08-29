import { Component,OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { employeeRecords } from 'src/app/employeeRecords';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  name:string;
  id:string;
  address:string;
  salary:string;
  jobPosition:string;
  phoneNumber:string;

  records: employeeRecords[]=[];
employeeForm: NgForm;
 employee;
 employeeId;

 constructor(private employeeService: EmployeeService,private router:Router, private activatedRoute:ActivatedRoute){}

 ngOnInit():void{
  this.employeeId = this.activatedRoute.snapshot.paramMap.get('id');
  this.employee = this.employeeService.records.filter(x => x.id == this.employeeId)[0];
  console.log(this.employee)
 }

 onSubmit(){
  this.employeeService.updateEmployee(this.employeeId)
 /*this.employeeForm.form.patchValue({
    name: 'me',
    id: '2',
    jobPosition: 'd',
    salary: '1',
    address:'2',
    phoneNumber:'4',
  })
this.employeeService.getEmployee(this.employeeId)
 }*/
 }
 goBack(){
  this.router.navigate(['/employee-list'])
 }
}
