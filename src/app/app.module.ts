import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeManagerComponent } from './poke-manager/poke-manager.component';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { InfoPokemonComponent } from './info-pokemon/info-pokemon.component';
import {PokeServiceService} from './poke-service.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    PokeManagerComponent,
    FilterPokemonPipePipe,
    InfoPokemonComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule
    
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  
  providers: [PokeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
