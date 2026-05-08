import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class Card {
  posterUrl = input<string>('');
  title = input<string>('');
  year = input<string>('');
  genre = input<string>('');
  rating = input<string>('');
  isFavorite = input<boolean>(false);


}
