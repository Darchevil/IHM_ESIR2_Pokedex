# IHM_ESIR2_Pokedex
A pokedex using angular 

Angular Material a été utilisé pour apporter du style au pokédex.

## Q1 

Le composant créé s'appelle "Poke-manager.component". Il possède l'élément input qui permet de rechercher un pokemon en y entrant le nom. J'ai utilisé le dataBinding [(ngModel)] qui permet de lier une variable name à ce qu'on rentre dans l'input
```
 <input [(ngModel)]='name'`>
 ``` 


## Q2 & Q3
Un exemple de data-binding sur le composant "poke-manager.component":

```
<mat-select [(ngModel)]="searchString">
...

<mat-card-subtitle> id : {{searchString}} </mat-card-subtitle>
```
ici nous avons un lien entre le searchString qui est sélectionné dans le "mat-select" et l'affichage de searchString dans le "mat-card-subtitle"

## Q4 

Ma classe pokemon est la suivante 

```
export class Pokemon {
        constructor(
                public id :number,
                public name : string,
                public sprite: string,
                public url: string,
                public type : string [2]
        ){}
    }

```

La classe contient un numéro (l'id du pokemon), le nom du pokemon et sa photo (sprite) et l'url correspond à son url qui permet de récupérer d'autres informations quant au type etc. Dans la classe, le type correspond à un tableau de 2 éléments car sur l'API, un pokémon a généralement 2 types.

## Q5

La liste de pokémon a été créée mais elle est remplacée par la liste de pokémon qui est demandée à l'API (getPokemons())

## Q6  & Q7 

La liste des pokemon est affichée en utilisant le code suivant : 
```
 *ngFor="let pokemon of listPokemon
```
"pokemon" est l'élément de type Pokemon dans ma liste de pokémon qui s'appelle listPokemon.




## Q8

Le Pipe se nomme :  "FilterPokemonPipePipe". Pour permettre de filtrer la liste de pokémon depuis une entrée, j'utilise le pipe dans un ngFor comme ceci, en utilisant mat-tile de Angular Material  : 
```
 <mat-grid-tile *ngFor="let pokemon of listPokemon |filterPokemon :'name' : name" style="background-color:red;" >
          <mat-grid-tile-header>#{{pokemon.id}} {{pokemon.name}}</mat-grid-tile-header>
        <img class = "pokemon-img" src= {{pokemon.sprite}} (click) = "choosePokemonByCard(pokemon)">
        </mat-grid-tile>  

```


## Q9
Pour valider le choix du dresseur j'ai créé une fonction "choosePokemon()" qui se déclenche à l'évenement du click sur le bouton GO. Cette fonction qui récupère le pokemon que le dresseur a choisi dans la liste déroulante et qui recherche dans la liste de pokemon, celui qui correspond au choix du dresseur. Sur cette version, l'utilisateur peut cliquer directement sur la carte d'un des pokémons de la liste. Le bouton se présente comme ceci : 

```
 <button mat-fab color="accent" (click)="choosePokemon()">GO</button>

```

(click) indique au composent de lancer la fonction suivante lors d'un événement de click sur le bouton.


## Q10

Mon service s'appelle "PokeServiceService". Dans son constructeur je rajoute "p"rivate http: HttpClient" pour récupérer le service http et bien entendu le 

```
@Injectable({
  providedIn: 'root'
})
```
qui spécifie que le service peut être utilisé partout.

## Q11

La méthode pour récupérer tous les pokémons s'appelle "GetPokemon()" qui utilise un Observable pour faire une requête à l'API :

```
getPokemon(): Observable<any> {
    return this.http.get(this.PokeUrl);
  }

```

## Q12 

Pour que le service soit utilisable par mon composant "poke-manager.component", dans le fichier poke-manager.component.ts, je lui ajoute, dans la partie @Component, le code suivant : 
```
providers: [PokeServiceService]

```
qui permet d'injecter le service dans le composant poke-manager.

## Q13

La méthode pour récupérer les pokémons dans l'API se situe dans le composant poke-manager et s'appelle "getPokemons()". Il utilise le subscribe() afin de s'abonner au service et de récupérer les données. La méthode est ici : 

```
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

```

### Q14

J'ai créé un composant qui s'appelle "info-pokemon.component" et je lui ai ajouté le providers [PokeServiceService] de mon service afin qu'il puisse lui aussi récupérer les données via le service. Elle partage les informations avec le composant poke-manager.

## Q15 & Q16

Mon observable créé sur mon service permet de mettre à jour constamment les informations liées au changement de pokémon.


## Les fonctionnalités ajoutées 

 le pokédex affiche : 
 - L'id
 - Le nom
 - La photo du pokemon 

L'utilisateur peut avoir accès à ces informations en cliquant : 
- Sur la liste déroulante (il faut d'abord chercher un pokémon sur la barre de recherche avant d'utiliser la liste déroulante)
- Sur les différentes cartes de pokémon qui s'affichent.


La liste des pokémons qui s'affichent est mise à jour lorsqu'on recherche un pokémon sur la barre de recherche.







Yoann d'Erneville 
