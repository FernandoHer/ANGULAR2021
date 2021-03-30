import { Component, Input, OnInit } from '@angular/core';

import { Personaje } from 'src/app/interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent  {


  nuevo: Personaje = 
    {
      nombre: "Juan",
      poder: 50000
    }

  

constructor( private dbzService: DbzService){

}

}
