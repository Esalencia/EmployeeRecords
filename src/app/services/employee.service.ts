import { Injectable } from '@angular/core';
import { employeeRecords } from '../employeeRecords';
import { Records } from '../Records';
import{HttpClient,HttpHeaders}from '@angular/common/http';
import{Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  records : employeeRecords[] =[
    {
      name: 'Joyce Clark',
      id: '111',
      salary: '450',
      jobPosition: 'Doctor',
      address: '7th-Street',
      phoneNumber: '0710101010',
    },
    {
      name: 'Wang Xiyi',
      id: '121',
      salary: '400',
      jobPosition: 'Radiographer',
      address: '6th-Street',
      phoneNumber: '0773202020',
    },
    {
      name: 'Chamunorwa Chii',
      id: '131',
      salary: '500',
      jobPosition: 'MD',
      address: '4th-Street',
      phoneNumber: '0780741741',
    },
  ]

 getEmployeeList(): Observable<employeeRecords[]> {
    return of(this.records)
  }
 getEmployee(id:string):any{
 /* this.records =this.records.get((record : employeeRecords) => 
    return record. id !== id
   });*/
   this.records.map((record : employeeRecords)=>{
   return record. id !== id
 });
}
 
deleteEmployee(id: string): void {
    this.records = this.records.filter((record : employeeRecords) => {
      return record.id !== id
    });
    
    console.log(this.records)
  }

  addEmployee(employee:employeeRecords) /*: Observable<employeeRecords> */{
    this.records.push(employee)
  }

  updateEmployee(employee) {
   this.records.push(employee)
  }

 /* 
  getEmployeeList(): Observable<employeeRecords[]> {
    const records =of(Records)
    return Records
   /* return this.httpClient.get<Records[]>{this.apiURL};
  }


 addEmployee(data: employeeRecords): Observable<employeeRecords> {
    return this.httpClient.post<>(this.apiURL);
  }

  updateEmployee(employee: employeeRecords): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.httpClient.put<Records>(url, this.h);
  }

  
  deleteEmployee(id: string): Observable<any> {
    const delurl =`{this.apiUrl}/${Records.id}`
    return this.httpClient.delete<employeeRecords>(delurl);
  }*/
  
}
