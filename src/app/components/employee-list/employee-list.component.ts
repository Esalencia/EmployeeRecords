import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import {NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { employeeRecords } from 'src/app/employeeRecords';
import {Records} from 'src/app/Records';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  empRecords : employeeRecords[] = Records;
  displayedColumns: string[] = ['name', 'id', 'salary', 'jobPosition', 'address', 'phoneNumber', 'action'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data:  employeeRecords[] = this.empRecords;

  constructor(private employeeService: EmployeeService){}


  onEdit(){}

  onDelete(){}
}

