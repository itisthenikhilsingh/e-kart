import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from './component/register/register';
import { Landing } from './component/landing/landing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Register,Landing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-kart');
}
