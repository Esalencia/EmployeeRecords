import { Injectable } from '@angular/core';
import { employeeRecords } from '../employeeRecords';
import { Records } from '../Records';
import{HttpClient,HttpHeaders}from '@angular/common/http';
import{Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 /* constructor(private httpClient: HttpClient) { }

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
