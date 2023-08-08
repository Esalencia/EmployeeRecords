import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import {NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

export interface employeeRecord {
  name: string;
  id: string;
  salary: string;
  jobPosition: string;
  address:string;
  phoneNumber: string;
}

const employeeRecords: employeeRecord[] =[
  {
  name: 'Joyce Clark',
  id:'111',
  salary: '450',
  jobPosition:'Doctor' ,
  address: '7th-Street',
  phoneNumber: '0710101010'
  },
  {
  name: 'Wang Xiyi',
  id: '121',
  salary: '400',
  jobPosition:'Radiographer' ,
  address: '6th-Street',
  phoneNumber: '0773202020'
  },
  {
    name: 'Chamunorwa Chii',
  id: '131',
  salary: '500',
  jobPosition:'MD' ,
  address: '4th-Street',
  phoneNumber: '0780741741'
  },
]

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['name', 'id', 'salary', 'jobPosition', 'address', 'phoneNumber'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: employeeRecord[] = employeeRecords;

  constructor(private employeeService: EmployeeService){}

  editEmployee() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  deleteEmployee() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  addEmployee() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }
}
