import { Component, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { Card } from '../card/card';
interface MovieCardData {
  posterUrl: string;
  title: string;
  year: string;
  genre: string;
  rating: string;
  isFavorite?: boolean;
}
@Component({
  selector: 'app-main',
  imports: [Card],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class Main implements OnInit {
  movies = signal<MovieCardData[]>([]);

  ngOnInit(): void {
    fetch('/assets/films.json')
      .then((response) => response.json())
      .then((data) => {this.movies.set(data)
      console.log(data)})
      .catch((err) => console.error(err));
  }
}
