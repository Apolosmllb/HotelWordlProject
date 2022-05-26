import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/es';

import "node_modules/primeng/resources/primeng.min.css"
import "node_modules/primeng/resources/themes/nova/theme.css"
import "node_modules/primeicons/primeicons.css"
import "node_modules/@fullcalendar/core/main.min.css"
import "node_modules/@fullcalendar/daygrid/main.min.css"
import "node_modules/@fullcalendar/timegrid/main.min.css"


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public events: any[];
  public options: any;

  constructor() { }

  ngOnInit(): void {

    this.options={
      plugins:[dayGridPlugin,timeGridPlugin,interactionPlugin],
      defaultDate: new Date(),
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: false
    }


    this.events=[
      {
        title: "Evento 1",
        start: new Date(),
        description: "Evento 1"
      },
      {
        title: "Evento 2",
        start: new Date(new Date().getTime() + 8640000),
        description: "Evento 2"
      },
      {
        title: "Evento 3",
        start: new Date(new Date().getTime() + (8640000 * 2)),
        end: new Date(new Date().getTime() + (8640000 * 3)),
        description: "Evento 3"
      }
    ]
  }

}
