import { Injectable } from '@angular/core';
import { employeeRecords } from '../employeeRecords';
import { Records } from '../Records';
import{HttpClient,HttpHeaders}from '@angular/common/http';
import{Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(){}
  private apiURL = '../Records'

  constructor(private httpClient: HttpClient) { }

 addEmployee(data: employeeRecords): Observable<employeeRecords> {
    return this.httpClient.post<>(this.apiURL);
  }

  updateEmployee(id: string, data: any): Observable<any> {
    const url = `${this.apiURL}/${Records.any}`;
    return this.httpClient.put<Record>(url);
  }

  getEmployeeList(): Observable<any> {
    return this.httpClient.get<Records[]>{this.apiURL};
  }

  deleteEmployee(id: string): Observable<any> {
    const delurl =`{this.apiUrl}/${Records.id}`
    return this.httpClient.delete<employeeRecords>(delurl);
  }
  
}
