import { Component, OnInit, Input } from '@angular/core';
import {PokeServiceService} from '../poke-service.service';
import { Pokemon } from '../pokemon';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-info-pokemon',
  templateUrl: './info-pokemon.component.html',
  styleUrls: ['./info-pokemon.component.css'],
  providers: [PokeServiceService] 
})
export class InfoPokemonComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {


    
  }

}
