import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder} from "@angular/forms"
import{HttpClient} from "@angular/common/http";
import {Hotelguest} from "../../model/hotelguest";
import {Hotelmanager} from "../../model/hotelmanager";
import {HotelguestService} from "../../services/hotelguest.service"
import {HotelmanagerService} from "../../services/hotelmanager.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = "assets/logo_small.png"
  public loginForm!: FormGroup;
  typeUserClient="";
  dataUserHotelManager:Hotelmanager;
  dataUserHotelGuest:Hotelguest;
  show: boolean = false;
  constructor(private formBuilder:FormBuilder, private http: HttpClient,
              private router:Router, private hotelmanager:HotelmanagerService,
              private hotelguest:HotelguestService) {
   this.dataUserHotelManager = {} as Hotelmanager;
   this.dataUserHotelGuest = {} as Hotelguest;
  }
  password() {
    this.show = !this.show;
  }
  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
    if(this.typeUserClient==="HotelManager"){
      this.http.get<any>("http://localhost:3000/HotelManager")
        .subscribe(res=>{
            const user =res.find((a:any)=>{
              this.dataUserHotelManager=a;
              return a.email===this.loginForm.value.email&&a.password===this.loginForm.value.password
            });
            if(user){
              alert("login successfully");
              this.loginForm.reset();
              this.hotelmanager.CurrentdataManager=this.dataUserHotelManager
              this.router.navigate(['home'])

            }
            else{
              alert("User not found");
            }
          },
          err=>{
            alert("something went wrong");
          })


    }
    else if(this.typeUserClient==="HotelGuest"){
      this.http.get<any>("http://localhost:3000/HotelGuest")
        .subscribe(res=>{
            const user =res.find((a:any)=>{
              this.dataUserHotelGuest=a;
              return a.email===this.loginForm.value.email&&a.password===this.loginForm.value.password
            });
            if(user){
              alert("login successfully");
              this.loginForm.reset();
              this.hotelguest.CurrentHotelGuest=this.dataUserHotelGuest;
              this.router.navigate(['home-g'])
            }
            else{
              alert("User not found");
            }
          },
          err=>{
            alert("something went wrong");
          })


    }

  }

}
