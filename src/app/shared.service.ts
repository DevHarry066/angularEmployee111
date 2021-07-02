import { Injectable, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 private url: string;

formData: Employee=new Employee();
  list !: Employee[];

  constructor(private http:HttpClient) {

    console.log(this.formData);
    this.url="https://localhost:44389/api";
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.url+'/Employee');
  }

  addEmployee(val:any){

    return this.http.post(this.url+'/Employee',val);
  }

  updateEmployee(val:any){
    console.log(this.formData);

    return this.http.put(this.url+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.url+'/Employee/'+val);
  }
}
