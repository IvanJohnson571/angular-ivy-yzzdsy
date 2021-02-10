import { Component, OnInit } from "@angular/core";
import { Movie } from "../models/movie";

import { MoviesService } from "../services/movies.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  popular: any;
  theaters: any;
  kids: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => {
      this.popular = data;
      console.log(this.popular);
    });

    this.moviesService.getTheaters().subscribe(data => {
      this.theaters = data;
      console.log(this.theaters);
    });
    this.moviesService.getKids().subscribe(data => {
      this.kids = data;
      console.log(this.kids);
    });
  }
  
  
}

