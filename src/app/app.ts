import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterModule,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-kart');
}
