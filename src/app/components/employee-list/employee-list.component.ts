import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import{ActivatedRoute, Router} from '@angular/router'
import {NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { employeeRecords } from 'src/app/employeeRecords';
import { AnyError } from 'mongodb';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  // empRecords : employeeRecords[] = Records;
  // displayedColumns: string[] = ['name', 'id', 'salary', 'jobPosition', 'address', 'phoneNumber', 'action'];
  // columnsToDisplay: string[] = this.displayedColumns.slice();
  // data:  employeeRecords[] = this.empRecords;

  displayedColumns: string[] = [ 'name','salary', 'jobPosition', 'address', 'phoneNumber', 'actions'];
  Records: employeeRecords[] = [];
  dataSource = this.Records;  
  editedEmployee:employeeRecords;
 
 
  constructor(private employeeService: EmployeeService,  private router: Router ){}

  ngOnInit(): void {
      this.getEmployees()
  }

  addNewEmployee(){
    this.router.navigate(['/employee'])
  }

  getEmployees(){
    this.employeeService.getEmployeeList().subscribe({
      next: (data) => {
        this.dataSource = data
      }
    })
  }


  onEdit(employeeId: string ):void{
  this.router.navigate(['/employee-details', employeeId])
   return this.employeeService.getEmployee(employeeId)
    
  }



delete(employeeId: string){    
    this.employeeService.deleteEmployee(employeeId)
    this.getEmployees()
  }

   

}
/*this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });


        deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }
        */