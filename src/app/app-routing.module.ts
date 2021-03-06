import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/components/login/login.component";
import {HotelmanagerComponent} from "./pages/components/hotelmanager/hotelmanager.component";
import {EmployeesComponent} from "./pages/components/hotelmanager/employees/employees.component";
import {HomeComponent} from "./pages/components/hotelmanager/home/home.component";
import {RoomsComponent} from "./pages/components/hotelmanager/rooms/rooms.component";
import {ClientsComponent} from "./pages/components/hotelmanager/clients/clients.component";
import {InventoryComponent} from "./pages/components/hotelmanager/inventory/inventory.component";
import {RegisterclientsComponent} from "./pages/components/hotelmanager/registerclients/registerclients.component";
import {HotelsComponent} from "./pages/components/hotelguest/hoteles/hotels.component";
import {HomeGComponent} from "./pages/components/hotelguest/home-g/home-g.component";
import {ScheduleComponent} from "./pages/components/hotelmanager/schedule/schedule.component";
import {ChatComponent} from "./pages/components/chat/chat.component";
import{ChatGComponent} from "./pages/components/chat-g/chat-g.component";
import {HoteldescriptionComponent} from "./pages/components/hotelguest/hoteldescription/hoteldescription.component";
import {RegisterComponent} from "./pages/components/register/register.component";
import {ProductComponent} from "./pages/components/items/product/product.component";



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  {path: 'register', component: RegisterComponent},
  { path: 'hotelmanager',component:HomeComponent},
  { path: 'rooms',component:RoomsComponent},
  { path: 'home',component:HomeComponent},
  { path: 'clients',component:ClientsComponent},
  { path: 'employees',component:EmployeesComponent},
  { path: 'invetory',component:InventoryComponent},
  { path: 'registerclients',component:RegisterclientsComponent},
  { path: 'hotels',component:HotelsComponent},
  { path: 'home-g',component:HomeGComponent},
  { path: 'schedule',component:ScheduleComponent},
  { path: 'chat',component:ChatComponent},
  {path:'chat-g',component:ChatGComponent},
  { path: 'hoteldescription',component:HoteldescriptionComponent},
  { path: 'products', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
