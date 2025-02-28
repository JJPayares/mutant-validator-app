import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Necesario para [(ngModel)]

@Component({
  selector: 'app-mutant-checker',
  standalone: true,
  templateUrl: './mutant-checker.component.html', // ✅ Usa templateUrl
  styleUrls: ['./mutant-checker.component.css'], // ✅ Usa styleUrls
  imports: [CommonModule, FormsModule] // ✅ Agrega FormsModule para ngModel
})
export class MutantCheckerComponent {
  dnaInput: string = '';
  result: boolean | null = null;

  checkMutant() {
    const dnaArray = this.dnaInput.split('\n').map(line => line.trim().toUpperCase());
    this.result = isMutant(dnaArray);
  }
}

function isMutant(dna: string[]): boolean {
    const size = dna.length;
    let sequences = 0;
    
    function checkSequence(x: number, y: number, dx: number, dy: number): boolean {
        const base = dna[x][y];
        for (let i = 1; i < 4; i++) {
            if (x + dx * i >= size || y + dy * i >= size || x + dx * i < 0 || y + dy * i < 0 || dna[x + dx * i][y + dy * i] !== base) {
                return false;
            }
        }
        return true;
    }
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (
                (j <= size - 4 && checkSequence(i, j, 0, 1)) || // Horizontal
                (i <= size - 4 && checkSequence(i, j, 1, 0)) || // Vertical
                (i <= size - 4 && j <= size - 4 && checkSequence(i, j, 1, 1)) || // Diagonal \\ 
                (i >= 3 && j <= size - 4 && checkSequence(i, j, -1, 1)) // Diagonal /
            ) {
                sequences++;
                if (sequences > 1) return true;
            }
        }
    }
    return false;
}
