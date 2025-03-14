import { Component, Input } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-game-section',
  standalone: true,
  imports: [CommonModule, NgFor, GameCardComponent],
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.css'],
})
export class GameSectionComponent {
  @Input() genre!: string;
  @Input() games!: {
    id: number;
    title: string;
    image: string;
    rating: number;
  }[];
}
