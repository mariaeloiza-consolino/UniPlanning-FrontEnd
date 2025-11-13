import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('telas-uniplanning');

  img1 = "./assets/imagens/telas-uniplanning/src/assets/imagens/Screenshot-removebg-preview.png";
}
