import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import {PokeServiceService} from '../poke-service.service';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-poke-manager',
  templateUrl: './poke-manager.component.html',
  styleUrls: ['./poke-manager.component.css'],
  providers: [PokeServiceService]
})
export class PokeManagerComponent{
myService;
  id : string = '';
  name : string ='';
  urlPokemon : string = '';
  searchString : string = "";
  choosed : boolean = false;
  choosedByCard : boolean = false;
  urlImage : string = ""; 
  listPokemon : Pokemon[]=[];
  listTypePokemon : string[] =  [];

  myPokemon = this.listPokemon[0];

  constructor(service: PokeServiceService) { this.myService = service }
  
  
  ngOnInit() {

    this.getPokemons();
    
    
  }
color() //Change la couleur en fonction du type du pokemon 
{
  
}
toogleChooseFalse()
{
  this.choosed = false;
}
toogleChooseCardFalse()
{
  this.choosedByCard = false;
}

choosePokemon()
{   
  this.myPokemon = this.listPokemon[this.searchString];
  // this.myPokemon = this.listPokemon[this.searchString];
  this.urlImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(this.searchString+1)+".png";
  this.choosed = true;
}

//Choix du pokemon avec la carte 
choosePokemonByCard(pokemon : Pokemon)
{
  var target = pokemon.name;
  this.myPokemon = this.listPokemon[pokemon.id];
  console.log("choosed pokemon : " + this.myPokemon.name);
  this.urlImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(pokemon.id+1)+".png";
  this.choosedByCard = true;
    
  console.log( "the target is : "+ target);
}
  //**************************************** */

  getPokemons()
  {
    this.myService.getPokemon().subscribe(data => {
    data.results.forEach((element,i) => {
      //Créer un tableau et inclure à chaque fois le type de pokémon et le rentrer dans le new Pokemon
    var poke=  new Pokemon(i,element.name, "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(i+1) +".png",element.url, this.listTypePokemon[i]); //On parcours le tableau et on attribue à la variable poke un nouveau pokemon
    this.listPokemon.push(poke); //On pousse la variable dans un tableau
    });
    console.log(this.listPokemon);
    });
  }

  getTypePokemon(url :string) //Get type for 1 pokemon 
  {
      var stringType;
      this.myService.getTypePokemon(url).subscribe(data =>{
        data.types.forEach((element,i)=>{
          var stringType = element.type.name;
        });
      }); 
      console.log(stringType);
      return stringType;
  }

  getTypePokemons() //get Type for all pokemons
  {
    this.listPokemon.forEach((element,i)=>{
      this.myService.getTypePokemon(element.url).subscribe(data =>{
        data.types.forEach((element,i)=>{
          var stringType = element.type.name;
          this.listTypePokemon.push(stringType);
        });
      }); 
    });
    console.log(this.listTypePokemon);
  }


  
}
