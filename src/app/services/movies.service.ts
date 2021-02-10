import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movies } from "../models/movies";

const apiKey = "7b6ef331fc4dbc73d36cddd439cd5cf8";

@Injectable()
export class MoviesService {
  path: string = "https://api.themoviedb.org/3/";
  popular: string = "discover/movie?sort_by=popularity.desc";
  theaters: string =
    "discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22";
  kids: string =
    "discover/movie?sort_by=revenue.desc&include_adult=false&include_video=false";
  authentication: string = "&api_key=";
  constructor(private http: HttpClient) {}
  getPopular(): Observable<Movies> {
    return this.http.get<Movies>(
      this.path + this.popular + this.authentication + apiKey
    );
  }
  getTheaters(): Observable<Movies> {
    return this.http.get<Movies>(
      this.path + this.theaters + this.authentication + apiKey
    );
  }
  getKids(): Observable<Movies> {
    return this.http.get<Movies>(
      this.path + this.kids + this.authentication + apiKey
    );
  }
}
