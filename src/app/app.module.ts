import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCharactersComponent } from './components/movie-characters/movie-characters.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieSelectComponent } from './components/movie-select/movie-select.component';
import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieCharactersComponent,
    MovieDetailsComponent,
    MovieSelectComponent,
    GenderPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
