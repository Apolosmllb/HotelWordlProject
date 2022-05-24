import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {HotelsService} from "../../../services/hotels.service";
import {Hotel} from "../../../model/hotel";
import {MatTableDataSource} from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})



export class HotelsComponent implements OnInit {

  hotelarray:Hotel[];
  hotelData: Hotel;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private hotelService: HotelsService) {
    this.hotelarray = {} as Hotel[];
    this.dataSource = new MatTableDataSource<any>();
    this.hotelData = {} as Hotel;
  }

  getAllHotels() {
    this.hotelService.getAll().subscribe((response: any) => {
      this.hotelarray = response;
      this.dataSource=response;
    })
  }


  ngOnInit() {
    this.getAllHotels();
  }
}

