import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [CommonModule, MatButtonModule],
  selector: 'app-main',
  standalone: true,
  styleUrls: ['./main.component.css'],
  templateUrl: './main.component.html',
})
export class MainComponent {}
