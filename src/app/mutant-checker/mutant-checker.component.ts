import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { isMutant } from '../utils/check-mutant';

@Component({
  selector: 'app-mutant-checker',
  standalone: true,
  templateUrl: './mutant-checker.component.html', 
  styleUrls: ['./mutant-checker.component.css'],
  imports: [CommonModule, FormsModule] 
})
export class MutantCheckerComponent {
  dnaInput: string = '';
  result: boolean | null = null;

  checkMutant() {
    const dnaArray = this.dnaInput.split('\n').map(line => line.trim().toUpperCase());
    this.result = isMutant(dnaArray);
  }
}

