import { Employee } from './../../employee.model';
import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  constructor(private service:SharedService) { }

  EmployeeList:any;

  ModalTitle:any;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  item1:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }


  populateForm(selectedRecord: any) {
    console.log(selectedRecord);
    this.service.formData = Object.assign({}, selectedRecord);
  }

  addClick(){
    //this.item1=null;

    this.emp={
      EmployeeId:0,
      EmployeeName:'',
      Department:'',
      DateOfJoining:''
    };

   this.emp=new Employee();

   this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }


  editClick(item:any){
    console.log(item);
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;

  }


  deleteClick(item: any){

    console.log(item);
    if(confirm('Are you sure??')){
      this.service.deleteEmployee(item.employeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }
}
