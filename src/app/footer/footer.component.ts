import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [CommonModule, MatIconModule],
  selector: 'app-footer',
  standalone: true,
  styleUrls: ['./footer.component.css'],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  socialIcons = [`facebook`, `twitter`, `instagram`];
}
