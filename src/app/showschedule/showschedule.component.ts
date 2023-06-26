import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-showschedule',
  templateUrl: './showschedule.component.html',
  styleUrls: ['./showschedule.component.css']
})
export class ShowscheduleComponent {
  constructor(private service:ServiceService){this.getschedule();}





  schedule: any;

  getschedule(){

    this.service.getschedule().subscribe(

      response => {

        this.schedule = response;

        console.log(this.schedule);

       

       

      }

    )

  }

}
