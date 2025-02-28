import { Component } from '@angular/core';
import { MutantCheckerComponent } from './mutant-checker/mutant-checker.component';

@Component({
  selector: 'app-root',
  imports: [MutantCheckerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mutant-validator-app';
}
