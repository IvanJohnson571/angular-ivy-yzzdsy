//modules:
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//components:
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MoviesComponent } from "./movies/movies.component";
import { NavigationComponent } from "./navigation/navigation.component";
//services:
import { MoviesService } from "./services/movies.service";
import { MovieComponent } from './movie/movie.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
