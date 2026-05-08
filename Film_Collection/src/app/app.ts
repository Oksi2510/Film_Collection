import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class App {
  protected readonly title = signal('Film_Collection');
}
