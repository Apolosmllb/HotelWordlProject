import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
//angular material
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";

//components
import { LoginComponent } from "./pages/components/login/login.component";
import {HomeComponent} from "./pages/components/hotelmanager/home/home.component";
import {EmployeesService} from "./pages/services/employees.service";
import {MatSliderModule} from "@angular/material/slider";
import {EmployeesComponent} from "./pages/components/hotelmanager/employees/employees.component";
import {RoomsComponent} from "./pages/components/hotelmanager/rooms/rooms.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HotelmanagerComponent} from "./pages/components/hotelmanager/hotelmanager.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {NavbarComponent} from "./pages/components/hotelmanager/navbar/navbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

import { HttpClientModule } from "@angular/common/http";
import { ClientsComponent } from './pages/components/hotelmanager/clients/clients.component';
import { RegisterclientsComponent } from './pages/components/hotelmanager/registerclients/registerclients.component';
import { InventoryComponent } from './pages/components/hotelmanager/inventory/inventory.component';
import { HotelsComponent } from './pages/components/hotelguest/hoteles/hotels.component';
import { HomeGComponent } from './pages/components/hotelguest/home-g/home-g.component';
import { NavbarGComponent } from './pages/components/hotelguest/navbar-g/navbar-g.component';
import {HotelsService} from "./pages/services/hotels.service";

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import{ MatRadioModule} from "@angular/material/radio";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { LayoutModule } from '@angular/cdk/layout';
import { ScheduleComponent } from './pages/components/hotelmanager/schedule/schedule.component';
import {FullCalendarModule} from "primeng/fullcalendar";
import { ChatComponent } from './pages/components/chat/chat.component';
import { ChatGComponent } from './pages/components/chat-g/chat-g.component';
import { HoteldescriptionComponent } from './pages/components/hotelguest/hoteldescription/hoteldescription.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { ProductListComponent } from './pages/components/items/product-list/product-list.component';
import { ProductComponent } from './pages/components/items/product/product.component';
import { CartComponent } from './pages/components/items/cart/cart.component';
import { CreateProductComponent } from './pages/components/items/create-product/create-product.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    RoomsComponent,
    HotelmanagerComponent,
    NavbarComponent,
    ClientsComponent,
    RegisterclientsComponent,
    InventoryComponent,
    HotelsComponent,
    HomeGComponent,
    NavbarGComponent,
    ScheduleComponent,
    ChatComponent,
    ChatGComponent,
    HoteldescriptionComponent,
    RegisterComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    CreateProductComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatDatepickerModule,
    MatListModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    LayoutModule,
    FullCalendarModule,



  ],
  providers: [EmployeesService,
    HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
