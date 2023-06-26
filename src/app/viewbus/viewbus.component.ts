import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viewbus',
  templateUrl: './viewbus.component.html',
  styleUrls: ['./viewbus.component.css']
})
export class ViewbusComponent {
  constructor(private service:ServiceService){this.getBus();}





  bus: any;

  getBus(){

    this.service.getBus().subscribe(

      response => {

        this.bus = response;

        console.log(this.bus);

       

       

      }

    )

  }

}
