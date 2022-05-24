
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {Employee} from "../../../model/employee";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {EmployeesService} from "../../../services/employees.service";

import * as _ from "lodash";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeData:Employee;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'lastname', 'gmail','phone', 'actions'];

  @ViewChild('employeeForm', {static: false})
  employeeForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private employeesService:EmployeesService) {
    this.employeeData = {} as Employee;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllEmployees();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getAllEmployees() {
    this.employeesService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  editItem(element: Employee) {
    this.employeeData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.employeeForm.resetForm();
  }

  deleteItem(id: number) {
    this.employeesService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Employee) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addEmployee() {
    this.employeeData.id = 0;
    this.employeesService.create(this.employeeData).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateEmployee() {
    this.employeesService.update(this.employeeData.id, this.employeeData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Employee) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }


  onSubmit() {
    if (this.employeeForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateEmployee();
      } else {
        console.log('about to add');
        this.addEmployee();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }


}
