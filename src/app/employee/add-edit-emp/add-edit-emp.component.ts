import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/employee.model';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(public service:SharedService) { }

  @Input() emp:any;
  EmployeeId: any;
  EmployeeName!:string;
  Department!:string;
  DateOfJoining!:string;

  ngOnInit(): void {
  }


  addTodo(id:any,name:any,dep:any,dateJoin:any)
  {

 console.log(id);
/*    console.log(name);
    console.log(dep);
    console.log(dateJoin);
    */
this.EmployeeName=name;
this.Department=dep;
this.DateOfJoining=dateJoin;
this.addEmployee();
}

addEmployee(){
  var val = {
              EmployeeId:this.EmployeeId,
              EmployeeName:this.EmployeeName,
              Department:this.Department,
               DateOfJoining:this.DateOfJoining,
          };

  this.service.addEmployee(val).subscribe(res=>{
    alert(res.toString());
console.log(val);
  });
}


  updateTodo(id:any,name:any,dep:any,dateJoin:any)
  {
    /*
    console.log("update");
    console.log(id);
    console.log(name);
    console.log(dep);
    console.log(dateJoin);
    */
    this.EmployeeId=id;
this.EmployeeName=name;
this.Department=dep;
this.DateOfJoining=dateJoin;
this.updateEmployee()
  }


  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
    DateOfJoining:this.DateOfJoining};

    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
}
}
