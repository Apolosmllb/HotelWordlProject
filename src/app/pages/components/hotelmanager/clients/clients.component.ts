import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {Client} from "../../../model/client";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ClientsService} from "../../../services/clients.service";

import * as _ from "lodash";
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientData:Client;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'lastname', 'gmail','phone', 'actions'];

  @ViewChild('employeeForm', {static: false})
  employeeForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private clientsService:ClientsService) {
    this.clientData = {} as Client;
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
    this.clientsService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  editItem(element: Client) {
    this.clientData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.employeeForm.resetForm();
  }

  deleteItem(id: number) {
    this.clientsService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Client) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addEmployee() {
    this.clientData.id = 0;
    this.clientsService.create(this.clientData).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateEmployee() {
    this.clientsService.update(this.clientData.id, this.clientData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Client) => {
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
